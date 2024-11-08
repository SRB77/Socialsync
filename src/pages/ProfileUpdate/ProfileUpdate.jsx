import { React, useContext, useEffect, useState } from "react";
import "./ProfileUpdate.css";
import assets from "../../assets/assets";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../config/firebase";
import { toast } from "react-toastify";
import upload from "../../lib/upload";
import { AppContext } from "../../context/AppContext";
function ProfileUpdate() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [image, setImage] = useState(false);
  const [uid,setUid] = useState("");
  const [previmage , setPrevimage] = useState("");
  const {setUserData} =useContext(AppContext)
  
  const profileUpdate = async(event)=>{
    event.preventDefault();
    try {
      if(!previmage && !image){
        toast.error("Upload profile picture ");
      }
      const docRef = doc(db,'users',uid);
      if(image){
        const imgUrl = await upload(image);
        setPrevimage(imgUrl);
        await updateDoc(docRef,{
          avatar:imgUrl,
          bio:bio,
          name:name  
        })
      }else{
       await updateDoc(docRef, {
         bio: bio,
         name: name
       });
      }
      const snap = await getDoc(docRef);
      setUserData(snap.data());
      navigate('/chat');
    } catch (error) {
        console.error(error);
        toast.error(error.message);
    }
  }
const navigate = useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        setUid(user.uid);
        const docRef = doc(db,"users",user.uid);
        const docSnap =  await getDoc(docRef);
        if(docSnap.data().name){
          setName(docSnap.data().name)
        }
        if (docSnap.data ().bio) {
          setBio(docSnap.data().bio);
        }
        if(docSnap.data ().avatar){
          setPrevimage(docSnap.data().avatar)
        }
      }else{
        navigate('/');
      }
    })
  },[])
  return (
    <>
      <div className="profile">
        <div className="profile-container">
          <form onSubmit={profileUpdate}>
            <h3>Profile Details</h3>
            <label htmlFor="avatar">
              <input
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="avatar"
                accept=".png , .jpg , .jpeg "
                hidden
              />
              <img
                src={image ? URL.createObjectURL(image) : assets.avatar_icon}
                alt=""
              />
              upload profile image
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="Your Name"
              required
            />
            <textarea
              onChange={(e) => setBio(e.target.bio)}
              value={bio}
              placeholder="type your BIO "
              required
            ></textarea>
            <button type="submit">save</button>
          </form>
          <img
            src={image ? URL.createObjectURL(image) : previmage? previmage: assets.logo_icon}
            alt=""
            className="profile-pic"
          />
        </div>
      </div>
    </>
  );
}

export default ProfileUpdate;
