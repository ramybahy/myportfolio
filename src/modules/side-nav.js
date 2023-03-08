import '../css/modules/side-nav.scss';

import { useState } from "react";


function SideNav()
{
    
    const [open, setOpen] = useState(false);

    return (
        <>
        <div className={open?"menu__panel menu__panel--open":"menu__panel"}>

        <i onClick={() =>setOpen(false)} className="fa-solid fa-xmark menu__close">x</i>
        <a>About</a>
        <a>Services</a>
        <a>Clients</a>
        <a>Contact</a>
        </div>

        <div id="main" >
        <h1>Sidenav Push Example</h1>
        <p>Click on the element below to open the side navigation menu, and push this content to the right.</p>
        <button onClick={() =>setOpen(true)} className="menu__button">
        <i className="fa-solid fa-bars"></i> <span>open</span>
        </button>
        </div>
        </>
        )

}

export default SideNav
