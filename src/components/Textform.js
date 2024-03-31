import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase()
        setText(newText);
    }
    const handleSmClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        
    }
    const handleClearClick=()=>{
        let newText="";
        setText(newText);
    }
    const handleCopyClick=()=>{
        var text=document.querySelector("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
       }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }
   
    const[text,setText]=useState("");

    // const [color,setcolor]=useState({
        
    // })
    return (
        <>
        <div className="container my-5" >
            <h1 className='my-3' style={{color:props.mode==='light'? 'Black':'white'}}>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'? 'white':'gray', color:props.mode==='light'? 'black':'White'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
            <button className='btn btn-primary mx-2' onClick={handleSmClick}>Convert to lowercase</button>
            <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear text</button>
            <button className='btn btn-primary mx-2' onClick={handleCopyClick}>Copy text</button>
            
        </div>
        <div className="container">
            <h1 style={{color:props.mode==='light'? 'Black':'white'}}>Your Text Summary</h1>
            <p style={{color:props.mode==='light'? 'Black':'white'}}>Your Entred {text.split(" ").length} words and {text.length} characters</p>
            <p style={{color:props.mode==='light'? 'Black':'white'}}>{0.008*text.split(" ").length} Minutes read</p>
            <h3 style={{color:props.mode==='light'? 'Black':'white'}}>Preview</h3>
            <p style={{whiteSpace:"pre-wrap" , color:props.mode==='light'? 'Black':'white'}}>{text.length>0?text:"Enter something to preview"}</p>
          
        </div>
        <hr/>
        <hr/>
    </>
    )
}
