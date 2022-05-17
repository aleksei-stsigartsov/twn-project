import './noudedContent.css';

function NoudedContent() {
    return (
        <div className='requirements'>
            <h2>Funktsionaalsed nõuded </h2>
            <p>Artikli vaade on lihtne: tee päring ja kuva saadud vastus.</p>
            <p>
                Tabeli vaate puhul soovime näha, kuidas sa Array - dega ringi käia oskad: &nbsp; <br/>
                Tabelis tuleb saadud vastus tabeli ridadel välja kuvada, sh tabelile 3 - sammuline sorteerimine peale panna(Asc, Desc, Default). <br/>
                Tabelile tuleb ka lehejaotus külge panna.Funktsionaalsus peaks olema 1: 1 proovitöö lehel oleva lehejaotusega.
            </p>
            <h2> Mittefunktsionaalsed nõuded </h2>
            <p>
                * Proovitöö lahendamiseks peab kasutama Vue, React või Angular raamistiku. <br/>
                * Proovitöö puhul soovitame vältida väliseid mooduleid(paginator, table sorter, jne). <br/>
                * Kujundus ei pea olema sama, mis proovitööl, aga selle järgi tegemine annab lisapunkte.
            </p>
            <h2>API</h2>
            <p className='textcenter'>
                <a className='twn-button_default' href='https://midaiganes.irw.ee/api/list/972d2b8a' target='_blank'>Artikkel</a>
                <a className='twn-button_default' href='https://midaiganes.irw.ee/api/list?limit=500' target='_blank'>Nimikiri</a>
            </p>
            <h2> Materjalid </h2>
            <p className='textcenter'>
                <a className='twn-button_default' href='/fonts/fonts.zip' download>Font</a>
                <a className='twn-button_default' href='/graphics/graphics.zip' download>Graafika</a>
            </p>
        </div>
    );
}
export default NoudedContent;