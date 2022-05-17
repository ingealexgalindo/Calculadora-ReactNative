import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    back: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    containerCal: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    resultado: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
        marginBottom: 15
    },
    resultadoPeq: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right'
    },
    fila: {
        flexDirection: 'row',
        justifyContent: "center",
        marginBottom: 18
    },
});