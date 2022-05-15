import './artikkelContent.css';
import {useState} from 'react';



function ArtikkelContent() {
    
    const [data, setData] = useState(null)

    fetch('https://midaiganes.irw.ee/api/list/972d2b8a')
        .then(res => res.json())
        .then(
            (result) => setData(result),
            (e) => console.warn('fetch failure', e)
        )


    
    return (
        <div className='inline'>
            {data ? (
            <div className='article'>
                <h1>{data.title}</h1>
                <div className='intro'>
                    <p>{data.intro}</p>
                </div>
                <div className='imagebox'>
                    <img className='image' src={data.image.large} alt={data.image.alt}/>
                    <div className='image_title'>{data.image.title}</div>
                    <div className='image_fade'>
                        <div className='image_fade_img' style={{backgroundImage: `url(${data.image.large})`}}></div>
                    </div>
                    <div className='image_face' style={{backgroundImage: `url(${data.image.large})`}}></div>
                </div>
                <div>
                    <p></p>
                    <p>dsd</p>
                    <p>dsd</p>
                </div>
                <button>shit</button>
            </div>
            ) : 'loading...'}
        </div>
    );

}
export default ArtikkelContent;