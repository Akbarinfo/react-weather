import React from "react";
import Store from "../../Store/Store";

// icons
import clear_day from "../../assets/icons/weather/clear-icon.png"
import clear_night from "../../assets/icons/weather/clear-night-icon.png"
import few_day from "../../assets/icons/weather/few-clouds-icon.png"
import few_night from "../../assets/icons/weather/few-clouds-night-icon.png"
import clouds_day from "../../assets/icons/weather/clouds-icon.png"
import clouds_night from "../../assets/icons/weather/clouds-night-icon.png"
import shower from "../../assets/icons/weather/shower-rain-icon.png"
import rain_day from "../../assets/icons/weather/rain-day-icon.png"
import rain_night from "../../assets/icons/weather/rain-night-icon.png"
import thunderstorm from "../../assets/icons/weather/thunderstorms-icon.png"
import snow from "../../assets/icons/weather/snow-icon.png"
import mist from "../../assets/icons/weather/mist-icon.png"
import loading_icon from '../../assets/icons/loading.svg'

export default function Main() {
  
  // date
  let date = new Date()
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //store
  let { data, error, loading } = Store(state => state)

  //laoding vs error
  if (!loading) {
    if (!error) {
      return <section className="main"><h1 className="main__error">No results found</h1></section>
    } else {
      return <section className="app"><img className="main__loading" src={loading_icon} alt="loading" width={150} height={150} /></section>
    }
  }

  //results
  return (
    data.data.main && (
      <section className="main">
        <div className="main__box">
          <p className="main__celsius">{data.data.main.temp.toFixed()}&deg;</p>
          <div className="main__citybox">
            <h3 className="main__city">{data.data.name}</h3>
            <p className="main__date">{date.getHours()}:{date.getMinutes()} - {weekday[date.getDay()]}, {date.getDate()} {month[date.getMonth()]} '{date.getFullYear()}</p>
          </div>
          <div className="main__descbox">
            <div className="main__imgbox">
              {
                data.data.weather[0].icon == '01d' ? <img src={clear_day} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '01n' ? <img src={clear_night} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '02d' ? <img src={few_day} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '02n' ? <img src={few_night} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '03d' ? <img src={clouds_day} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '03n' ? <img src={clouds_night} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '04d' ? <img src={clouds_day} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '04n' ? <img src={clouds_night} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '09d' ? <img src={shower} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '09n' ? <img src={shower} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '10d' ? <img src={rain_day} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '10n' ? <img src={rain_night} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '11d' ? <img src={thunderstorm} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '11n' ? <img src={thunderstorm} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '13d' ? <img src={snow} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '13n' ? <img src={snow} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '50d' ? <img src={mist} alt={data.data.weather[0].description} width="55" height="55" /> : data.data.weather[0].icon == '50n' ? <img src={mist} alt={data.data.weather[0].description} width="55" height="55" /> : ""
              }
            </div>
            <p className="main__desc">{data.data.weather[0].main}</p>
          </div>
        </div>
      </section>
    ))
}