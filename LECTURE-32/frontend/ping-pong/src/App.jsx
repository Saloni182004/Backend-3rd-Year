import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  let [ws,setWs]=useState(null);   // to create state variable
  let inputref=useRef() //store any dom element reference and it is diff from useState bcoz it doesnot trigger re-rendering of a component
  useEffect(()=>{     //use to do side effect in react
    let socket=new WebSocket("ws://localhost:8015");
    socket.onmessage=((e)=>{
      console.log(e.data);
    })
    setWs(socket);
  },[])
  function sendMessage(){
    let message=inputref.current.value;
    ws.send(message);
    inputref.current.value=""
  }
  return (
    <>
      <h1>Ping Pong</h1>
      <input type="text" ref={inputref} />
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
