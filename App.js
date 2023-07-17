import { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import LoadingIndicator from './src/components/LoadingIndicator'

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <LoadingIndicator /> */}
    </NavigationContainer>
  )
}
