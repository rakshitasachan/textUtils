

import Navbar from './COMPONENTS/Navbar';
import TextForm from './COMPONENTS/TextForm';
import './App.css';
import { useState } from 'react';
import Alert from './COMPONENTS/Alert';



function App() {
  const[mode,setMode]=useState('light')  //whether dark mode enable or not.
 const[alert, setAlert]=useState(null)
  const showAlert =(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
setAlert(null);
    },12000);
    
  }

  const toggleMode=()=>{
 if(mode==='light'){
  setMode('dark');
  document.body.style.backgroundColor='#11213f';
  showAlert("Dark mode has been enable","success")
  document.title='TextUtils-Dark mode';
/*  setInterval(()=>{
    document.title='TextUtils is amazing ';
  },2000
  );
  setInterval(()=>{
    document.title='Install Textutils now ';
  },5000
  );*/
}

  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enable", "success")
    document.title='TextUtils-Light mode';
  }
}

  return (
   <>
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />

<Alert  alert={alert}/>

<div className="container my-3">
<TextForm showAlert={showAlert} heading="Enter the text to analyse below" mode={mode} />} />


  </div>
   </>
  );
}

export default App;
