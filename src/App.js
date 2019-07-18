import React, {useState, useEffect} from "react";
import DatePicker from './components/datePicker.js'
import axios from 'axios';
import Photo from './components/photo.js'
import { Container } from 'semantic-ui-react'
import "./App.css";

function App() {
  const [dateSelected, setDateSelected] = useState('2019-07-17');
  const [photo, setPhoto] = useState({});

  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=CrEwauJpo5nV9coQtGl5M8giH6SfGzz9ZIp7eeC6&date=${dateSelected}`)
    .then(whatchuGet=>{
      console.log(whatchuGet);
      setPhoto(whatchuGet.data);
    })
    .catch( err => {
      console.log("Error:", err);
    })    
  },[dateSelected]);

  return (
    <Container className="App">
      <DatePicker curDate={dateSelected} changeDate={setDateSelected}/>
      <Photo data={photo}/>
    </Container>
  );
}

export default App;
