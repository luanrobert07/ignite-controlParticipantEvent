import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1f1e25',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
        },
    name: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
        marginLeft: 16,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: '##e23c44',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
})