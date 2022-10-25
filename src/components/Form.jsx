import React from 'react';

const Form = ({handlerClick, handlerInput, text}) => {
  return (
    <div className='write-click'>
      <h1>{text ?`Welcome ${text}` :'Enter Your Name'}</h1>
      <input type="text" onChange={handlerInput}/>
      <button onClick={handlerClick}>Click</button>
    </div>
  );
};

export default Form;