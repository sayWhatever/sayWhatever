import React from "react";

const NameMenu = ({handleUserName}) => {

    return (
        <>
        <h3>Choose a username</h3>
        <form onSubmit={e => {handleUserName(e.target.value)}}>
            <input id="m" />
          <button ><i>send</i></button> 
        </form>
        </>
    )
}

export default NameMenu;