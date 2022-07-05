import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container : {
        height:120,
        width : 110,
        backgroundColor: 'lightgreen',
        marginTop:1,
        flexDirection :'column',
        alignItems :'center',
        justifyContent:'center',
        borderRadius : 10,
        marginHorizontal : 15
        
    },
    mainImage :{
        height : 50,
        width : 50
    },
    textStyle :{
        fontSize : 15,
        color :'black',
        fontWeight :'bold'
    }

})

export default styles