import React, { useEffect, useState } from 'react'
import Variable from '../Variable/Variable'
import './temperatures.css'

function Temperatures({name, iniCelsius}) {

  const [celsius, setCelsius] = useState(iniCelsius || 25)
  const [fahrenheit, setFahrenheit] = useState(celsiusToFahrenheit(iniCelsius || 25))
  const [kelvin, setKelvin] = useState(celsiusToKelvin(iniCelsius || 25))

  // Conversion functions
  function celsiusToKelvin(celsius) {
    return celsius + 273.15;
  }

  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }

  function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }

  function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

  // Update fahrenheit and kelvin when celsius changes
  useEffect(() => {
    setFahrenheit(celsiusToFahrenheit(celsius))
    setKelvin(celsiusToKelvin(celsius))
  }, [celsius])

  // Update celsius and kelvin when fahrenheit changes
  useEffect(() => {
    setCelsius(fahrenheitToCelsius(fahrenheit))
    setKelvin(celsiusToKelvin(fahrenheitToCelsius(fahrenheit)))
  }, [fahrenheit])

  // Update celsius and fahrenheit when kelvin changes
  useEffect(() => {
    setCelsius(kelvinToCelsius(kelvin))
    setFahrenheit(celsiusToFahrenheit(kelvinToCelsius(kelvin)))
  }, [kelvin])

  return (
    <div className="temperatures-container">
      <h3 className="temperatures-title">{name || "Temperatures"}</h3>

      <h3 className='temperatures-display'> 
        <span className="badge bg-primary">{celsius.toFixed(2)} &deg;C</span> 
        <span className="badge bg-primary">{fahrenheit.toFixed(2)} &deg;F</span> 
        <span className="badge bg-primary">{kelvin.toFixed(2)} &deg;K</span>
      </h3>

      <div className="temperatures-variables">
        <Variable name={'Celsius'} value={celsius} setValue={setCelsius} />
        <Variable name={'Fahrenheit'} value={fahrenheit} setValue={setFahrenheit} />
        <Variable name={'Kelvin'} value={kelvin} setValue={setKelvin} />
      </div>
    </div>
  )
}

export default Temperatures;
