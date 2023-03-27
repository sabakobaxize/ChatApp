import { collection, onSnapshot, orderBy, query, QuerySnapshot, Timestamp } from 'firebase/firestore';
import React, {useState, useEffect, useRef} from 'react'
import Message from './Message'
import {db} from '../firebase'
import SendMessage from './SendMessage';


const Chat = () => {
     const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db,'Messages'),orderBy('TimeStamp'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

   return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      {/* Send Message Compoenent */}
      <SendMessage scroll={scroll} />
      <span ref={scroll}></span>
    </>
  );
}

export default Chat
