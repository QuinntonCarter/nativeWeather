import { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import * as Location from 'expo-location'

const styles = StyleSheet.create({
  container: {
    justfiyContent: 'center',
    flex: 1
  }
})

export default function LoadingIndicator() {
  const [location, setLocation] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Location permissions denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      setLocation(location)
      return console.log(location)
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
