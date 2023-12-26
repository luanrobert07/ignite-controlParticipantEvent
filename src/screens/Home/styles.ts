import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    eventName: {
        marginTop: 60,
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black'
    },
    eventDate: {
        fontSize: 18,
        color: 'black'
    },
    imput: {
        flex: 1,
        width: '90%',
        height: 56,
        backgroundColor: '#6b6b6b',
        borderRadius: 10,
        marginBottom: 15,
        fontSize: 17,
        padding: 10,
        marginRight:12,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '#31CF67',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    form:{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42,
    },
    empty:{
        color: "#FFF",
        fontSize: 14,
        textAlign: "center"
    }

})
