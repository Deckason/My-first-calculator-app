import { useContext } from "react";


import { calculatorContext } from "./App";
const Calculator = () => {
  const {screen1,setScreen1,setScreen2,screen2,clear,calculate} = useContext(calculatorContext)
    return (
        <div className="container">
        <h1>Calculator</h1>
        <hr />
        <div className="main">
          <div className="display">
            <p className="screen1">{screen1}</p>
            <p className="screen2">{screen2}</p>
          </div>
          <div className="buttons">
            <div className="num">
              <button value={1} onClick={(e)=>setScreen2(screen2 + e.target.value)}>1</button>
              <button value={2} onClick={(e)=>setScreen2(screen2 + e.target.value)}>2</button>
              <button value={3} onClick={(e)=>setScreen2(screen2 + e.target.value)}>3</button>
              
              <button value={4} onClick={(e)=>setScreen2(screen2 + e.target.value)}>4</button>
              <button value={5} onClick={(e)=>setScreen2(screen2 + e.target.value)}>5</button>
              <button value={6} onClick={(e)=>setScreen2(screen2 + e.target.value)}>6</button>
              
              <button value={7} onClick={(e)=>setScreen2(screen2 + e.target.value)}>7</button>
              <button value={8} onClick={(e)=>setScreen2(screen2 + e.target.value)}>8</button>
              <button value={9} onClick={(e)=>setScreen2(screen2 + e.target.value)}>9</button>
              
              <button value={"."} onClick={(e)=>setScreen2(screen2 + e.target.value)}>.</button>
              <button value={0} onClick={(e)=>setScreen2(screen2 + e.target.value)}>0</button>
              <button value={"="} onClick={calculate}>=</button>
              
            </div>
            <div className="operators">
              <button className='del' onClick={clear}>C/CE</button>
              <button value={"+"} onClick={(e)=>setScreen2(screen2 + e.target.value)}>+</button>
              <button value={"-"} onClick={(e)=>setScreen2(screen2 + e.target.value)}>-</button>
              <button value={"*"} onClick={(e)=>setScreen2(screen2 + e.target.value)}>X</button>
              <button value={"/"} onClick={(e)=>setScreen2(screen2 + e.target.value)}>/</button>

            </div>
          </div>
        </div>
      </div>
    );
}
 
export default Calculator;