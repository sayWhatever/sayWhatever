import './App.css';
import Chatbox from './components/Chatbox';
import { io } from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io("localhost:5000/", {
  transports: ["websocket"]
});

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {
    console.log("useEffect run");
    socket.on('connect', () => {
      setIsConnected(true);
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
    });

    socket.on('pong', () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const sendPing = () => {
    socket.emit('ping');
  }


  return (
    <div>
      <h2> Say Whatever</h2>
      <Chatbox callMethod={sendPing}/>
      <p>Connected: {'' + isConnected}</p>
      <p>Last pong: {lastPong || '-'}</p>
      <button onClick={sendPing}>Send ping</button>
    </div>
  );
}



export default App;
