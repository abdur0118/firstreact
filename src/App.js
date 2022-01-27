// import logo from './logo.svg';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm'
import React, {useState} from "react"
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      showAlert('Dark mode has been enabled','success');
      document.body.style.backgroundColor = '#081c2e'
    }
    else{
      setMode('light')
      showAlert('Light mode has been enabled','success');
      document.body.style.backgroundColor = 'white'
    }
  }
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000)
  }
  return (
    <>
      <Navbar title = "TextUtils" aboutText = "About TextUtils" cls = "testClass" mode = {mode} toggleMode = {toggleMode}/>
      <Alert alert = {alert}/>
      <TextForm heading = "Enter text" mode = {mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
