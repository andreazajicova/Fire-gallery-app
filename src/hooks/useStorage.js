import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
// import { AuthContext } from '../components/Auth';

const useStorage = (file) => {
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    // const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('photos');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            // const uid = currentUser.uid
            // const owner = currentUser.uid;
            collectionRef.add({ url, createdAt });
            // collectionRef.doc(uid).set({ url, createdAt })
            
            // projectFirestore.collection().ref('photos/' + currentUser.uid).set({
            //     url,
            //     createdAt,
            //   });
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error }
}

export default useStorage;