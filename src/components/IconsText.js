import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const styles = StyleSheet.create({
  container: {}
})

export default function IconsText({
  wrapperArr,
  iconName,
  iconColor,
  iconSize = 30,
  textStyleArr,
  iconText = null
}) {
  return (
    <View style={wrapperArr}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={textStyleArr}> {iconText} </Text>
    </View>
  )
}
