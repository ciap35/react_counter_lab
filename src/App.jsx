import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);


  const handleAdd = () => {
    setCount(count + 1);
  }

  const handleSubstract = () => {
    setCount(count <= 0 ? 0 : count - 1);
  }

  const handleReset = () => {
    setCount(0);
  }
  /*setTimeout(
    ()=>{
      setCount(count+1);
    }, 1000);*/

  console.log(count);

  return (
    <>
      <div className="container">
        <h1>Counter: {count}</h1>
        <hr />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}> RESET </button>
        <button onClick={handleSubstract}>-</button>
      </div>
    </>
  );
}

export default App;
