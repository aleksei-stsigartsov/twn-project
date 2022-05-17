import './tabelContent.css';
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faSort, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";



function TabelContent() {

    return (

        <div className='nimikiri'>
            <h1>Nimekiri</h1>
            <div className='twn-table-content'>
                <div className='table-wrapper'>
                    <table>
                        <thead>
                            <tr>
                                {/* по клику меняется иконка сортировки */}
                                <th><button>Eesnimi<FontAwesomeIcon icon={faSort} className='fa fa-sort'></FontAwesomeIcon></button></th>
                                <th><button>Perekonnanimi<FontAwesomeIcon icon={faSort} className='fa fa-sort'></FontAwesomeIcon></button></th>
                                <th><button>Sugu<FontAwesomeIcon icon={faSort} className='fa fa-sort'></FontAwesomeIcon></button></th>
                                <th><button>Sünnikuupäev<FontAwesomeIcon icon={faSort} className='fa fa-sort'></FontAwesomeIcon></button></th>
                                <th><button>Telefon</button></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* по клику добавляется класс актив */}
                            <tr className='clickable active'>
                                <td className='td_firstname' style={{ width: "20%" }}>
                                    <span>Aleksei</span>
                                </td>
                                <td className='td_surname' style={{ width: "20%" }}>
                                    <span>Stsigartsov</span>
                                </td>
                                <td className='td_sex' style={{ width: "20%" }}>
                                    <span>Mees</span>
                                </td>
                                <td className='td_personal_code' style={{ width: "20%" }}>
                                    <span>17.04.2003</span>
                                </td>
                                <td className='td_telefon' style={{ width: "20%" }}>
                                    <span>+372 56965063</span>
                                </td>
                            </tr>
                            {/* по клику снизу добавляется тэг */}
                            <tr>
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
                        </tbody>
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

            {/* <ol>
                <li>1. по клику на любой элемент tr clickable добавляется класс active </li>
                <li>2. после этого генерируется дополнтилельный tr тэг с подробной информацией</li>  
                <li>3. по нажатию кнопки "читать больше" генерируется страница с путем article/{id} со всей информацией</li>  
                <li>4. доработать вывод тэгов из json</li>  
                <li>5. по клику на любой другой элемент из списка в таблице, старый блок закрывается</li>
                <li>6. реализовать пагинацию, ограничение списка в таблице !NB при переключении страницы сортировка не сбивается</li>
                <li>7. реализовать вывод всех записей в таблице из json файла</li>
                <li>8. реализовать вывод всех лэйблов у элементов таблицы</li>
                <li>9. реализовать корректный вывод данных(пол, дату рождения, номер телефона)</li>
                <li>10. реализовать переодресацию в случае пустой страницы</li>
                <li>11. адаптивность страниц</li>
                <li>12. реализовать game of life или танцующий текст</li>
            </ol> */}
        </div>
    );

}
export default TabelContent;