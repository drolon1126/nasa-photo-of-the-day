import React, {useState, useEffect} from "react";
import DatePicker from './components/datePicker.js'
import axios from 'axios';
import Photo from './components/photo.js'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./App.css";
import Background from './assets/cosmos.jpg';

function App() {
  const [dateSelected, setDateSelected] = useState('2019-07-17');
  const [photo, setPhoto] = useState({});

  const [loaded, setLoaded] = useState(false);
  
  useEffect(()=>{
    setLoaded(false);
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=CrEwauJpo5nV9coQtGl5M8giH6SfGzz9ZIp7eeC6&date=${dateSelected}`)
    .then(whatchuGet=>{
      console.log(whatchuGet);
      setLoaded(true);
      setPhoto(whatchuGet.data);
    })
    .catch( err => {
      console.log("Error:", err);
    })    
  },[dateSelected]);

  if(loaded){
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className="App">
          <Typography component="div" style={{ backgroundColor: '#cfe8fc', backgroundImage: `url(${Background})`,backgroundSize:'cover', padding:'50px 0'}}>
            <DatePicker curDate={dateSelected} changeDate={setDateSelected}/>
            <Photo data={photo}/>
          </Typography>
        </Container>
      </React.Fragment>
    );
  } else{
    return(
      <h1>Loading...</h1>
    )
  }
}

export default App;
