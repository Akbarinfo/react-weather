import React, { useEffect, useState } from "react";

//API
import Store from "../../Store/Store";

export default function Sidebar() {

  //vilyotlar
  const citys = ["Tashkent", "Andijon", "Buhara", "Farg'ona", "Jizzax", "Namangan", "Navoiy", "Qashqadaryo", "Karakalpakstan", "Samarqand", "Termiz", "Xiva",]

  //store
  const { data, loading, error, weather } = Store(state => state)

  //shaxarlarni ushlab turuuvchi statelar
  const [city, setCity] = useState("Tashkent")
  const [input, setInput] = useState("")

  //enter bosganda ishlaydigan funticon
  const enterHandler = async (e) => {
    if (e.key === 'Enter') {
      setCity(input)
      setInput("")
    }
  }

  //search button bosilganda ishlaydigan funticon
  const cityHandler = async () => {
    setCity(input)
    setInput("")
  }

  //shaxar o'zgargan paytda storedagi weather function ishlatadi
  useEffect(() => {
    weather(city)
  }, [city])

  //loading vs error
  if (!loading) {
    if (!error) {
      return <section className="sidebar">
        <div className="sidebar__inputbox">
          <input onChange={(e) => setInput(e.target.value)} onKeyPress={enterHandler} className="sidebar__input" type="text" defaultValue={input} placeholder="Another location" />
          <button onClick={cityHandler} className="sidebar__searchbtn"><i className='bx bx-search'></i></button>
        </div>

        <ul className="sidebar__list">
          {
            citys.map((item, key) => {
              return (
                <li key={key + 5} className="sidebar__item"><button onClick={() => setCity(item)} className="sidebar__city">{item}</button></li>
              )
            })
          }
        </ul>
      </section>
    }
    else {
      return
    }
  }

  //results
  return (
    data.data.main && (
      <section className="sidebar">
        <div className="sidebar__inputbox">
          <input onChange={(e) => setInput(e.target.value)} onKeyPress={enterHandler} className="sidebar__input" type="text" defaultValue={input} placeholder="Another location" />
          <button onClick={cityHandler} className="sidebar__searchbtn"><i className='bx bx-search'></i></button>
        </div>

        <ul className="sidebar__list">
          {
            citys.map((item, key) => {
              return (
                <li key={key + 5} className="sidebar__item"><button onClick={() => setCity(item)} className="sidebar__city">{item}</button></li>
              )
            })
          }
        </ul>

        <div className="sidebar__box">
          <h2 className="sidebar__weather">Weather Details</h2>
          <div className="sidebar__infobox">
            <p className="sidebar__name">Cloudy</p>
            <p className="sidebar__info">12%</p>
          </div>
          <div className="sidebar__infobox">
            <p className="sidebar__name">Humidity</p>
            <p className="sidebar__info">{data.data.main.humidity}%</p>
          </div>
          <div className="sidebar__infobox">
            <p className="sidebar__name">Wind</p>
            <p className="sidebar__info">{data.data.wind.speed.toFixed()}km/h</p>
          </div>
          <div className="sidebar__infobox">
            <p className="sidebar__name">Rain</p>
            <p className="sidebar__info">0mm</p>
          </div>
        </div>

      </section>
    ))
}