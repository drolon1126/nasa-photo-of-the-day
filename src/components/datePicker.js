import React, {useState, useEffect} from 'react';

const DatePicker = (props) => {
  
  const [input,setInput] = useState(props.curDate);
  const handleSubmit = (event) => {
    event.preventDefault();
    props.changeDate(input);
  }

  const handleInputChange = (event) => {
    event.persist();
    setInput(event.target.value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Date: </label>
        <input type='date' name='date' onChange={handleInputChange}/>
        <button type='submit'>Go</button>
      </form>
    </div>
  ) 
};

export default DatePicker;