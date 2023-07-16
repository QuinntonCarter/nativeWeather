import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    // use status bar current height or 0
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'white',
    fontSize: 20
  },
  date: {
    color: 'white',
    fontSize: 15
  },
  image: {
    flex: 1
  }
})
const DATA = [
  {
    dt: '2023-7-11',
    min: 939,
    max: 93845539343
  },
  {
    dt: '2023-7-12',
    min: 945599,
    max: 93883233
  },
  {
    dt: '2023-7-13',
    min: 90932,
    max: 938483282383
  }
]

function Empty() {
  return (
    <View>
      <Text> Empty! </Text>
    </View>
  )
}

function Item({ item }) {
  return (
    <View style={styles.item}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={styles.date}> {item.dt} </Text>
      <Text style={styles.temp}> {item.min} </Text>
      <Text style={styles.temp}> {item.max} </Text>
    </View>
  )
}

export default function UpcomingWeather() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> upcoming weather </Text>
      <ImageBackground
        source={require('../../assets/Thunderincity.jpeg')}
        style={styles.image}
      >
        <FlatList
          data={DATA}
          // adds key to each item in flatlist
          keyExtractor={(item) => item.min + item.max}
          renderItem={({ item }) => <Item item={item} />}
          // renders divider between each item in flatlist
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: 'white', height: 2 }} />
          )}
          // Rendered when the list is empty (instead of conditional null)
          ListEmptyComponent={<Empty />}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}
