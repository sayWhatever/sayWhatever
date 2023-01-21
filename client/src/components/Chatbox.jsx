import React from "react";

const Chatbox = () => {

    return (
        <>
        <form onSubmit={e => {}} style={{display: 'flex'}}>
            <input id="m" />
            {/* {width > 1000 ? <button style={{width:'100px'}} type="submit">Send Message</button> : */}
          <button style={{width:'50px'}}><i style={{fontSize:'15px'}} class="material-icons">send</i></button> 
        </form>
        </>
    )
}


export default Chatbox;