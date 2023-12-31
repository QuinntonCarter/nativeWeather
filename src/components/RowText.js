import { Text, View } from 'react-native'

export default function RowText({
  wrapper,
  textOneStyle,
  textOne,
  textTwoStyle,
  textTwo
}) {
  return (
    <View style={wrapper}>
      <Text style={textOneStyle}> {textOne} </Text>
      <Text style={textTwoStyle}> {textTwo} </Text>
    </View>
  )
}
