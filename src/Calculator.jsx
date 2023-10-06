import React, { useState } from 'react';

import './Calc.css'
const Calculator = () => {

const [input,setInput]=useState('');
const [result,setResult]=useState('')
const handleinput=(value)=>{
    setInput(input+value);
}
const  clearInput=()=>{
    setInput('');
    setResult('');
}
const handleDelete=()=>{
    setInput(input.slice(0,-1))
}
const calculateResult=()=>{
    try{
    setInput(eval(input).toString())
    }
    catch(error){
        setResult('Error')
    }
    
   
}



  return (
    <div className='calc'>
        <div className='input'>{input}{result}</div>
       
        <div className='buttons'>
        <button onClick={clearInput}>C</button> 
        <button onClick={()=>handleinput('%')}>%</button>
        <button onClick={handleDelete}>Del</button>
        <button  onClick={()=>handleinput('/')}>/</button>
         <button onClick={()=>handleinput('7')}>7</button> 
         <button onClick={()=>handleinput('8')}>8</button>  
         <button onClick={()=>handleinput('9')}>9</button> 
         <button onClick={()=>handleinput('*')}>*</button>   
         <button onClick={()=>handleinput('4')}>4</button>  
         <button onClick={()=>handleinput('5')}>5</button>  
         <button onClick={()=>handleinput('6')}>6</button>  
         <button onClick={()=>handleinput('-')}>-</button>  
         <button onClick={()=>handleinput('1')}>1</button>  
         <button onClick={()=>handleinput('2')}>2</button> 
         <button onClick={()=>handleinput('3')}>3</button>
         <button onClick={()=>handleinput('+')}>+</button>    
        
         <button onClick={()=>handleinput('00')}>0</button> 
         <button onClick={()=>handleinput('0')}>00</button>  
         <button onClick={()=>handleinput('.')}>.</button> 
         
         
         
        <button  onClick={calculateResult}>=</button>
         
           
         
        </div>
        
    </div>
  );
}

export default Calculator;
