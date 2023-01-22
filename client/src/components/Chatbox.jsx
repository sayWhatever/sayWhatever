import React from "react";
import { useState } from "react";

const Chatbox = ({ userName, socket, messages }) => {

    const [message, setMessage] = useState("");

    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = clientMessage => {
        console.log({"userName": userName, 
        "clientMessage": clientMessage})
        socket.emit("msgToServer", 
        {"userName": userName, 
        "clientMessage": clientMessage});
        setMessage("");
    }

    return (
        <>
            <div>
                {
                    messages.map((message, i) =>
                        <p key={i}>{message}</p>
                    )
                }
            </div>
            <input
                type="text"
                id="message"
                name="message"
                onChange={handleMessage}
                value={message}
                spellcheck="true"
            />
            <button onClick={() => { sendMessage(message)}} >send</button>
        </>
    )
}
export default Chatbox;