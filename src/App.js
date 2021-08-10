import React from 'react'
import Navbar from './components/Navbar'
import Homepage from './components/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  //scroll to finish (css to notify users how long the page is)
  return (
    <main>
      <Navbar/>
      <Homepage/>
    </main>
  );
}

export default App;
