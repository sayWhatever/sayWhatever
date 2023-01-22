import "./App.css";
import { Chatbox, NameMenu, Navbar } from "./components";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("localhost:5000/", {
  transports: ["websocket"],
});

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [userName, setUserName] = useState("");
  const [formName, setFormName] = useState("");

  const handleUserName = (name) => {
    setUserName(name);
  };

  const handleChange = (event) => {
    setFormName(event.target.value);
  };

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);
      console.log("socket set to true");
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <div class="bg-background w-screen h-screen">
      <Navbar/>
      {userName === "" ? <span></span> : <p class="text-2xl font-medium text-heading font-poppins pb-2">Hi {userName}👋,</p>}
      {userName === "" ? (
        <NameMenu
          formName={formName}
          handleUserName={handleUserName}
          handleChange={handleChange}
        />
      ) : (
        <Chatbox userName={userName} socket={socket} />
      )}
    </div>
  );
};

export default App;
