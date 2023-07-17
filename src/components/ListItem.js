import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles = StyleSheet.create({
  listItem: {
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
  }
})

export default function ListItem({ item }) {
  const { date, temp, listItem } = styles
  return (
    <View style={listItem}>
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={date}> {item.dt} </Text>
      <Text style={temp}> {item.min} </Text>
      <Text style={temp}> {item.max} </Text>
    </View>
  )
}
