import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'

export default function LoangButton({btnText , btnwidth=200}) {
  return (
    <View style={{...styles.container , width:btnwidth }}>
      <Text style={styles.buttonText}>{btnText||"LoangButton"}</Text>
    </View>
  )
}