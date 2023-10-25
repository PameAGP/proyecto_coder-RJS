import { useState } from 'react'
import { NavBar } from './components/Navbar'
import { ItemListContainer } from './components/ItemListContainer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App () {
  return <><NavBar/>
  <ItemListContainer greeting ={"Hola"}/></>
}



export default App

