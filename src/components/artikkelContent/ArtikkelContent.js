import './artikkelContent.css';
import loader from "./../../assets/images/loader.svg";
import { useState } from 'react';

function ArtikkelContent() {

    const [data, setData] = useState(null)

    fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
        .then(res => res.json())
        .then(
            (result) => setData(result),
            (e) => console.warn('fetch failure', e)
        )

    return (
        <>
            {data ? (
                <div className='article'>
                    <h1>{data.title}</h1>
                    <div className='intro' dangerouslySetInnerHTML={ {__html: data.intro} } /> 
                    <div className='imagebox'>
                        <img className='image' src={data.image.medium} alt={data.image.alt} title={data.image.title} />
                        <div className='image_title'>{data.image.title}</div>
                        <div className='image_fade'>
                            <div className='image_fade_img' style={{ backgroundImage: `url(${data.image.medium})` }}></div>
                        </div>
                        <div className='image_face' style={{ backgroundImage: `url(${data.image.medium})` }}></div>
                    </div>
                    <div className='bodyp' dangerouslySetInnerHTML={ {__html: data.body} } />
                    <button>{data.tags}</button>
                </div>
            ) : <img src={loader} className="loader" aria-label="TWN loader" />}
        </>
    );

}
export default ArtikkelContent;