import { ActivityIndicator, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justfiyContent: 'center',
    flex: 1
  }
})

export default function LoadingIndicator() {
  console.log('loading component reload')
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'darkblue'} />
    </View>
  )
}
