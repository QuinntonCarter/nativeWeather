import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import LoadingIndicator from './src/components/LoadingIndicator'
import useGetWeather from './src/hooks/useGetWeather'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justfiyContent: 'center',
    flex: 1
  }
})

export default function App() {
  // useCallback to cache api response? look @ tyler's code in repcap.com
  const [loading, errorMsg, weather] = useGetWeather()
  console.log('weathr', weather)
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
