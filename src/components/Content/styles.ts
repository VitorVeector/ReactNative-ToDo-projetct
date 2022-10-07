import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        paddingHorizontal: 24,
        alignItems: "center"
    },
    content: {
        marginTop: 32,
        width: 327,
    },
    infoTask: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingBottom: 20,
    },
    createdTask: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    concludedTask: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    tasks: {

    },
    listTask: {
        height: 208,
        borderTopColor: '#333333',
        borderTopWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    }
})