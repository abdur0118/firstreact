import React, { useState } from 'react';

export default function TextHtmlForm(props) {
    const [text, setText] = useState('Enter text');
    const handleUpClick=()=>{
        console.log("Upper case");
        setText(text.toUpperCase())
        props.showAlert('Converted to upper case','success')
    }
    const handleLowClick=()=>{
        console.log("Upper case");
        setText(text.toLowerCase())
        props.showAlert('Converted to upper case','success')

    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    return(
    <>
    <div className='container my-3'>
    <h2 style = {{color:props.mode === 'light'?'black':'white'}}>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" value= {text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'light'?'white':'grey',color:props.mode === 'light'?'black':'white'}}></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    </div>
    <div className="container my-3" style = {{color:props.mode === 'light'?'black':'white'}}>
        <h1>Text summary</h1>
        <p> {text.split(' ').length} words and {text.length} of characters</p>
        <p> {text.split(' ').length*0.008} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter for preview"}</p>
    </div>
    </>
  );
}
