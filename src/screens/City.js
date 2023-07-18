import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import IconsText from '../components/IconsText'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  locationInfo: {
    justifyConent: 'center',
    alignSelf: 'center'
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  wrappers: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  forecastWrapper: {
    justifyContent: 'space-evenly'
  },
  populationWrapper: {
    justifyContent: 'center'
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
    fontWeight: 'bold'
  },
  riseSetWrapper: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20
  }
})

export default function City() {
  const {
    text,
    locationInfo,
    cityName,
    countryName,
    wrappers,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    forecastWrapper
  } = styles
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageLayout}
        source={require('../../assets/cityScape.jpg')}
      >
        <Text style={[text, cityName, locationInfo]}>London</Text>
        <Text style={[text, countryName, locationInfo]}>UK</Text>
        <IconsText
          iconSize={35}
          iconColor={'red'}
          iconName={'user'}
          iconText={'1.2Million'}
          wrapperArr={[wrappers, populationWrapper]}
          textStyleArr={[text, populationText]}
        />
        <View style={[wrappers, forecastWrapper]}>
          <IconsText
            iconSize={30}
            iconColor={'white'}
            iconName={'sunrise'}
            iconText={'10:46:58AM'}
            wrapperArr={[wrappers, riseSetWrapper]}
            textStyleArr={[text, riseSetText]}
          />
          <IconsText
            iconSize={30}
            iconColor={'white'}
            iconName={'sunset'}
            iconText={'17:28:15PM'}
            wrapperArr={[wrappers, riseSetWrapper]}
            textStyleArr={[text, riseSetText]}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}
