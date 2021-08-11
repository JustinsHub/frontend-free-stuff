import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import './components/Homepage.css'

const App = () => {
  //scroll to finish (css to notify users how long the page is)
  return (
    <main className="free-stuff-bg">
      <Navbar/>
      <Homepage/>
    </main>
  );
}

export default App;
