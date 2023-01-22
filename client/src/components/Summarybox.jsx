import React from "react";
import { useState } from "react";

const Summarybox = ({ socket, summaries }) => {

    const getSummary = () => {
        socket.emit("sumMsg");
    }

    return (
        <>
            <div>
                <p>Summaries go here</p>
                {
                    summaries.map((summary, i) =>
                        <p key={i}>{summary}</p>
                    )
                }
            </div>
            <button onClick={() => { getSummary() }} ><i>send</i></button>
        </>
    )
}
export default Summarybox;