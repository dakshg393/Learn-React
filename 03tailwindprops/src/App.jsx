import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    name: 'daksh',
    age: '19'
  }


  return (
    // <> This is called fragment  becase  retunrn a single Element And When We retuen Multiple Element we use Fragment 
    <>
      
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test </h1>

      <Card username='chai aur code' someobject={myObj}  />
      <Card  username='Daksh' button='View Daksh Profile' />
      
     
    </>
  )
}

export default App
