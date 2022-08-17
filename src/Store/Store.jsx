import create from "zustand";
import axios from "axios";

const weatherToken = '0400b796d3acd1ee1c6f3301a977c52f'
const weatherURL = 'https://api.openweathermap.org/data/2.5/'

const Store = create((set) => ({
  data: [],
  loading: false,
  error: true,

  // function weather
  weather: async (city) => {
    try {
      const responce = axios.get(`${weatherURL}weather?q=${city}&units=metric&APPID=${weatherToken}`)
      const icon = axios.get(`${weatherURL}weather?q=${city}&units=metric&APPID=${weatherToken}`).then((data) => data.data.weather[0].icon)
      set({ loading: false })
      set({ data: await responce })
      set({ error: true })
      set({ loading: true })
      set({ clean: await icon})
    } catch (err) {
      set({error: false})
      return
    }
  },

}))

export default Store