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

export default function LoadingIndicator() {
  const [loading, setLoading] = useState(true)
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)
  console.log(WEATHER_API_KEY)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Location permissions denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      return
    })()
  }, [])
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'darkblue'} />
      </View>
    )
  }
}
