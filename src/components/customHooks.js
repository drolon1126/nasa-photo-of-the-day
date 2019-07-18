import React, {useState} from 'react';

const useDatePicker = (initialValue, cb) =>{
  const [input,setInput] = useState(initialValue);

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      cb();
  }

  const handleInputChange = (event) => {
    event.persist();
    setInput(input => ({...input, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    input
  } 
}

export default useDatePicker;