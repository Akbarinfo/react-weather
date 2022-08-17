import axios from "axios";

const weatherToken = '0400b796d3acd1ee1c6f3301a977c52f'
const weatherURL = 'https://api.openweathermap.org/data/2.5/'

const WEATHER = {
  weather: (city) => axios.get(`${weatherURL}weather?q=${city}&units=metric&APPID=${weatherToken}`)
}

export default WEATHER

// fetch:async(url)→>>
//   const response=await axios.get(url);
//   console.log("response",response);
//   set({user:await response.data});