import { View, Text, TouchableOpacity, Alert, Modal, Pressable, Image } from 'react-native'
import styles from './styles';
import { Camera } from 'expo-camera';
import React, { useState, useEffect } from 'react'

export default function PopCameraModel({ modalVisible, setModalVisible, hasPermission, setImageUri }) {
    //states
    const [cameraRef, setCameraRef] = useState(null)
    const [isCameraReady, setisCameraReady] = useState(false)

    //functions
    const captureAndHide = async () => {
        if (cameraRef) {
            try {
                const options = { quality: 0.5, base64: true, doNotSave: true }
                const captureImagePromise = cameraRef.takePictureAsync(options)
                if (captureImagePromise) {
                    const data = await captureImagePromise;
                    setImageUri(data.uri)
                }
            } catch (error) {
                console.log(error)
            }
        }
        setModalVisible(!modalVisible) //closing the pop-up model
    }

    if (hasPermission === null) {
        console.log('Camera permission null')
        return <View />;
    }
    if (hasPermission === false) {
        console.log('Camera permission false')
        return <Text>No access to camera</Text>;
    }


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

                    <Camera style={styles.camera}
                        type={Camera.Constants.Type.back}
                        ratio={'16:9'}
                        ref={ref => setCameraRef(ref)}
                        onCameraReady={() => setisCameraReady(true)}
                    >
                    </Camera>


                    <TouchableOpacity
                        style={styles.recordButton}
                        onPress={captureAndHide}
                    />

                </View>

            </View>
        </Modal>
    )
}