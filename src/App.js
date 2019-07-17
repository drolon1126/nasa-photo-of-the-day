import React, {useState, useEffect} from "react";
import axios from 'axios';
import Photo from './components/photo.js'
import "./App.css";

function App() {
  const [photo, setPhoto] = useState({});
  useEffect(()=>{
    axios.get('https://api.nasa.gov/planetary/apod?api_key=CrEwauJpo5nV9coQtGl5M8giH6SfGzz9ZIp7eeC6')
    .then(whatchuGet=>{
      console.log(whatchuGet);
      setPhoto(whatchuGet.data);
    })
    .catch( err => {
      console.log("Error:", err);
    })
  },[]);
  return (
    <div className="App">
      <Photo data={photo}/>
    </div>
  );
}

export default App;
