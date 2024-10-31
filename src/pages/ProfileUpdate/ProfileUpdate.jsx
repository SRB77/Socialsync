import {React,useState} from 'react'
import "./ProfileUpdate.css";
import assets from '../../assets/assets';
function ProfileUpdate() {
  const [image ,setImage] = useState(false);
  return (
    <>
      <div className="profile">
        <div className="profile-container">
          <form>
            <h3>Profile Details</h3>
            <label htmlFor="avatar">
              <input onChange={(e)=>setImage(e.target.files[0])}  type="file" id='avatar' accept='.png , .jpg , .jpeg ' hidden/>
              <img src={image? URL.createObjectURL(image): assets.avatar_icon} alt="" />
              upload profile image
            </label>
            <input type="text" placeholder='Your Name' required/>
            <textarea placeholder='type your BIO ' required></textarea>
            <button type='submit'>save</button>
          </form>
          <img src={image ? URL.createObjectURL(image):assets.logo_icon} alt="" className='profile-pic'/>
        </div>
      </div>
    </>
  )
}

export default ProfileUpdate;