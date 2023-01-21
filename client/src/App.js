import './App.css';
import Chatbox from './components/Chatbox';
import { io } from 'socket.io-client';
import { useEffect } from 'react';

useEffect 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2> Say Whatever</h2>

        <Chatbox/>

      </header>
    </div>
  );
}

export default App;
