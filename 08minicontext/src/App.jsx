import { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import React from 'react'

function App() {


  return (
    <UserContextProvider>
      <h1>Learn React</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
