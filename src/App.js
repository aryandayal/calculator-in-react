import './App.css';
import React, {useState} from 'react'

function App() {

  const [result, setResult] = useState('')


  function handleClick (e) {
    setResult(result.concat(e.target.value))
  }

  function clear () {
    setResult('')
  }

  function cal () {
    try{
    setResult(eval(result).toString())
    }
    catch (error){
      setResult(error)
    }
  }

  function backSpace () {
    setResult(result.slice(0, -1))
  }


  return (
    <div className="content">
      <h1>Calculator</h1>
      <div id="calBody">
      <div id='screen'>
        <textarea id='result' value={result} placeholder='input your number'></textarea>
      </div>
      <div>
        <button onClick={handleClick} className='button' value='1'>1</button>
        <button onClick={handleClick} className='button' value='2'>2</button>
        <button onClick={handleClick} className='button' value='3'>3</button>
        <button onClick={handleClick} className='button' value='+'>+</button>
        <button onClick={handleClick} className='button' value='4'>4</button>
        <button onClick={handleClick} className='button' value='5'>5</button>
        <button onClick={handleClick} className='button' value='6'>6</button>
        <button onClick={handleClick} className='button' value='-'>-</button>
        <button onClick={handleClick} className='button' value='7'>7</button>
        <button onClick={handleClick} className='button' value='8'>8</button>
        <button onClick={handleClick} className='button' value='9'>9</button>
        <button onClick={handleClick} className='button' value='*'>x</button>
        <button onClick={handleClick} className='button' value='.'>.</button>
        <button onClick={handleClick} className='button' value='0'>0</button>
        <button onClick={handleClick} className='button' value='/'>%</button>
        <button onClick={handleClick} className='button' value='/'>/</button>
        <button onClick={backSpace} className='button' value='backSpace'>&#8592;</button>
        <button onClick={clear} className='button' value='C'>C</button>
        <button onClick={cal} style={{width: '120px'}} className='button' value='='>=</button>
      </div>
      </div>
    </div>
  );
}

export default App;
