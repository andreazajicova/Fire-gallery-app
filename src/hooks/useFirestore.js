import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
// import { AuthContext } from '../components/Auth';
// import { app } from '../firebase/config';

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);
    // const { currentUser } = useContext(AuthContext);
    // const user = firebase.auth().currentUser;

    useEffect(() => {
        const unsubscribeFromCollection = projectFirestore.collection(collection)
        // .where("author", "==", currentUser.uid)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
                let documents = [];
                snap.forEach( doc => {
                    documents.push({ ...doc.data(), id: doc.id})
                    // console.log(doc);
                    // documents.push({ ...doc.data(), id: app.auth().currentUser.uid})
                   
                    // const db = window.firebase.firestore();
                    // const newBaseRef = db.collection('photos').doc();
                    // newBaseRef.set({
                    //   uid: window.firebase.auth().currentUser.uid,
                    //   createdAt: window.firebase.firestore.FieldValue.serverTimestamp()
                    // }).then(() => {
                    //   newBaseRef.onSnapshot(doc => {
                    //     console.log('Current data: ', doc.data())
                    //   }, function (error) {
                    //     throw error // THIS ALWAYS GETS HIT
                    //   })
                    // })
                }, err => {
                    console.log(err.message);
                });
                setDocs(documents);
            });
        
            return () => unsubscribeFromCollection();

    }, [collection]);
    // console.log(docs);
    return { docs };
}

export default useFirestore;