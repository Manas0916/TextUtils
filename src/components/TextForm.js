import React, { useState } from "react";
import { GrammarlyEditorPlugin } from '@grammarly/editor-sdk-react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upper Case was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', "success");
    }
    const handleLoClick = () =>{
        // console.log("Lower Case was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', "success");
    }
    const handleClearClick = () =>{
        setText("");
        props.showAlert('Cleared Successfully', "success");
    }
    const handleStartClick = () =>{
        if(text.length !== 0){
            let newText = text.split(' ').map(w => w[0].toUpperCase() + w.substring(1).toLowerCase()).join(' ');
            setText(newText);
        }
        props.showAlert('Converted to StartCase', "success");

    }
    const handleInverseClick = () =>{
        let newText = function (text) {
            var s = '';
            var i = 0;
            while (i < text.length) 
            {
                var n = text.charAt(i);
                if (n === n.toUpperCase()) 
                    n = n.toLowerCase();
                else
                    n = n.toUpperCase();

                i += 1;
                s += n; 
            }
            return s;
        };
        setText(newText);
        props.showAlert('Converted to InverseCase', "success");
    }
    const handleCopyClick = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert('Copied to Clipboard', "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed', "success");
    }
    const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
        <div className="container" style = {{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <GrammarlyEditorPlugin clientId="client_2gCNaMpgQmgkg9MCeJbXXf">
                    <textarea className="form-control" value={text} style = {{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode ==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </GrammarlyEditorPlugin>
                <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'secondary':'dark'} my-2 mx-1`} onClick={handleClearClick}>Clear Text</button>
                <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'secondary':'dark'} my-2 mx-1`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'secondary':'dark'} my-2 mx-1`} onClick={handleLoClick}>Convert to LowerCase</button>
                <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'secondary':'dark'} my-2 mx-1`} onClick={handleStartClick}>Convert to StartCase</button>
                <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'secondary':'dark'} my-2 mx-1`} onClick={handleInverseClick}>Convert to InverseCase</button>
                <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'secondary':'dark'} my-2 mx-1`} onClick={handleCopyClick}>Copy Text</button>
                <button disabled = {text.length===0} className={`btn btn-${props.mode==='light'?'secondary':'dark'} my-2 mx-1`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3" style = {{color: props.mode === 'dark'? 'white' : 'black'}}>
            <h2>Your text Summary</h2>
            <p>{text === "" ? 0 : text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
        </div>
    </>
    
  );
}
