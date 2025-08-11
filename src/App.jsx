import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListaChats from './components/listaChats';
import Sidebar from './components/Sidebar'
import Download from './components/download'
import SearchBar from './components/SearchBar'
import ChatFilterBar from './components/filter' 
import chats from './data/chats';
function App() {

  return (
    <>
            <Sidebar />
            <ListaChats chats={chats} />
            <Download />
            <SearchBar />
            <ChatFilterBar />
    </>
  )
}

export default App
