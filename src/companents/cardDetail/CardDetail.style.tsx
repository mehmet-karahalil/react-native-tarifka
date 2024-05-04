import { StyleSheet,Dimensions } from "react-native";  

const deviceSize =Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#fff',
    },
    image:{
        width:deviceSize.width,
        height:deviceSize.height/5,
        resizeMode: 'contain', 

    },
    scroll:{
        marginHorizontal:10,
        marginVertical:10,
    },

    title:{
        fontSize:22,
        fontWeight:'bold',
        color:'red',
        marginVertical:20,
        paddingHorizontal:10,
        textAlign:'center',
    },
    description:{
        fontSize:16,
        color:'#000',
        marginTop:10,
        textAlign:'left',
    },
    subTitle:{
        fontSize:20,
        fontWeight:'bold',
        color:'red',
        marginTop:10,
        textAlign:'left',
    },
    ingredient:{
        fontSize:16,
        color:'#000',
        marginTop:10,
        textAlign:'left',
    },
});