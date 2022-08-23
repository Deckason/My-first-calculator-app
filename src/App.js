import { useState } from 'react';
import './App.css';
import Calculator from './Calculator';

function App() {
  const [screen1, setScreen1] = useState(null)
  const [screen2, setScreen2] = useState("")
  //const lastOnScreen = screen2.length;
  //const removeLastOnScreen = screen2.slice(0,-1)
  function clear() {
    if (screen1) {
      setScreen1("")
      setScreen2("")
    }else{
      setScreen2(screen2.slice(0,-1))
    }
  }
  function calculate() {
    setScreen1(screen2)
    setScreen2(eval(screen2))

  }
  //console.log(screen2)
  //console.log(screen2[lastOnScreen -1])
  //console.log(removeLastOnScreen)
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
