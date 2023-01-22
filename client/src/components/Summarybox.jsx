import React from "react";
import { useState } from "react";

const Summarybox = ({ socket, summaries }) => {

    const getSummary = () => {
        socket.emit("toSumMsg");
    }

    return (
        <section class="flex flex-col items-center">
            <div>
                <p>Summaries go here</p>
                {
                    summaries.map((summary, i) =>
                        <p key={i}>{summary}</p>
                    )
                }
            </div>
            <button class="hover:translate-y-1 m-auto mt-4 rounded-lg h-8 w-16 drop-shadow-lg bg-inactive text-heading font-poppins transition ease-in-out hover:bg-lightPurple" onClick={() => { getSummary() }} ><i>TLDR</i></button>
        </section>
    )
}
export default Summarybox;