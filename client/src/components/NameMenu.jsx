import React from "react";

const NameMenu = ({formName,handleUserName, handleChange}) => {

    const handleEnter = (event) => {
        if (event.key === 'Enter') {
          handleUserName(formName);
        }
      };

    return (
        <section class="">
            <div class="">
                <div class="flex flex-col mt-32 m-auto">
                    <h3 class="m-auto text-2xl font-medium text-heading font-poppins pb-2">Choose a username</h3>
                    <input 
                        class="m-auto focus:outline-none rounded-lg border-2 px-2 w-64 h-10"
                            type="text"
                            id="userName"
                            name="userName"
                            onChange={handleChange}
                            onKeyDown={handleEnter}
                            value={formName}
                    />
                    <button class="hover:translate-y-1 m-auto mt-4 rounded-lg h-8 w-16 drop-shadow-lg bg-inactive text-heading font-poppins transition ease-in-out hover:bg-lightPurple" onClick={()=>{handleUserName(formName)}} >Pick</button>
                </div>
            </div>
        </section>
        
    )
}

export default NameMenu;