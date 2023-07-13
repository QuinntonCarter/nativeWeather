import { SafeAreaView, StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default function UpcomingWeather() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> upcoming weather </Text>
    </SafeAreaView>
  )
}
