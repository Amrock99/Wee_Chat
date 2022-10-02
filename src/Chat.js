import React,{useState, useEffect, useRef} from 'react'
import Message from './Message'
import {query,collection,orderBy,onSnapshot} from 'firebase/firestore'
import {db} from './firebase'
import Sendmessage from './Sendmessage'

const style={
    main:`flex flex-col p-[10px] relative py-5 bg-green-100 my-7`
}
const Chat = () => {
  const [messages,setMessages]=useState([])
    const scroll=useRef();

    useEffect(()=>{
      const q= query(collection(db, 'messages'),orderBy('timestamp'))
      const unsubscribe=onSnapshot(q, (querySnapshot) => {
        let messages=[];
        querySnapshot.forEach((doc) => {
            messages.push({...doc.data(),id:doc.id})
        });
        setMessages(messages);
        // console.log(messages);
      });
      return()=> unsubscribe();
    },[])
  return (
    <>
      <main className={style.main}>
      {messages && messages.map((message=>(
      <Message key={message.id} message={message}/>
      )))}
      </main>
      <Sendmessage scroll={scroll}/>
      <span ref={scroll}></span>
      </>
  )
}

export default Chat