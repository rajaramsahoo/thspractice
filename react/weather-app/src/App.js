import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState } from 'react';

function App() {

  const [temp, setTemp] = useState("")
  const [city, setCity] = useState("")
  const [data, setData] = useState([])
  
 
  function hitAPI(cityname) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=248449b2948eadb7fd97cbddbeba954e`
    setCity(cityname)
    axios.get(url)
      .then((res) => {
        // console.log(res.data.main.temp)
      setTemp(res.data.main.temp)
      let t = [...data ]
      t.push({
        city:city,
        temp:temp
      })
      setData(t)
      
      
      })
      .catch((err) => {
        console.log(err)
      })
  }







  return (
    <>
      <h1>Temperature <sup>0</sup>C={temp.length == 0 ? 0 : Math.round(temp - 273.15)} in {city}</h1>
      <br />
      <button onClick={() => { hitAPI("Odisha") }} >odisha</button>
      <button onClick={() => { hitAPI("Hyderabad") }}>Hyderabad</button>
      <button onClick={() => { hitAPI("Bhubaneswar") }}>Bhubaneswar</button>
      <button onClick={() => { hitAPI("Bangalore") }}>Bangalore</button>
      <h1>Weather Data</h1>
      {data.map((ele)=>{
        return(
          <>
          <h2>{ele.city}</h2>
          <p>{ele.temp}</p>

          </>
        )
      })}

    

    </>
  );
}

export default App;
