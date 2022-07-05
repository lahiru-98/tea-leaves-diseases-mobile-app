import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 10,
        backgroundColor: 'lightgreen',
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    camera:{
        height: 360,
        width : 300,
        margin : 10,
       
    },
    smallCamera:{
        height: 60,
        width : 60,
        margin : 10,
    },

    recordButton :{
        borderWidth : 8,
        borderColor :'white',
        backgroundColor :'green',
        borderRadius: 100,
        height: 60,
        width : 60,
        alignSelf:'center',
        marginBottom : 10
    },

    emotionText :{
        fontFamily: 'white',
        fontSize : 25
    },
    theImage :{
        height: 50,
        width : 40,
        marginHorizontal : 30,
       marginBottom: 6
    },
    topContainer :{
        flexDirection:'row',
        alignItems :'center',
        margin : 5
    },
    animationStye :{
        height: 150,
        width : 200,
       
    }
});

export default styles;