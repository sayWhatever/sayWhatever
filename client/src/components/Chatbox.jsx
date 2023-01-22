import React from "react";
import { useState } from "react";

const Chatbox = ({userName, socket}) => {

    const [message,setMessage] = useState("");

    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = clientMessage => {
        console.log("message", userName + " : " + clientMessage)
        socket.emit("message", userName + " : " + clientMessage);
    }

    return (
        <>
        <div>
            <p>Messages would go here</p>
        </div>
        <input
                type="text"
                id="message"
                name="message"
                onChange={handleMessage}
                value={message}
            />
            <button onClick={()=>{sendMessage(message)}} ><i>send</i></button>
        </>
    )
}


export default Chatbox;