import './menu.css';
import logo from "./../../assets/images/logo.svg";
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faFile, faTable, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



function Menu() {
    return (
        <>
            <div className='twn-header'>
                <div>
                    <button><FontAwesomeIcon icon={faFile} className='fa fa-file'></FontAwesomeIcon></button>
                </div>
            </div>

            <div className='twn-menu'>
                <Link to='/'><img src={logo} className='logo' aria-label='TWN logo' /></Link>
                <ul>
                    <li>
                        <Link to='/intro'>Nõuded<FontAwesomeIcon icon={faFile} className='fa fa-file'></FontAwesomeIcon></Link>
                    </li>
                    <li>
                        <Link to='/article'>Artikkel<FontAwesomeIcon icon={faFile} className='fa fa-file'></FontAwesomeIcon></Link>
                    </li>
                    <li>
                        <Link to='/list'>Tabel<FontAwesomeIcon icon={faTable} className='fa fa-file'></FontAwesomeIcon></Link>
                    </li>
                    <li>
                        <Link to='/life'>Game of life<FontAwesomeIcon icon={faGamepad} className='fa fa-file'></FontAwesomeIcon></Link>
                    </li>
                </ul>
            </div>
        </>
    );

}
export default Menu;