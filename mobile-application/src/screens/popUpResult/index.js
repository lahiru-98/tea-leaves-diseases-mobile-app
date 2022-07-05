import { View, Text, TouchableOpacity, Alert, Modal, Pressable, Image } from 'react-native'
import styles from './styles';
import React, { useState, useEffect } from 'react'
import LottieView from 'lottie-react-native';
import LoangButton from '../../components/longButton';

export default function PopUpResults({ modalVisible, setModalVisible, prediction = "nothing", got_result  , setPredResult , setImageUri}) {

    //variables
    let animation = React.createRef();
    //states
    const [showAnim, setShowAnim] = useState(false)


    //Hooks
    useEffect(() => {
        if (modalVisible) {
            setShowAnim(true)
        }
    }, [modalVisible])

    useEffect(() => {
        if (showAnim) {
            animation.current.play() //play the animation when showAnim is true
        }
    }, [showAnim])


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.mainView}>

                        {!got_result ?
                            <View>
                                <Text style={styles.predText}>Predicting....</Text>
                                <LottieView
                                    ref={animation}
                                    loop={true}
                                    style={styles.animationStye}
                                    source={require('../../../assets/loading_large_anim.json')}
                                />
                            </View>
                            :
                            <View style={styles.resultView}>
                                <Text style={styles.predText}>Result</Text>
                                <Text style={styles.resultText}>Leaf Status : - {prediction}</Text>
                                <Image
                                    style={styles.theImage}
                                    source={{
                                        uri: 'https://i.pinimg.com/originals/7b/dd/1b/7bdd1bc7db7fd48025d4e39a0e2f0fd8.jpg',
                                    }}
                                />

                                <TouchableOpacity
                                    style={styles.okbtn}
                                    onPress={() => {
                                        setModalVisible(false)
                                        setPredResult("")
                                        setImageUri("")
                                    }}>
                                    <LoangButton btnText={'OK'} />
                                </TouchableOpacity>
                            </View>
                        }

                    </View>

                </View>

            </View>
        </Modal>
    )
}