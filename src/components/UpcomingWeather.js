import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
const data = [
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
const Item = (props) => {
  const { dt, min, max } = props
  return (
    <View>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text> {dt} </Text>
      <Text>{min}</Text>
      <Text>{max}</Text>
    </View>
  )
}

export default function UpcomingWeather() {
  const renderedItem = ({ item }) => (
    <Item
      condition={item.weather[0].main}
      desc={item.weather[0].description}
    ></Item>
  )
  return (
    <SafeAreaView style={styles.container}>
      <Text> upcoming weather </Text>
      <FlatList data={data} renderItem={renderedItem} />
    </SafeAreaView>
  )
}
