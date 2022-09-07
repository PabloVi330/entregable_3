import React from 'react'
import useFetch from '../hooks/useFetch'
import './cardsResidents.css'
const CardsResidents = ({ url }) => {
    const residents = useFetch(url)
    console.log(residents)
    return (
        <article className='cards'>
            <header className='header'>
                <img src={residents?.image} alt="" />

            </header>
            <div className='card_info'>
                <h3>{residents?.name}</h3>
                <div>
                    <div className='circle'></div>
                    <p>{residents?.status}</p>
                </div>
                <ul>
                    <li className='li_info'><span className='sp'>Specie:</span>{residents?.species}</li>
                    <li className='li_info'><span className='sp'>Origin:</span>{residents?.origin.name}</li>
                    <li className='li_info'><span className='sp'>Eppisodes where appear:</span>{residents?.episode.length}</li>

                </ul>
            </div>
        </article>
    )
}

export default CardsResidents