import { useState, createContext } from 'react';
import './App.css';
import Calculator from './Calculator';

export const calculatorContext = createContext()
function App() {

  const [screen1, setScreen1] = useState(null)
  const [screen2, setScreen2] = useState("")
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
  return (
    <calculatorContext.Provider value={{screen1,setScreen1,setScreen2,screen2,clear,calculate}}>
      <div className="App">
        <Calculator />
      </div>
    </calculatorContext.Provider>
  );
}

export default App;
