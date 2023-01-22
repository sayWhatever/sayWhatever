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

  const handleUserName = name => {
    setUserName(name);
  }


  useEffect(() => {
    socket.on('connect', () => {
      setIsConnected(true);
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
      {userName !== "" ? <Chatbox/> : <NameMenu setUserName={handleUserName}/>}

    </div>
  );
}



export default App;
