import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import MainSquareButton from '../../components/mainSqButton'
import PopCameraModel from '../popUpCamera'
import { Camera } from 'expo-camera';
import * as DocumentPicker from 'expo-document-picker';
import PopUpResults from '../popUpResult'

//global constants 
const BACKGROUND_IMAGE = require(`../../../assets/imgs/background_im.jpg`)
const MODEL_API_URL = "https://us-central1-tea-leaf-355220.cloudfunctions.net/predict_disease2";

export default function MainScreen() {

    //States
    const [modalVisible, setModalVisible] = useState(false);
    const [resultModalVisible, setResultModalVisible] = useState(false)
    const [hasPermission, setHasPermission] = useState(null);
    const [imageUri, setImageUri] = useState("")
   

    const [predResult, setPredResult] = useState('')
    const [isGotResult, setIsGotResult] = useState(false)

    //Hooks
    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

    }, []);

    useEffect(() => {
        console.log("Prediction Result Received - ", predResult)
    }, [predResult])

    useEffect(() => {
        if (imageUri != "") {
            console.log("Image Stored in  ", imageUri)
            //Do the prediction
            getPredication_test(imageUri)
        }

    }, [imageUri])


    //Functions
    const getPredication_test = async (path) => {
        setResultModalVisible(true)
        var data = new FormData();
        data.append('file', {
            uri: path, // your file path string
            name: 'my_photo.jpg',
            type: 'image/jpg'
        })

        return fetch(MODEL_API_URL, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            },
            method: 'POST',
            body: data
        }).then(async (response) => {
            let result_data = await response.text()
            console.log("|||||||||||||||", result_data)
            const result_object = JSON.parse(result_data)
            setPredResult(result_object)
            setIsGotResult(true)
        })
            .catch((error) => {
                console.error(error)
                return 'Error'

            })

    };

    //choose a file/image from the storage
    const pickDocument = async () => {
        let result = await DocumentPicker.getDocumentAsync({})
        if (result != null) {
            //const r = await fetch(result.uri);
            //const b = await r.blob();
            getPredication_test(result.uri)
            
        }
    }


    return (
        <ImageBackground source={BACKGROUND_IMAGE}
            blurRadius={15}
            resizeMode="cover"
            style={styles.backgroundImageStyle}>

            <PopCameraModel modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                hasPermission={hasPermission}
                setImageUri={setImageUri}

            />

            <PopUpResults
                modalVisible={resultModalVisible}
                setModalVisible={setResultModalVisible}
                got_result={isGotResult}
                prediction={predResult.class}
                setPredResult={setPredResult}
                setImageUri = {setImageUri}
            />


            <View>
                <Text style={styles.textStyle}>Diseases in Tea leaves</Text>


                <View style={styles.btnContainer}>
                    <TouchableOpacity onPress={() => pickDocument()}>
                        <MainSquareButton text={"Select Image"} image={require('../../../assets/icons/choose_file_icon.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setModalVisible(true)}>
                        <MainSquareButton text={"Capture"} image={require('../../../assets/icons/camera_icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>


        </ImageBackground>

    )
}