import React from 'react';
import Navbar from './Components/Navbar'
import{auth} from './firebase'
import { db } from './firebase';
import{useAuthState} from 'react-firebase-hooks/auth'
import Chat from './Components/Chat';
const style = {

  sectionContainer:`flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
}

function App() {
  const [user] = useAuthState(auth);
 console.log(user)

  return (
    <div className=' max-w-[728px] mx-auto text-center'>
     <section className={style.sectionContainer}>
      {/* Navbar*/}
      <Navbar />
      {/* Chat component */}
      <Chat/>
      </section>    
    </div>
  );
}

export default App;
