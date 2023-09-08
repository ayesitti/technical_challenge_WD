import { useState, useEffect } from 'react'
import Homepage from './pages/Homepage'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import OnePhonePage from './pages/OnePhonePage'
import axios from 'axios'

API_URL = 
function App() {
  const [phones, setPhones] = useState([])
  const [fetchingPhones, setFetchingPhones] = useState(true)

const getAllPhones = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER}/phones`)

    setPhones(response.data)
    // setFetchingPhones(false)
  } catch(err) {
    console.log(err);
  }
}

  useEffect(() => {
    getAllPhones()
  }, [])

  return (
    <>
      <div>
       <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/phone-details/:id" element={<OnePhonePage phones/>}>
          
          </Route>
       </Routes>
      </div>
    
    </>
  )
}

export default App
