import React from "react"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import Store from "./Store/Store"

// images
import clear_day from "../src//assets/images/weather/clear.webp"
import clear_night from "../src//assets/images/weather/clear-sky-night.jpg"
import few_day from "../src//assets/images/weather/few clouds-images.webp"
import few_night from "../src//assets/images/weather/few-clouds-night.jpeg"
import clouds_day from "../src//assets/images/weather/few clouds-images.webp"
import clouds_night from "../src//assets/images/weather/few-clouds-night.jpeg"
import shower from "../src//assets/images/weather/shower-rain-images.jpg"
import shower_night from "../src//assets/images/weather/shower-rain-images.jpg"
import rain_day from "../src//assets/images/weather/shower-rain-images.jpg"
import rain_night from "../src//assets/images/weather/shower-rain-night.webp"
import thunderstorm from "../src//assets/images/weather/thunderstorm-images.webp"
import thunderstorm_night from "../src//assets/images/weather/thunderstorm-night-images.jpg"
import snow from "../src//assets/images/weather/snow.webp"
import snow_night from "../src//assets/images/weather/snow-night-images.jpg"
import mist from "../src//assets/images/weather/mist-images.jpeg"
import mist_night from "../src//assets/images/weather/mist-night.jpeg"
import { useEffect } from "react"

function App() {

  //store
  let { clean } = Store(state => state)

  //background o'zgartirib turish uchun
  let back = {
    backgroundImage:  clean == '01d' ? `url(${clear_day})` : clean == '01n' ? `url(${clear_night})` : clean == '02d' ? `url(${few_day})` : clean == '02n' ? `url(${few_night})` : clean == '03d' ? `url(${clouds_day})` : clean == '03n' ? `url(${clouds_night})` : clean == '04d' ? `url(${clouds_day})` : clean == '04n' ? `url(${clouds_night})` : clean == '09d' ? `url(${shower})` : clean == '09n' ? `url(${shower_night})` : clean == '10d' ? `url(${rain_day})` : clean == '10n' ? `url(${rain_night})` : clean == '11d' ? `url(${thunderstorm})` : clean == '11n' ? `url(${thunderstorm_night})` : clean == '13d' ? `url(${snow})` : clean == '13n' ? `url(${snow_night})` : clean == '50d' ? `url(${mist})` : clean == '50n' ? `url(${mist_night})` : `url(${clear_day})`
  }

  //results
  return (
    <div className="back">
      {
       clean == '01d' ? <img className="imgs" src={clear_day} alt="images" /> : clean == '01n' ? <img className="imgs" src={clear_night} alt="images" /> : clean == '02d' ? <img className="imgs" src={few_day} alt="images" /> : clean == '02n' ? <img className="imgs" src={few_night} alt="images" /> : clean == '03d' ? <img className="imgs" src={clouds_day} alt="images" /> : clean == '03n' ? <img className="imgs" src={clouds_night} alt="images" /> : clean == '04d' ? <img className="imgs" src={clouds_day} alt="images" /> : clean == '04n' ? <img className="imgs" src={clouds_night} alt="images" /> : clean == '09d' ? <img className="imgs" src={shower} alt="images" /> : clean == '09n' ? <img className="imgs" src={shower} alt="images" /> : clean == '10d' ? <img className="imgs" src={rain_day} alt="images" /> : clean == '10n' ? <img className="imgs" src={rain_night} alt="images" /> : clean == '11d' ? <img className="imgs" src={thunderstorm} alt="images" /> : clean == '11n' ? <img className="imgs" src={thunderstorm_night} alt="images" /> : clean == '13d' ? <img className="imgs" src={snow} alt="images" /> : clean == '13n' ? <img className="imgs" src={snow_night} alt="images" /> : clean == '50d' ? <img className="imgs" src={mist} alt="images" /> : clean == '50n' ? <img className="imgs" src={mist_night} alt="images" /> : ""
      }
      <div className="container">
        <div className="app" style={back}>
          <Main />
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App
