import './menu.css';
import logo from "./../../assets/images/logo.svg";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faQuestion, faFile, faTable, faGamepad } from "@fortawesome/free-solid-svg-icons";
import {NavLink} from 'react-router-dom';



function Menu() {
    return (
        <>
            <div className='twn-header'>
                <div>
                    <button><FontAwesomeIcon icon={faFile} className='fa fa-file'></FontAwesomeIcon></button>
                </div>
            </div>

            <div className='twn-menu'>
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