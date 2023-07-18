import { useState, useEffect } from 'react'
import * as Location from 'expo-location'
import * as moment from 'moment'

export default function useGetWeather() {
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)
  const [weather, setWeather] = useState([])
  const [latitude, setLatitude] = useState([])
  const [longitude, setLongitude] = useState([])

  const { WEATHER_API_KEY } = process.env

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=yes`
      )
      const data = await res.json()
      setWeather(data)
      setLoading(false)
    } catch (err) {
      setErrorMsg('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status === 'granted' && !weather.current) {
          let location = await Location.getCurrentPositionAsync({})
          setLatitude(location.coords.latitude)
          setLongitude(location.coords.longitude)
        }
      } catch (err) {
        setErrorMsg('Location permissions denied')
        return
      } finally {
        await fetchWeatherData()
      }
    })()
  }, [latitude, longitude])
  return [loading, errorMsg, weather]
}
