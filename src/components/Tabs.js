import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'

const { Navigator, Screen } = createBottomTabNavigator()

export default function Tabs() {
  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: 'royalblue',
        tabBarInactiveTintColor: 'gray',
        // bottom nav bar
        tabBarStyle: {
          backgroundColor: 'black'
        },
        // top nav header/title (maybe could edit color based on device time/day or night mode)
        headerStyle: {
          backgroundColor: 'black'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'royalblue'
        }
      }}
    >
      <Screen
        name={'Current'}
        component={CurrentWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'royalblue' : 'white'}
            />
          )
        }}
      />
      <Screen
        name={'Upcoming'}
        component={UpcomingWeather}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'royalblue' : 'white'}
            />
          )
        }}
      />
      <Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'royalblue' : 'white'}
            />
          )
        }}
      />
    </Navigator>
  )
}
