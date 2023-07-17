import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: 'white',
    // use status bar current height or 0
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: 'royalblue'
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

export default function UpcomingWeather() {
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <Text> upcoming weather </Text>
      {/* switch to location based image..?(if possible) */}
      <ImageBackground
        source={require('../../assets/Thunderincity.jpeg')}
        style={image}
      >
        <FlatList
          data={DATA}
          // adds key to each item in flatlist
          keyExtractor={(item) => item.min + item.max}
          renderItem={({ item }) => <ListItem item={item} />}
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
