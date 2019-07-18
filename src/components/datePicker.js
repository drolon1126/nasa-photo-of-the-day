import React, {useState, useEffect} from 'react';
import useDatePicker from './customHooks';
import axios from 'axios';
import Photo from './photo.js'


const DatePicker = () => {
  const [photo, setPhoto] = useState({});
  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=CrEwauJpo5nV9coQtGl5M8giH6SfGzz9ZIp7eeC6&date=2019-07-17`)
    .then(whatchuGet=>{
      console.log(whatchuGet);
      setPhoto(whatchuGet.data);
    })
    .catch( err => {
      console.log("Error:", err);
    })    
  },[]);
  const changeDate = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=CrEwauJpo5nV9coQtGl5M8giH6SfGzz9ZIp7eeC6&date=${input.date}`)
    .then(whatchuGet=>{
      console.log(whatchuGet);
      setPhoto(whatchuGet.data);
    })
    .catch( err => {
      console.log("Error:", err);
    })
  }
  const {input, handleInputChange, handleSubmit} = useDatePicker({date:'2019-07-17'},changeDate);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Date: </label>
        <input type='date' name='date' onChange={handleInputChange}/>
        <button type='submit'>Go</button>
      </form>
      <div>
        <Photo data={photo}/>
      </div>
    </div>
  ) 
};

export default DatePicker;