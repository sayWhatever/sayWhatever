import React from "react";

const NameMenu = ({formName,handleUserName, handleChange}) => {

    return (
        <>
            <h3>Choose a username</h3>
            <input
                type="text"
                id="userName"
                name="userName"
                onChange={handleChange}
                value={formName}
            />
            <button onClick={()=>{handleUserName(formName)}} ><i>send</i></button>

        </>
    )
}

export default NameMenu;