import './menu.css';
import logo from "./../../assets/images/logo.svg";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faQuestion, faFile, faTable, faGamepad, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';
import { useState } from 'react';



function Menu() {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className='twn-header'>
                <div>
                    <button onClick={() => setShow((s) => !s)}><FontAwesomeIcon icon={show ? faTimes : faBars} className='fa fa-large'></FontAwesomeIcon></button>
                    <img src={logo} aria-label='TWN logo' className='logo-header' />
                </div>
            </div>

            <div className={show ? "twn-menu menu-visible" : "twn-menu"} >
                <NavLink to='/' className='notrn'><img src={logo} className='logo' aria-label='TWN logo' /></NavLink>
                <ul>
                    <li>
                        <NavLink to='/intro'>Nõuded<FontAwesomeIcon icon={faQuestion} className='fa fa-question'></FontAwesomeIcon></NavLink>
                    </li>
                    <li>
                        <NavLink to='/article'>Artikkel<FontAwesomeIcon icon={faFile} className='fa fa-file'></FontAwesomeIcon></NavLink>
                    </li>
                    <li>
                        <NavLink to='/list'>Tabel<FontAwesomeIcon icon={faTable} className='fa fa-file'></FontAwesomeIcon></NavLink>
                    </li>
                    <li>
                        <NavLink to='/life'>Game of life<FontAwesomeIcon icon={faGamepad} className='fa fa-file'></FontAwesomeIcon></NavLink>
                    </li>
                </ul>
            </div>
        </>
    );

}
export default Menu;