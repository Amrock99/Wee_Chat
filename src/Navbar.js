import React from 'react';
import {auth} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import Signin from './Signin';
import Logout from './Logout';
const style={
    nav:`bg-gray-800 h-16 flex space-x-14 justify-center items-center`,
    heading:`text-white text-3xl text-left`
}

const Navbar = () => {
  const {user}=useAuthState(auth);
  return (
    <div className={style.nav}>
        <h1 className={style.heading}>Wee-Chat :)</h1>
        <Signin/>
        <Logout/>
    </div>
  )
}

export default Navbar
