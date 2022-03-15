import React from 'react'
import { motion } from 'framer-motion'
import {
    Link
} from 'react-router-dom'

function setActiveCategory(category){

    var categoryMenuItems = document.querySelectorAll(".category-menu__item");

    for(var i = 0; i < categoryMenuItems.length; i++){
        categoryMenuItems[i].lastElementChild.classList.remove("active");
    }

    switch(category){
        case "visualProtection":
            categoryMenuItems[0].lastElementChild.classList.add("active");
            break;
        case "headProtection":
            categoryMenuItems[1].lastElementChild.classList.add("active");
            break;
        case "faceProtection":
            categoryMenuItems[2].lastElementChild.classList.add("active");
            break;
        case "hearingProtection":
            categoryMenuItems[3].lastElementChild.classList.add("active");
            break;
        case "handProtection":
            categoryMenuItems[4].lastElementChild.classList.add("active");
            break;
        case "bodyProtection":
            categoryMenuItems[5].lastElementChild.classList.add("active");
            break;
        case "fallProtection":
            categoryMenuItems[6].lastElementChild.classList.add("active");
            break;
    }
}

function CategoryMenu() {
    return (
        <>
            <div className="category-menu">
                <nav className="category-menu__container">
                    <ul className='menu-horizontal category-menu__ul'>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setActiveCategory("visualProtection")}>
                            <Link to="/products/visual-protection" className="category-menu__link">Protección visual</Link>
                            <div className="category-menu__link-border active"></div>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setActiveCategory("headProtection")}>
                            <Link to="/products/head-protection" className="category-menu__link">Protección cabeza</Link>
                            <div className="category-menu__link-border"></div>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setActiveCategory("faceProtection")}>
                            <Link to="/products/face-protection" className="category-menu__link">Protección facial</Link>
                            <div className="category-menu__link-border"></div>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setActiveCategory("hearingProtection")}>
                            <Link to="/products/hearing-protection" className="category-menu__link">Protección auditiva</Link>
                            <div className="category-menu__link-border"></div>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setActiveCategory("handProtection")}>
                            <Link to="/products/hand-protection" className="category-menu__link">Protección manual</Link>
                            <div className="category-menu__link-border"></div>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setActiveCategory("bodyProtection")}>
                            <Link to="/products/body-protection" className="category-menu__link">Protección corporal</Link>
                            <div className="category-menu__link-border"></div>
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className={"menu__item no-border category-menu__item"} onClick={() => setActiveCategory("fallProtection")}>
                            <Link to="/products/fall-protection" className="category-menu__link">Protección anti-caída</Link>
                            <div className="category-menu__link-border"></div>
                        </motion.button>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default CategoryMenu