import { memo } from 'react'
// import { useIsFocused, useNavigation, useRoute } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'
import CurrentWeather from '../screens/CurrentWeather'
import UpcomingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import moment from 'moment'

const { Navigator, Screen } = createBottomTabNavigator()

export default memo(function Tabs({ weather }) {
  const { name, region: state, localtime } = weather.location
  const {
    temp_f,
    temp_c,
    feelslike_f,
    feelslike_c,
    condition: { text: conditionDesc },
    gust_mph,
    gust_kph,
    wind_dir,
    precip_in,
    precip_mm,
    humidity,
    air_quality
  } = weather.current

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
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'royalblue' : 'white'}
            />
          )
        }}
      >
        {/* current weather (not as detailed) */}
        {() => (
          <CurrentWeather
            city={name}
            timeDay={moment(localtime).format('MMM DD YYYY LTS')}
            temp={`${temp_f}˚` || temp_c}
            feelsLike={`${feelslike_f}˚` || feelslike_c}
            conditionDesc={conditionDesc}
            gust={gust_mph || gust_kph}
            wind_dir={wind_dir}
            precip={precip_in || precip_mm}
            humidity={humidity}
            air_quality={air_quality}
          />
        )}
      </Screen>
      <Screen
        name={'Upcoming'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'royalblue' : 'white'}
            />
          )
        }}
      >
        {/* upcoming forecast for area */}
        {({ navigation }) => (
          console.log(navigation),
          (
            // navigation.addListener('focus', () => {
            // navigation.addListener((e) => (
            // return (
            <UpcomingWeather
              isFocused={navigation.isFocused((bool) => bool)}
              city={name}
            />
          )
          // )
          // })
          // ))
        )}
      </Screen>
      <Screen
        name={'City'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'royalblue' : 'white'}
            />
          )
        }}
      >
        {/* more detailed info for location */}
        {() => (
          <City
            weather={weather}
            city={name}
            timeDay={moment(localtime).format('MMM DD YYYY LTS')}
          />
        )}
      </Screen>
    </Navigator>
  )
})
