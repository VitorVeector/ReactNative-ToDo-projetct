import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    input: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 327,
        marginTop: -32
    },
    textInput: {
        backgroundColor: '#262626',
        borderRadius: 6,
        flex: 1,
        marginRight: 4,
        fontSize: 16,
        paddingLeft: 16,
        color: '#F2F2F2',
        borderColor: '#0D0D0D',
        borderWidth: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        paddingHorizontal: 24,
        alignItems: "center"
    },
    button: {
        height: 52,
        width: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    }, 
    textButton: {
        color: '#F2F2F2',
        fontSize: 20
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