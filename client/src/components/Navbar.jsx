import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {

    return (
        <section class="text-bold border-b-2 border-lightPurple">
            <div class="flex flex-row items-center font-poppins font-medium text-heading p-4">
                <img class="h-10 w-10" src={logo}/>
                <h1 class="text-2xl text-lightPurple pl-2">sayWhatever</h1>
            </div>
        </section>
    )
}

export default Navbar;