import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
//@ts-ignore
import { db } from "../firebase.ts";

const usersCollection = collection(db, 'users');

export const addUser = async (user) => {
    try {
        await addDoc(usersCollection, user);
        return true;
    } catch (error) {
        return false;
    }
};

export const getUsers = async () => {
    const result = await getDocs(usersCollection);
    return result;
}; 

export const deleteUser = async (id) => {

    const taskDocRef = doc(db, 'users', id)

    try {
        await deleteDoc(taskDocRef);
        return true;
    } catch (error) {
        alert(error)
    }

};
export const updateUser = async (user, id) => {
    console.log(`id: ${id}`)
    const taskDocRef = doc(db, 'users', id)

    try {
        await updateDoc(taskDocRef, user);
        return true;
    } catch (error) {
        alert(error)
    }

};