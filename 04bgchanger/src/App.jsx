import { useState } from "react"


function App() {
  const [color, setcolor] = useState('olive')

  return (
    
      <div className="w-full h-screen " style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick={()=> setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>RED</button>
          <button onClick={()=> setcolor("Green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
          <button onClick={()=> setcolor("Olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Olive"}}>Olive</button>
          <button onClick={()=> setcolor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}}>Gray</button>
          <button onClick={()=> setcolor("Yellow")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button onClick={()=> setcolor("pink")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Pink"}}>Pink</button>
          <button onClick={()=> setcolor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Purple"}}>Purple</button>
          <button onClick={()=> setcolor("lavender")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"Lavender"}}>Lavender</button>
          <button onClick={()=> setcolor("white")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg" style={{backgroundColor:"White"}}>White</button>
          <button onClick={()=> setcolor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}}>Black</button>

          </div>
        </div>

      </div>

  )
}

export default App
