import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import LoadingIndicator from './src/components/LoadingIndicator'
import useGetWeather from './src/hooks/useGetWeather'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justfiyContent: 'center',
    flex: 1
  }
})

export default function App() {
  // const [routeLocation, setRouteLocation] = useState(false)
  const [loading, errorMsg, weather, location] = useGetWeather()
  // ** check if location area and weather location area match, if don't, return time with results in tab **
  // const navigation = useNavigation((state) => state.name)
  // console.log('app loaded, useNavigation', navigation)
  if (weather && weather.current && !loading) {
    return (
      <NavigationContainer>
        <Tabs
          // routeLocation={routeLocation}
          // setRouteLocation={setRouteLocation}
          weather={weather}
        />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <LoadingIndicator loading={loading} />
    </View>
  )
}
