import React from 'react'
import { auth } from './firebase';


const style={
    button:`bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600`
}
const Logout = () => {
const signOut=() =>{
    console.log('logging out');
    signOut(auth);
}

  return (
    <button className={style.button} onClick={()=>auth.signOut()}>
        LogOut
    </button>
  )
}

export default Logout