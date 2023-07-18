import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import LoadingIndicator from './src/components/LoadingIndicator'
import useGetWeather from './src/hooks/useGetWeather'

export default function App() {
  const [loading, errorMsg, weather] = useGetWeather()
  console.log('hook responses', loading, errorMsg, weather)

  return (
    <NavigationContainer>
      {weather && weather.current ? (
        <Tabs weather={weather} />
      ) : (
        <LoadingIndicator />
      )}
    </NavigationContainer>
  )
}
