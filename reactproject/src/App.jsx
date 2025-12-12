import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Content from './Content'

function App() {

  let city = "coimbatore";  
  let bums = [11, 22, 33];
  let age = 15;

  const [num, setNum] = useState(50);

  let frnds=["Smith", "John", "Doe"];
  return (
    <>
     

      <h2>State value: {num}</h2>

      
      <button onClick={() => setNum(num + 1)}>
        Increase
      </button>

      
      <button onClick={() => setNum(num - 1)} style={{ marginLeft: "10px" }}>
        Decrease
      </button>
    
    </>
  );
}

export default App;