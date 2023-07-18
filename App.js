import { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import LoadingIndicator from './src/components/LoadingIndicator'

export default function App() {
  const [weather, setWeather] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <NavigationContainer>
      <Tabs />
      <LoadingIndicator
        loading={loading}
        setLoading={setLoading}
        weather={weather}
        setWeather={setWeather}
      />
    </NavigationContainer>
  )
}
