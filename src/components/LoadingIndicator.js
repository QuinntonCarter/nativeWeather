import { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import * as Location from 'expo-location'
import { WEATHER_API_KEY } from '@env'

const styles = StyleSheet.create({
  container: {
    justfiyContent: 'center',
    flex: 1
  }
})

export default function LoadingIndicator({
  loading,
  setLoading,
  weather,
  setWeather
}) {
  const [errorMsg, setErrorMsg] = useState(null)
  const [latitude, setLatitude] = useState([])
  const [longitude, setLongitude] = useState([])

  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`
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
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Location permissions denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      location && console.log('location information', location)
      setLatitude(location.coords.latitude)
      setLongitude(location.coords.longitude)
      await fetchWeatherData()
    })()
  }, [longitude, latitude])
  weather && console.log('weather', weather)
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'darkblue'} />
      </View>
    )
  }
}
