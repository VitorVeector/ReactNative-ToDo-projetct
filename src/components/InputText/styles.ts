import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    input: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: 327,
        marginTop: -32,
        height: 53
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
    }
})