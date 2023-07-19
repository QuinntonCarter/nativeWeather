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
  const [loading, errorMsg, weather, location] = useGetWeather()
  // ** check if location area and weather location area match, if don't, return time with results in tab **
  // useCallback to cache api response? look @ tyler's code in repcap.com
  console.log('app loaded')
  if (weather && weather.current && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }

  return (
    <View style={styles.container}>
      <LoadingIndicator loading={loading} />
    </View>
  )
}
