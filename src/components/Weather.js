import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { WeatherContainer, City, Temp } from './WeatherStyles'


// -------api------
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Majalengka&appid=1d841966e80ba14340f8ced7bbd59488&units=imperial'
// ------



// ------------code-----------------

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
   axios.get(url)
    .then((response) => {
      setData(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(data)


  if (!data) return null;



  return (
    <WeatherContainer>
        <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
        <City>Majalengka, West Java</City>
    </WeatherContainer>
  )
}

export default Weather