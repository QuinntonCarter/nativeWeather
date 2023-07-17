import { View, StyleSheet } from 'react-native'
import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default function App() {
  return (
    <View style={styles.container}>
      {/* <UpcomingWeather /> */}
      <CurrentWeather />
      {/* <City /> */}
    </View>
  )
}
