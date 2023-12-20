import React, { useState} from 'react'

export default function TextForm(props) {
    
const [text, setText] = useState('Enter your text');
const handleUpClick = () => {
    // console.log("Convert to Uppercase button clicked")
    let newText = text.toUpperCase();
    setText(newText);
}

const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
}

const handleClearClick = () => {
    let newText = '';
    setText(newText);
}

const handleOnChange = (event) => {
    // console.log("Handle On Change");
    setText(event.target.value);
}
    return (
        <>
            <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
                <h1>Your text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008*text.split(" ").length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something In The Text Box Above To Preview It Here"}</p>
            </div>
        </>
    )
}
