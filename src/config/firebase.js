import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import {doc, getFirestore, setDoc} from 'firebase/firestore'
// import { c } from 'vite/dist/node/types.d-aGj9QkWt';
import { toast } from 'react-toastify';
const firebaseConfig = {
  apiKey: "AIzaSyCzoLH5MPkJzAtv4ppf9CEvIzkqWr7uCxU",
  authDomain: "socialsyncfinal.firebaseapp.com",
  projectId: "socialsyncfinal",
  storageBucket: "socialsyncfinal.appspot.com",
  messagingSenderId: "738429764542",
  appId: "1:738429764542:web:0aee5c5412eabb5fa4afef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);
const signup = async(username,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user = res.user;
        await setDoc(doc(db,'users',user.uid),{
            id:user.uid,
            username : username.toLowerCase(),
            email,
            name: "",
            avatar: "",
            bio: "Hey i am using Socialsync",
            lastseen : Date.now()
        });
        await setDoc(doc(db,"chats",user.uid),{
            chatsData:[]
        });
    } catch (error) {
        console.error(error);
        toast.error(error.code.split("/")[1].split("-").join(" "));
    }
}

const login = async (email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.error(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const logout = async()=>{
   try {
    await signOut(auth);
   } catch (error) {
    console.error(error);
    toast.error(error.code.split("/")[1].split("-").join(" "));
   }
}
export {signup,login,logout,auth,db}
