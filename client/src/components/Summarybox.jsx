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
            <button onClick={() => { getSummary() }} ><i>TLDR</i></button>
        </section>
    )
}
export default Summarybox;