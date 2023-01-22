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
            <div class="w-1/2">
                <div class="flex justify-center">
                <ul class="flex flex-col mr-auto">
                    <h1 class="text-heading text-xl font-poppins font-medium m-auto pb-2">Chat</h1>
                            <div class="bg-foreground border-t-2 border-x-2 border-lightPurple h-60 rounded-t-lg p-4 shadow-md text-heading font-poppins">
                            {
                                messages.map((message, i) =>
                                    <p key={i}>{message}</p>
                                )
                            }
                        </div>
                    <li class="">
                        <div class="bg-foreground border-b-2 border-x-2 rounded-b-lg border-lightPurple flex flex-row">
                        <input 
                        class="focus:shadow-outline text-message focus:outline-none rounded-lg border-2 px-2 h-10 bg-background w-full"
                        placeholder="enter your message here"
                            type="text"
                            id="message"
                            name="message"
                            onChange={handleMessage}
                            value={message}
                            spellcheck="true"
                        />
                        <button class="text-center w-10 h-10 bg-inactive rounded-lg p-auto text-heading hover:bg-lightPurple" onClick={() => { sendMessage(message) }} ><i>send</i></button>

                        </div>
                    </li>
                </ul>
                <ul class="flex flex-col">
                    <h1 class="text-heading text-xl font-poppins font-medium m-auto pb-2">Summary</h1>
                            <div class="bg-foreground border-t-2 border-x-2 border-lightPurple h-60 rounded-t-lg p-4 shadow-md text-heading font-poppins">
                            {
                                messages.map((message, i) =>
                                    <p key={i}>{message}</p>
                                )
                            }
                        </div>
                    <li class="">
                        <div class="bg-foreground border-b-2 border-x-2 rounded-b-lg border-lightPurple flex flex-row">
                        <input 
                        class="focus:shadow-outline text-message focus:outline-none rounded-lg border-2 px-2 h-10 bg-background w-full"
                        placeholder="enter your message here"
                            type="text"
                            id="message"
                            name="message"
                            onChange={handleMessage}
                            value={message}
                            spellcheck="true"
                        />
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </section>
    )
}
export default Chatbox;