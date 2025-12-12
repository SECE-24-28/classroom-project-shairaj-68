import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/Stu_api'

function App() {
  const [Slist, setSlist] = useState([])

  useEffect(() =>
  {
    const fetchData = async () => {
      try{
        const response = await api.get('/students')
        setSlist(response.data)
      } 
      catch(err){
        //console.error(err)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {
        Slist.map((stud) => (
          <p >{stud.firstName} {stud.lastname} - {stud.id}</p>
        ))
      }
    </>
  )
}

export default App
