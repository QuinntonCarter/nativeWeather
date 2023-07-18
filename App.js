import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import LoadingIndicator from './src/components/LoadingIndicator'
import useGetWeather from './src/hooks/useGetWeather'

export default function App() {
  // useCallback to cache api response? look @ tyler's code in repcap.com
  const [loading, errorMsg, weather] = useGetWeather()

  return (
    <NavigationContainer>
      {!loading ? (
        <Tabs weather={weather} />
      ) : (
        <LoadingIndicator loading={loading} />
      )}
    </NavigationContainer>
  )
}
