// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode]= useState('light');

  const toggleMode  = ()=>
    {
      if(mode ==='dark')
        {
          setMode('light');
          document.body.classList.add('bg-light','text-dark');
          document.body.classList.remove('bg-dark','text-light');
          
        }
        else
        {
            setMode('dark');
            
          document.body.classList.add('bg-dark','text-light');
          document.body.classList.remove('bg-light','text-dark');
        }
    }
  
  return (
    <>
      <Navbar title="TextUtlis" mode={mode} toggleMode={toggleMode}/>
      <div className="container">
        
      <TextForm heading ="Enter The Text" />
      </div>
    </>

  );
}

export default App;
