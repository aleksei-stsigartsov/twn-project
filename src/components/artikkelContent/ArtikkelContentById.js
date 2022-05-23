import './artikkelContent.css';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import loader from "./../../assets/images/loader.svg";



function ArtikkelContentById() {
    const [nimekiriList, setNimekiriList] = useState();
    const { id } = useParams();
    useEffect(() => {
        fetch('https://midaiganes.irw.ee/api/list?limit=500')
            .then(res => res.json())
            .then(
                (result) => setNimekiriList(result),
                (e) => console.warn('fetch failure', e)
            )
    }, []);

    const chosenArtikkel = nimekiriList && nimekiriList["list"].find(item => item.id === id);
    console.log(chosenArtikkel);

    


    return (
        <>
            {chosenArtikkel ? (
                <div className='article'>
                    <h1>{chosenArtikkel.title}</h1>
                    <div className='intro' dangerouslySetInnerHTML={{ __html: chosenArtikkel.intro }} />
                    <div className='imagebox'>
                        <img className='image' src={chosenArtikkel.image.medium} alt={chosenArtikkel.image.alt} title={chosenArtikkel.image.title} />
                        <div className='image_title'>{chosenArtikkel.image.title}</div>
                        <div className='image_fade'>
                            <div className='image_fade_img' style={{ backgroundImage: `url(${chosenArtikkel.image.medium})` }}></div>
                        </div>
                        <div className='image_face' style={{ backgroundImage: `url(${chosenArtikkel.image.medium})` }}></div>
                    </div>
                    <div className='bodyp' dangerouslySetInnerHTML={{ __html: chosenArtikkel.body }} />
                    {chosenArtikkel.tags.map((item, i) => (
                        <button>{chosenArtikkel.tags[+i]}</button>
                    ))}

                </div>
            ) : <img src={loader} className="loader" aria-label="TWN loader" />}
        </>
    );

}
export default ArtikkelContentById;