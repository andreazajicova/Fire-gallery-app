import { useState, useEffect, useContext } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { AuthContext } from '../components/Auth';

const useStorage = (file) => {
    const [progress, setProgress] = useState(null);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('users');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.doc(currentUser.uid).collection('photos').add({
                url,
                createdAt
            });
            setUrl(url);
        })
    }, [file]);

    return { progress, url, error }
}

export default useStorage;