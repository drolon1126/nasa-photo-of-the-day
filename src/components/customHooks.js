import React, {useState} from 'react';
import axios from 'axios';

export const useDatePicker = (initialValue, cb) =>{
  const [input,setInput] = useState(initialValue);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      cb(input);
  }

  const handleInputChange = (event) => {
    event.persist();
    setInput(input => (event.target.value));
  }
  return {
    handleSubmit,
    handleInputChange,
    input
  } 
}
