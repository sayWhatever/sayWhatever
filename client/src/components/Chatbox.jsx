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
        <section class="flex flex-col items-center">
            <div class="">
                <div class="bg-inactive h-60 rounded-t-lg p-4 shadow-md">
                    {
                        messages.map((message, i) =>
                            <p key={i}>{message}</p>
                        )
                    }
                </div>
                    <input 
                        class="focus:shadow-outline text-message focus:outline-none rounded-xl border-2 px-2 h-10 bg-background w-full"
                        placeholder="enter your message here"
                            type="text"
                            id="message"
                            name="message"
                            onChange={handleMessage}
                            value={message}
                            spellcheck="true"
                    />
                <div class="text-center bg-inactive rounded-b-lg shadow-md hover:bg-lightPurple rounded-lg leading-7">
                    <button class="text-center w-10 bg-inactive rounded-lg p-auto text-heading hover:bg-lightPurple" onClick={() => { sendMessage(message) }} ><i>send</i></button>
                </div>
            </div>
        </section>
    )
}
export default Chatbox;