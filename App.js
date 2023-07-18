import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <LoadingIndicator /> */}
    </NavigationContainer>
  )
}
