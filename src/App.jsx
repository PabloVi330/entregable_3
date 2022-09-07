import axios from 'axios'
import { useState, useEffect } from 'react'
import './App.css'
import CardsResidents from './components/CardsResidents'
import LocationInfo from './components/LocationInfo'


function App() {
  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')
  useEffect(() => {
   let numberLocation
   if(searchInput === '') {
    numberLocation = Math.floor(Math.random(1,126)*100)
   }else{
    numberLocation = searchInput
   }
   const url = `https://rickandmortyapi.com/api/location/${numberLocation}`
   axios.get(url)
        .then((response) =>setLocation(response.data))
        .catch((error) =>console.log(error))
  }, [searchInput])
  
 
  
  
 const cambiar = (e) => {
   e.preventDefault()
   setSearchInput(e.target.search.value)
 }
  return (
    <div  className="App">
      <img className='img_app' src="https://www.criptonoticias.com/wp-content/uploads/2021/01/ricky-morty-tokens-coleccionables.jpg" alt="" />

      <form  onSubmit={cambiar} >
         <label htmlFor="search"></label>
         <input type="text"  id='search' placeholder='search number'/>
         <button>Search</button>
      </form>
      <LocationInfo location={location}/>

      
      <div className='content'>
        {
          location?.residents.map( url =>(
            <CardsResidents 
                 key = {url} 
                 url = {url} />
          ))
        }
      </div>
    </div>
  )
}

export default App
