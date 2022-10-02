import React from 'react'
import GoogleButton from 'react-google-button'
import { GoogleAuthProvider,signInWithRedirect } from 'firebase/auth';
import { auth } from './firebase';

const style={
    wrapper:`flex justify-center items-center`
}

const googleSignIn = () =>{
    console.log("Sign in with google");
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth,provider) 
}

const Signin = () => {
  return (
    <div className={style.wrapper}>
        <GoogleButton onClick={googleSignIn}/>
    </div>
  )
}

export default Signin