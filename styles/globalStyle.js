import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCFADC',
        alignItems: 'center',
        // justifyContent: 'center',
    },
    heading: {
        fontSize: 30,
        color: '#000000',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        padding: 20,
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        padding: 5,
        backgroundColor: 'none',
        borderRadius: 15,
        borderColor: '#188058',
        borderWidth: 3,
    },

    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
    },

});