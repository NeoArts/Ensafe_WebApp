import React from 'react'

function MenuIcon({ open, onclick, mobileScreen }) {

    

    

    return (
        <div className="menu-icon" id="menu-icon" onClick={() => onclick(!open)}>
            <div className={"menu-icon__bar top " + (open ? "rotate-right" : "")}></div>
            <div className={"menu-icon__bar middle " + (open ? "disappear" : "")}></div>
            <div className={"menu-icon__bar bottom " + (open ? "rotate-left" : "")}></div>
        </div>
    )
}

export default MenuIcon