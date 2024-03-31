
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';

import Table from './components/Table';
import Textform from './components/Textform';
import {
  BrowserRouter,

  Routes,
  Route,

} from "react-router-dom";




function App(props) {
  const [mode,setmode]=useState('light');
  const toggleMode=()=>{
    if (mode==='light'){
      setmode('dark');
      
      document.body.style.backgroundColor="#080f26";
    }
    else{
      setmode('light');
     
      document.body.style.backgroundColor="white";
    }
  }
  return (
    <>
    <BrowserRouter>
    
   
  <Navbar title="Safal"
         content="About"
         active="faffas"
         head="Table"
         mode={mode}
         toggleMode={toggleMode}>
  
  </Navbar>


  {/* <Table></Table> */}
  <div className="container my-3">
  <Routes>
       
           
          
       <Route path={ "/"} element={<Textform heading="Enter the text to analyze"
                                       mode={mode}>
                                   </Textform>}/>
       
             
      
       <Route path={"/about"} element={<About />}/>
       <Route path={"/table"} element={ <Table></Table>}></Route>
             
             
    
</Routes>

  </div>
  <div className='container'>
 
  </div>
 
  </BrowserRouter>
  
    </>
  );
  
}


export default App;
