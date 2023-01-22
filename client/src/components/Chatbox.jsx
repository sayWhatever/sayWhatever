import React from "react";
import { useState } from "react";

const Chatbox = ({userName, socket}) => {

    const [message,setMessage] = useState("");

    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    const sendMessage = clientMessage => {
        console.log("message", userName + " : " + clientMessage)
        socket.emit("msgToServer", userName + " : " + clientMessage);
    }

    return (
        <section class="flex flex-col items-center">
            <div class="">
                <div class="bg-white h-60 rounded-t-lg p-4 shadow-md">
                    <p>Messages would go here</p>
                </div>
                <div class="bg-white rounded-b-lg shadow-md">
                    <input  
                        class="text-message focus:outline-none rounded-xl border-2 px-2 w-64 h-10 bg-background"
                        placeholder="enter your message here"
                                type="text"
                                id="message"
                                name="message"
                                onChange={handleMessage}
                                value={message}
                        />
                    <button onClick={()=>{sendMessage(message)}} >send</button>
                </div>
            </div>
        </section>
    )
}


export default Chatbox;