import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Components/Nav'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Blog from './Components/Blog'
import Store from './Components/Store'
import './App.css'

const App = () =>{

  return(
    <BrowserRouter>
    <div className = "App">
    <Navbar/>
    <div className = "container1">
    <Route exact path = "/" component = {Home}/>
    <Route path = "/about" component = {About}/>
    <Route path = "/contact" component = {Contact}/>
    <Route path = "/blog" component = {Blog}/>
    <Route path = "/store" component = {Store}/>
    </div>
    </div>
    </BrowserRouter>
  )
}

export default App
