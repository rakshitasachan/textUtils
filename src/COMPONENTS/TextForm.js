import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case")
    }
    const handleloClick=()=>{
      console.log("lowercase was clicked" +text);
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case")
  }
const handleCopy=()=>{
  var text=document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied")
}

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Speak function is enable")
  }

  const WhiteSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
}

const Reverse = ()=>{
  let spl = text.split(" ")
  let rev = spl.reverse();
  let join = rev.join(" ");
  setText(join)
  props.showAlert("text is reversed")
}



  const handleclearClick=()=>{
    console.log("lowercase was clicked" +text);
    let newText="";
    setText(newText)
    props.showAlert("Text is Cleared")
}
    const handleOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value);
    }
    
    const[text, setText] =useState("");
  //  setText("new text");
  return (
    <>
    <div className='container' style={{color: props.mode==='dark' ? 'white':'black'}}>
    <h2   >{props.heading}</h2>
<div className="mb-3" >

  <textarea  className="form-control" id="myBox" value= {text} style={{backgroundColor:props.mode==='dark' ? '#1e2f4e':'white' , color: props.mode==='dark' ? 'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
</div>
<button type="button" className="btn btn-success  mx-1" onClick={handleUpClick} >Upper case</button>

<button type="button" className="btn btn-success mx-1" onClick={handleloClick}>Lower case</button>
  
<button type="button" className="btn btn-success mx-1" onClick={handleclearClick}>Clear text</button>
<button type="button" onClick={speak} className="btn btn-success mx-2 my-2">Speak</button>
<button type="button" onClick={WhiteSpace} className=" btn btn-success mx-2 my-2">white space</button>  

<button type="button" className="btn btn-success mx-1" onClick={Reverse}>Reverse</button>
<button type="button" className="btn btn-success mx-1" onClick={handleCopy}>CopyText</button>

  
    </div>
    <div className='container my-3' style={{color: props.mode==='dark' ? 'white':'black'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s+/).length} words and {text.length} charecter</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
   <h2>Preview</h2>
   <p>{text.length>0?text:"enter text here"}</p>
    </div>
    </>
    

  )
  }
