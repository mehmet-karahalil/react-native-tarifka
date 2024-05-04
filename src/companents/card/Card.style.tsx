import { StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardText: {
        color: '#000',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    cardImage: {
        width: '100%',
        height: 200,
        resizeMode: 'contain', 
        borderRadius: 10, 
        marginBottom: 10, 
    },
});