import { useState, useEffect, useMemo } from 'react'
import * as Location from 'expo-location'

export default function useGetWeather() {
  // returned
  const [loading, setLoading] = useState(true)
  const [errorMsg, setErrorMsg] = useState(null)
  const [weather, setWeather] = useState([])
  // local state(s)
  const [latitude, setLatitude] = useState([])
  const [longitude, setLongitude] = useState([])
  const [location, setLocation] = useState()

  const { WEATHER_API_KEY } = process.env

  const fetchWeatherData = useMemo(async () => {
    if (!location) {
      console.log('retrieving location')
      return
    }
    try {
      const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${latitude},${longitude}&aqi=yes`
      )
      const data = await res.json()
      setWeather(data)
    } catch (err) {
      setErrorMsg('Could not fetch weather')
    } finally {
      setLoading(false)
    }
  }, [location])

  useEffect(() => {
    ;(async () => {
      try {
        console.log('location interval')
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
          setErrorMsg(`Location permission denied ${status}`)
          return
        }
        let location = await Location.getCurrentPositionAsync({})
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude)
        setLocation(location)
      } catch (err) {
        setErrorMsg('Location permissions denied')
        return
      } finally {
        await fetchWeatherData
      }
    })()
  }, [fetchWeatherData])
  return [loading, errorMsg, weather, location]
}
