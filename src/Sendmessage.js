import React from "react";
import {useState} from "react"
import {auth,db} from "./firebase"
import {addDoc,collection,serverTimestamp} from "firebase/firestore"
const style = {
  form: ` h-14 w-full max-w-[728px] flex text-xl absolute bottom-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `bg-green-500 text-white w-[20%]`,
};

const Sendmessage = ({scroll}) => {
  const [input, setInput] = useState('');

    const sendMessage = async (e) => {
        e.preventDefault();
        if(input==='')
        {
            alert('please enter a valid message');
            return
        }
        const {uid,displayName} = auth.currentUser;
        await addDoc(collection(db,'messages'),{
            text:input,
            name:displayName,
            uid,
            timestamp:serverTimestamp()
        })
        setInput('');
        scroll.current.scrollIntoView({behavior:'smooth'});
    }

  return (
    <form onSubmit={sendMessage}
    className={style.form}>
      <input value={input}
       onChange={(e)=>setInput(e.target.value)}
       className={style.input} type="text" placeholder="Type a message" />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default Sendmessage;
