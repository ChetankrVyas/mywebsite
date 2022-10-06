import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {
        setText("new text")
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case","success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lower Case","success")
    }
    const handleClearText = () => {
        let newText = ('')
        setText(newText)
        props.showAlert("Text Cleared","success")
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied to clipboard","success")
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    // console.log(useState("enter your text 2"));
    // setText("yes");
    return (
        <div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <label htmlFor="myText" className="form-label"><h3>Write the text</h3></label>
                <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="3" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(56 39 104)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} ></textarea>
                <button disabled={text.length===0} className='btn btn-primary my-2' onClick={handleUpClick}>convert to uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2' onClick={handleLowClick}>convert to lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary' onClick={handleClearText}>Clear Text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy}>Copy Text</button>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes read</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to Preview"}</p>

            </div>
        </div>
    )
}
