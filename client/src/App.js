import React from 'react'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import SinglePost from './pages/home/single-post/SinglePost'
import './App.css'


function App() {
  return (
    <div>
      <Navbar />
      <SinglePost />
    </div>
  )
}

export default App
