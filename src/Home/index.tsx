import { styles } from "./styles"
import {View } from "react-native"
import { ToDoLogo } from "../Icons/ToDoLogo"
import { Content } from '../components/Content'

export const Home = () => {
    return (
        <>
            <View
                style={styles.container}>
                    <ToDoLogo/>
            </View>
            <Content/>
        </>
    )
}