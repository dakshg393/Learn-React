import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App(){


  let [counter,setcounter] = useState(15)

  function Addcounter(){
    setcounter(counter+1)

    /* setcounter(counter+1)
     setcounter(counter+1) 
     setcounter(counter+1)

      This is not incress Counter Multiple TImes because usestates Sand updates in  UI and in variable in form of 
      batchs So when it Send the Setcounter it detected that counter alredy incress so it not incress Multipal
      times So that Why fiber comes out So Send all thes Update to Ui at One's

      To solve this we can use a funtion or hiden variabke in satcounter to update multial times value so we use 

      setcounter(prevcounter => prevcounter+1) we can use any vatiable name at place of prevcouter basically it is callback function 
     
     */


      setcounter(prevcounter => prevcounter+1)
      setcounter(prevcounter => prevcounter+1)
      setcounter(prevcounter => prevcounter+1)
      setcounter(prevcounter => prevcounter+1)

  }

  function Subcounter(){
    setcounter(counter-1)
  }


  return (

    <>

    <h1>The counter VAlue is  {counter}</h1>

    <button onClick={Addcounter}>Incress Counter Value</button>  <br/>
    <button onClick={Subcounter}>Decress Counter Value </button>  


    </>

  )


}


export default App








// function App() {

//   let [counter , setCounter] = useState(15)

//   //let counter = 15

//   const addvalue =()=>{
//     counter =(counter < 20 )? counter+1 : counter;
//     //counter = counter+1
//     setCounter(counter);
//     console.log("clicked " , counter);
  
//   }

//   const removevalue = () =>{
//     if(counter > 0){
//     counter=counter-1;
//     }
//     else{
//       counter =counter;
//     }
//     setCounter(counter);
//     console.log("value :" ,counter)
    
//   }

//   return (
//     <>
   
//       <h1>Chai aur React </h1>
//       <h2>Counter value : {counter}</h2>

//       <button onClick={addvalue}  >Add Value {counter}</button>
//       <br/>
//       <button onClick={removevalue}>Remove Value {counter} </button>
//     </>
//   )
// }

// export default App
