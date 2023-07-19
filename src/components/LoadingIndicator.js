import { ActivityIndicator, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    justfiyContent: 'center',
    flex: 1
  }
})

export default function LoadingIndicator({ loading }) {
  // if (loading) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'darkblue'} />
    </View>
  )
  // }
}
