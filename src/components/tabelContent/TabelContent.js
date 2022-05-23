import './tabelContent.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import loader from "./../../assets/images/loader.svg";
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';



const calculateRange = (data, rowsPerPage) => {
    const range = [];
    const num = Math.ceil(data.length / rowsPerPage);
    let i = 1;
    for (let i = 1; i <= num; i++) {
        range.push(i);
    }
    return range;
};

const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([]);
    const [slice, setSlice] = useState([]);

    useEffect(() => {
        const range = calculateRange(data, rowsPerPage);
        setTableRange([...range]);

        const slice = sliceData(data, page, rowsPerPage);
        setSlice([...slice]);
    }, [data, setTableRange, page, setSlice]);

    return { slice, range: tableRange };
};

function TabelContent() {
    const [nimekiriList, setNimekiriList] = useState();
    const setList = (list) => {
        const newNimekiriList = { ...nimekiriList, list };
        setNimekiriList(newNimekiriList);
    }
    // const [currentPage, setCurrentPage] = useState(1);
    // const [itemsPerPage, setItemsPerPage] = useState(10);
    // const indexOfLastItem = currentPage * itemsPerPage;
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const filterByName = () => {
        const sortedList = [...nimekiriList.list].sort((firstItem, secondItem) => {
            if (firstItem.firstname < secondItem.firstname) return -1; setSortedName(faSortDown);
            if (firstItem.firstname > secondItem.firstname) return 1; setSortedName(faSortUp);
            return 0 && setSortedName(faSort);
        });
        setList(sortedList);
        setSortedCode(faSort);
        setSortedSurname(faSort);
        setSortedSex(faSort);
    }
    const filterBySurname = () => {
        const sortedList = [...nimekiriList.list].sort((firstItem, secondItem) => {
            if (firstItem.surname < secondItem.surname) return -1; setSortedSurname(faSortDown);
            if (firstItem.surname > secondItem.surname) return 1; setSortedSurname(faSortUp);
            return 0 && setSortedSurname(faSort);
        });
        setList(sortedList);
        setSortedName(faSort);
        setSortedCode(faSort);
        setSortedSex(faSort);
    }
    const filterBySex = () => {
        const sortedList = [...nimekiriList.list].sort((firstItem, secondItem) => {
            if (firstItem.sex < secondItem.sex) return -1; setSortedSex(faSortUp);
            if (firstItem.sex > secondItem.sex) return 1; setSortedSex(faSortDown);
            return 0 && setSortedSex(faSort);
        });
        setList(sortedList);
        setSortedName(faSort);
        setSortedSurname(faSort);
        setSortedCode(faSort);
    }
    const filterByBirthDate = () => {
        const sortedList = [...nimekiriList.list].sort((firstItem, secondItem) => {
            if (firstItem.personal_code < secondItem.personal_code) return -1; setSortedCode(faSortDown);
            if (firstItem.personal_code > secondItem.personal_code) return 1; setSortedCode(faSortUp);
            return 0 && setSortedCode(faSort);
        });
        setList(sortedList);
        setSortedName(faSort);
        setSortedSurname(faSort);
        setSortedSex(faSort);

    }

    const [itemIK, setItemIK] = useState();
    const [activeId, setActiveId] = useState();

    const [page, setPage] = useState(1);
    const [sortedName, setSortedName] = useState(faSort);
    const [sortedSurname, setSortedSurname] = useState(faSort);
    const [sortedSex, setSortedSex] = useState(faSort);
    const [sortedCode, setSortedCode] = useState(faSort);
    // const { slice, range } = useTable(nimekiriList["list"], page, 10);

    const toggleClick = (id) => {
        return activeId != id ? setActiveId(id) : setActiveId(null)
    }

    useEffect(() => {
        fetch('https://midaiganes.irw.ee/api/list?limit=10')
            .then(res => res.json())
            .then(
                (result) => setNimekiriList(result),
                (e) => console.warn('fetch failure', e)
            )
    }, []);

    return (
        <>
            <div className='nimekiri'>
                <h1>Nimekiri</h1>
                {nimekiriList ? (

                    <div className='twn-table-content'>
                        <div className='table-wrapper'>
                            <table>
                                <thead>
                                    <tr>
                                        <th><button onClick={filterByName}>Eesnimi<FontAwesomeIcon icon={sortedName} className='fa fa-sort'></FontAwesomeIcon></button></th>
                                        <th><button onClick={filterBySurname}>Perekonnanimi<FontAwesomeIcon icon={sortedSurname} className='fa fa-sort'></FontAwesomeIcon></button></th>
                                        <th><button onClick={filterBySex}>Sugu<FontAwesomeIcon icon={sortedSex} className='fa fa-sort'></FontAwesomeIcon></button></th>
                                        <th><button onClick={filterByBirthDate}>Sünnikuupäev<FontAwesomeIcon icon={sortedCode} className='fa fa-sort'></FontAwesomeIcon></button></th>
                                        <th><button>Telefon</button></th>
                                    </tr>
                                </thead>

                                {nimekiriList && nimekiriList.list.map((item) => {
                                    const dateBirth = (
                                        `${item.personal_code}`.substring(5, 7) + '.'
                                        + `${item.personal_code}`.substring(3, 5) + '.'
                                        + (parseInt((`${item.personal_code}`.substring(1, 3))) >= 22 ? '19' : '20')
                                        + `${item.personal_code}`.substring(1, 3));

                                    const phoneNum = ((`${item.phone}`.substring(0, 4) + ' ' + (`${item.phone}`.substring(4, 14))));
                                    const itemSex = (item.sex === 'm' ? 'Mees' : 'Naine')
                                    return (
                                        <>
                                            <tr key={item.id} onClick={() => toggleClick(item.id)} className={activeId === item.id ? "active" : 'not_active'}>
                                                <td className='td_firstname' style={{ width: "20%" }}>
                                                    <span>{item.firstname}</span>
                                                </td>
                                                <td className='td_surname' style={{ width: "20%" }}>
                                                    <span>{item.surname}</span>
                                                </td>
                                                <td className='td_sex' style={{ width: "20%" }}>
                                                    <span>{itemSex}</span>
                                                </td>
                                                <td className='td_personal_code' style={{ width: "20%" }}>
                                                    <span>{dateBirth}</span>
                                                </td>
                                                <td className='td_telefon' style={{ width: "20%" }}>
                                                    <span>{phoneNum}</span>
                                                </td>
                                            </tr>{activeId === item.id ? <tr className='details' >
                                                <td colSpan='5'>
                                                    <div className='tab'>
                                                        <div className='image' style={{ backgroundImage: `url(${item.image.medium})` }}></div>
                                                        <div className='body'>
                                                            <div dangerouslySetInnerHTML={{ __html: item.body.substring(0, 300) + '...' }}></div>
                                                            <NavLink className='twn-button_small' to={`/article/${item.id}`}>Loe rohkem</NavLink>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr> : null}
                                        </>
                                    );
                                })}

                            </table>
                        </div>
                        <div className='buttonWrapper'>
                            <button className='disabled twn-button_transparent'>
                                <FontAwesomeIcon icon={faChevronLeft} className='fa fa-chevron-left fa-md'></FontAwesomeIcon>
                            </button>
                            <button className='twn-button_transparent twn-button_active'>1</button>
                            <button className='twn-button_transparent'>2</button>
                            <button className='twn-button_transparent'>
                                <FontAwesomeIcon icon={faChevronRight} className='fa fa-chevron-right fa-md'></FontAwesomeIcon>
                            </button>
                        </div>
                    </div>
                ) : <img src={loader} className="loader" aria-label="TWN loader" />}
            </div>
            {/* <ol>
                <li>!0. реализовать стили в панели пагинации</li>
                <li>3. по нажатию кнопки "читать больше" генерируется страница с путем article/{id} со всей информацией</li>  
                <li>4. доработать вывод тэгов из json</li>  
                <li>5. по клику на любой другой элемент из списка в таблице, старый блок закрывается</li>
                <li>6. реализовать пагинацию, ограничение списка в таблице !NB при переключении страницы сортировка не сбивается</li>
                <li>7. реализовать вывод всех записей в таблице из json файла</li>
                <li>8. реализовать вывод всех лэйблов у элементов таблицы</li>
                <li>9. реализовать корректный вывод данных(пол, дату рождения, номер телефона)</li>
                <li>10. реализовать переодресацию в случае пустой страницы</li>
                <li>12. реализовать game of life или танцующий текст</li>
                </ol> */}
        </>
    );

}

class Details extends React.Component {
    render() {
        return (
            <tr id='content'>
                <td colSpan='5'>
                    <div className='tab'>
                        <div className='image' style={{ backgroundImage: 'url(http://midaiganes.irw.ee/api/imgs/medium/9bd6086a.jpg)' }}></div>
                        <div className='body'>
                            <div>
                                <p>Phasellus consequat convallis arcu tempor penatibus lobortis sagittis,
                                    posuere duis litora maecenas quam ut dis hac, lacus erat commodo eget varius semper.
                                    Laoreet condimentum augue finibus malesuada feugiat suspendisse, per auctor hac metus
                                    erat efficitur consectetur, ac gravida blandit...
                                </p>
                            </div>
                            <a className='twn-button_small' href=''>Loe rohkem</a>
                            {/* по клику генерируется страница с  */}
                        </div>
                    </div>
                </td>
            </tr>
        )
    }
}

export default TabelContent;