import React, {useState, useEffect} from 'react';
import {useDatePicker} from './customHooks';



const DatePicker = (props) => {
  
  const {input, handleInputChange, handleSubmit} = useDatePicker('2019-07-17',props.changeDate);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Select A Date: </h1>
        <input type='date' name='date' onChange={handleInputChange}/>
        <button type='submit'>Go</button>
      </form>
    </div>
  ) 
};

export default DatePicker;