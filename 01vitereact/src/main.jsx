import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

function MyApp(){
    return(
        <h1 className='h'>Hello This is My App Function Creating in Main.jsx </h1>
    )
}

// const ReactElement ={

//     type : 'a',
//     props :{
//         href: 'https://google.com',
//         target :'_blank'
//     },
//     children :"hello click hear to open goolge"

// }




const anotherElement = (

    <a href='http://google.com' target='_blank' > click hear to vsit google</a>

)

// const anotheruser = "Daksh "

// const reactElement= React.createElement(
//     'a',
//     {href : 'https://google.com', target : "_blank"},
//     'click hear to go on google',
//     anotheruser

// )



ReactDOM.createRoot(document.getElementById('root')).render(
  
   <MyApp/>
  
)
