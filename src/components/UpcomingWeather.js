import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'red'
  }
})
const DATA = [
  {
    dt: 'wow everything fine',
    min: 939,
    max: 93845539343
  },
  {
    dt: 'not mad',
    min: 945599,
    max: 93883233
  },
  {
    dt: 'uwu',
    min: 90932,
    max: 938483282383
  }
]
function Item({ item }) {
  return (
    <View>
      <Feather name={'sun'} size={50} color={'black'} />
      <Text> {item.dt} </Text>
      <Text> {item.min} </Text>
      <Text> {item.max} </Text>
    </View>
  )
}

export default function UpcomingWeather() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> upcoming weather </Text>
      <FlatList
        data={DATA}
        // adds key to each item in flatlist
        keyExtractor={(item) => item.min + item.max}
        renderItem={({ item }) => <Item item={item} />}
        // renders divider between each item in flatlist
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: 'red', height: 2 }} />
        )}
      />
    </SafeAreaView>
  )
}
