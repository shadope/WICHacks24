import React, {useState, useEffect} from 'react';
import './App.css';
import MainNavbar from './components/MainNavbar.js';
import'./components/MainNavbar.js';
// import Navbar from './components/MainNavbar.js';

function App() {


  const [data, setdata] = useState([{}])

  useEffect(() => {
      fetch("/members").then(
        res => res.jeon()).then(
        data => {
            setdata(data)
            console.log(data)
        }
      )
  }, [])
  return (

    <div className="App">
       <style>{'body { background-color: #FACDE5; }'}</style>
    </div>
  );
}

export default App;

