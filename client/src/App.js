import "./App.css";
import { Chatbox, NameMenu, Navbar, Summarybox } from "./components";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io("https://nwhacks2023-api.herokuapp.com/", {
  transports: ["websocket"],
});

const App = () => {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [userName, setUserName] = useState("");
  const [formName, setFormName] = useState("");
  const [messages, setMessages] = useState([]);
  const [summaries, setSummaries] = useState([]);

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
    socket.on("msgToClients", (received) => {
      setMessages(messages=> [...messages, received])
    });

    socket.on("sumMsg", (received) => {
      setSummaries(summaries=> [...summaries, received])
    })

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("msgToClients");
      socket.off("sumMsg");
    };
  }, []);
  return (
    <div class="bg-background w-screen h-screen">
      <Navbar/>
      {userName === "" ? <span></span> : <p class="m-4 text-2xl font-medium text-heading font-poppins pb-2">Hi {userName} 👋,</p>}
      {userName === "" ? (
        <NameMenu
          formName={formName}
          handleUserName={handleUserName}
          handleChange={handleChange}
        />
      ) : (
          <>
            <Chatbox
              userName={userName}
              socket={socket}
              messages={messages}
            />
            <Summarybox 
              socket={socket}
              summaries={summaries}
            />
          </>
      )}
    </div>
  );
};

export default App;
