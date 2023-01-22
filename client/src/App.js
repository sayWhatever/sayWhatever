import './App.css';
import Chatbox from './components/Chatbox';
import NameMenu from './components/NameMenu'
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io("localhost:5000/", {
  transports: ["websocket"]
});

const App = () => {

const [isConnected, setIsConnected] = useState(socket.connected);
const [userName, setUserName] = useState("");
const [formName, setFormName] = useState("");

  const handleUserName = (name) => {
    setUserName(name);
  }

  const handleChange = (event) => {
    setFormName(event.target.value);
  };

  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
      console.log("socket set to true");
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
    };
  }, []);

  return (
    <div>
      <h2> Say Whatever</h2>
      {userName === "" ? <span></span>  : <p>Hi {userName}</p>}
      {userName === "" ? 
      <NameMenu 
      formName={formName} 
      handleUserName={handleUserName}
      handleChange={handleChange}/>         
     :
     <Chatbox 
     userName={userName}
     socket={socket}/>}
    </div>
  );
}



export default App;
