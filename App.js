import CurrentWeather from './src/screens/CurrentWeather'
import UpcomingWeather from './src/screens/UpcomingWeather'
import City from './src/screens/City'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const { Navigator, Screen } = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name={'Current'} component={CurrentWeather} />
        <Screen name={'Upcoming'} component={UpcomingWeather} />
        <Screen name={'City'} component={City} />
      </Navigator>
    </NavigationContainer>
  )
}
