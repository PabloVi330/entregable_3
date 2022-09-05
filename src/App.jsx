import { useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const randomLocation = Math.floor(Math.random(1,126)*100)
 
  const url = `https://rickandmortyapi.com/api/location/${randomLocation}`
  
 const location = useFetch(url)
 console.log(location)

  return (
    <div className="App">
      
    </div>
  )
}

export default App
