import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZPWuvmq6tV0l0MypGK43qgVePwLAKaec",
  authDomain: "prueba-heyandes.firebaseapp.com",
  projectId: "prueba-heyandes",
  storageBucket: "prueba-heyandes.appspot.com",
  messagingSenderId: "881140817611",
  appId: "1:881140817611:web:5ec239ddbab723eb3c454e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const getSalesDB = async () => {
    let sales = []
    const querySnapshot = await getDocs(collection(db, "sales"));
    querySnapshot.forEach((doc) => {
        let data = { id: doc.id, ...doc.data() }
        sales = [ ... sales, data ]
    });
    return sales
}

export {
    db,
    getSalesDB
}