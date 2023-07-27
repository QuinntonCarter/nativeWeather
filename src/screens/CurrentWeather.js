import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    color: 'black',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: 'black'
  },
  highLow: {
    fontSize: 20,
    color: 'black'
  },
  highLowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default function CurrentWeather({
  timeDay,
  city,
  temp,
  feelsLike,
  conditionDesc,
  gust,
  wind_dir,
  precip,
  humidity,
  air_quality
}) {
  const {
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
    feels,
    wrapper,
    container
  } = styles
  console.log('currentWeather', city)
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* customize returned images using custom hook maybe */}
        <Feather name="sun" size={100} color="black" />
        {/* style * */}
        <Text> {city} </Text>
        <Text style={styles.temp}> {conditionDesc} </Text>
        <Text style={styles.temp}> {temp} </Text>
        <Text style={styles.feels}> Feels like {feelsLike}</Text>
        {/* maybe return this info here from forecast apo call as well? or omit */}
        <RowText
          wrapper={highLowWrapper}
          textOne={'High: 50'}
          textOneStyle={highLow}
          textTwo={'Low: 40'}
          textTwoStyle={highLow}
        />
      </View>
      {/* <RowText
        wrapper={bodyWrapper}
        textOne={`It's sunny`}
        textOneStyle={description}
        textTwo={`It's perfect t-shirt weather`}
        textTwoStyle={message}
      /> */}
    </SafeAreaView>
  )
}
