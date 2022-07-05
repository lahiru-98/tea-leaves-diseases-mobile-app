import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'


export default function MainSquareButton({ text, image }) {

    return (
        <View style={styles.container}>

            <Image
                style={styles.mainImage}
                source={image}
            />
            <Text style={styles.textStyle}>{text || 'click'}</Text>
        </View>
    )
}