import "./style.scss";
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/Group 136.png'
import close_btn from '../../assets/images/close_btn.png'
import {useState} from "react";

import {Link} from 'react-router-dom'

export default function Navbar(){
    const [openMenu, setOpenMenu] = useState(false)

    const style = {
        display: "none"
    }
    if (openMenu) {
        style.display = "block"
    }


    return(
        <div className="navbar">
             <div className={"container"}>
            <nav>
                <div className = "logo">
                    <Link to = '/'>
                        <img src={logo} alt = "logo" />
                    </Link>
                </div>

                <div className= "menu">
                    <button type="button" className="btn" onClick={(e) => setOpenMenu(true)}>
                        <img src={menu} alt="menu icon"/>
                    </button>
                </div>


                <div className="sidebar" style={style}>
                    <button className="close__btn" onClick={(e) => setOpenMenu(false)}>
                        <img src={close_btn} alt="close__btn"/>
                    </button>

                    <ul className="nav__lists">
                        <ul className="nav__lists__items">
                            <li className="nav__lists__items__item title">
                                /work
                            </li>
                            <li className="nav__lists__items__item">
                                <Link to="/works" onClick={(e) => setOpenMenu(false)}>Work</Link>
                            </li>
                            <li className="nav__lists__items__item">
                                <Link to="/blog" onClick={(e) => setOpenMenu(false)}>Blog</Link>
                            </li>
                        </ul>
                        <ul className="nav__lists__items">
                            <li className="nav__lists__items__item title">
                                /about
                            </li>
                            <li className="nav__lists__items__item">
                                <Link to="/services" onClick={(e) => setOpenMenu(false)}>Services</Link>
                            </li>
                            <li className="nav__lists__items__item">
                                <Link to="/team" onClick={(e) => setOpenMenu(false)}>Team</Link>
                            </li>
                        </ul>
                        <ul className="nav__lists__items">
                            <li className="nav__lists__items__item title">
                                /reach us
                            </li>
                            <li className="nav__lists__items__item">
                                <Link to="/contact" onClick={(e) => setOpenMenu(false)}>Contact</Link>
                            </li>
                        </ul>
                    </ul>

                    <ul>

                    </ul>
                </div>
            </nav>
        </div>
        </div>
    )
}
