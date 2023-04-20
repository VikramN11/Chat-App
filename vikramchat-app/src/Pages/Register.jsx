import React from 'react';
import "../Style/register.scss";
import Add from "../images/fileimg.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {


  const handleSubmit = async (e)=>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const cpassword = e.target[3].value;
    const file = e.target[4].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

    
      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);


      uploadTask.on(
      (error) => {
       // Handle unsuccessful uploads
      }, 
      () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
         await updateProfile(res.user,{
          displayName,
          photoURL : downloadURL
         });
      });
    }
  );
    } catch (err) {
      console.log(err.code, err.message);
    }

  }




  return (
    <div className='formContainer'>
        <div className='formWrapper'>
          <span className='logo'>Vikram Chat</span>
          <span className='title'>Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Enter Name' />
            <input type="text" placeholder='Enter Email' />
            <input type="text" placeholder='Enter Password' />
            <input type="text" placeholder='Enter Confirm Password' />
            <input style={{display:"none"}} type="file" id='file' />
            <label htmlFor="file">
                <img src={Add} alt="fileimg" />
                <p>Add an Avatar</p>
            </label>
            <button>Register</button>
          </form>
          <p>You do have an account? Login</p>
        </div>
    </div>
  )
}

export default Register