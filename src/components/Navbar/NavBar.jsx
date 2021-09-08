import React from 'react'
import { useState } from 'react'
import logoSVG from '../../images/logoSVG.svg'
import Menu from '../Menu'
import {
    Link
} from 'react-router-dom'

function NavBar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const changeMenuState = () => {

        var menu = document.getElementById('menu');
        var menuTop = document.getElementsByClassName('top')[0];
        var menuMiddle = document.getElementsByClassName('middle')[0];
        var menuBottom = document.getElementsByClassName('bottom')[0];

        if (menuOpen) {
            setMenuOpen(false);
            menu.style.right = '-9999px';
            menu.style.visibility = 'hidden';
            menuTop.classList.remove('rotate-right');
            menuMiddle.classList.remove('disappear');
            menuBottom.classList.remove('rotate-left');
        }
        else {
            setMenuOpen(true);
            menu.style.visibility = 'visible';
            menu.style.right = '0px';
            menuTop.classList.add('rotate-right');
            menuMiddle.classList.add('disappear');
            menuBottom.classList.add('rotate-left');
        }
    }

    const setMenuState = () => {

        setMenuOpen(false);

        var menuIcon = document.getElementById('menu-icon');
        var menu = document.getElementById('menu');
        var menuItems = document.getElementsByClassName('menu__item');

        if (window.innerWidth < 1110) {
            menuIcon.style.visibility = 'visible';
            menu.style.visibility = 'hidden';
            menu.classList.remove('menu-horizontal');
            menu.classList.add('absolute-item');
            menu.style.right = '-9999px';
            menu.style.top = '5.1688em';
            menu.style.width = '100%';
            menu.style.background = '#F6F7FB'
            menu.style.padding = '1em 0em'

            for (var i = 0; i < menuItems.length; i++) {
                menuItems[i].classList.add('menu-vertical');
                menuItems[i].style.marginRight = '1.875em';
            }

        }
        else {
            menuIcon.style.visibility = 'hidden';
            menu.style.visibility = 'visible';
            menu.classList.add('menu-horizontal');
            menu.classList.remove('absolute-item');
            for (var j = 0; j < menuItems.length; j++) {
                menuItems[j].style.marginRight = '0em';
            }
        }
    }

    window.addEventListener('resize', setMenuState);
    window.addEventListener('load', setMenuState);

    return (
        <div>
            <div className="nav" id="nav">
                <div className="nav__container">
                    <Link to="/">
                        <img src={logoSVG} alt="Ensafe SAS logo" className="logo" />
                    </Link>
                    <Menu className="menu-horizontal" />
                    <div className="menu-icon" id="menu-icon" onClick={() => changeMenuState()}>
                        <div className="menu-icon__bar top"></div>
                        <div className="menu-icon__bar middle"></div>
                        <div className="menu-icon__bar bottom"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar
