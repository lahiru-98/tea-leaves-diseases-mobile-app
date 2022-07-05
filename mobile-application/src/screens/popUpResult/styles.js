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
        backgroundColor: 'white',
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

    mainView:{
        height: 360,
        width : 300,
        margin : 10,
       
    },

    animationStye :{
        height: 350,
        width : 350,
        alignSelf :'center'
       
    },
    predText :{
        color :'green',
        fontSize : 35,
        alignSelf :'center',
        fontWeight :'500'
    },

    resultView :{
        
        alignItems:'center',
     
    },
    
    resultText :{
        color :'black',
        fontSize : 25,
        alignSelf :'center',
        position :'relative',
    },
    okbtn :{
       marginTop : 10
        
    },
    theImage :{
        height : 150,
        width:150,
        marginBottom : 30,
        alignSelf:'center'
    }
});

export default styles;