import { db } from "../firebase";
import {
    collection,
    getDocs,
    addDoc,
    query,
    where,
    // getDoc,
    // updateDoc,
    // deleteDoc,
    // onSnapshot ,
    // doc
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");

class UserDataService {
    addUser = (newUser) => {
        return addDoc(userCollectionRef, newUser);
    }

    // getUser =(email) => {
    //     const userDoc = doc(db, "users", email);
    //     return getDoc(userDoc);
    // }

    getEmail = (email) => {
        const q = query(userCollectionRef, where("email", "==", email));
        return getDocs(q).then((qSnap) => {
            const data = qSnap.docs.map(d => ({ ...d.data() }))
            return data;
        })
    }
}

export default new UserDataService();