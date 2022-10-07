import React from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import {styles} from './styles'
import {InputTextProps} from '../../Types'

export function InputText({inputText, setText, handleAddTask}: InputTextProps){
    return (
        <View
            style={styles.input}>
            <TextInput
                value={inputText}
                onChangeText={text => setText(text)}
                style={styles.textInput}
                placeholder='Adicione uma nova tarefa'
                placeholderTextColor={'#808080'} />
            <TouchableOpacity
                style={styles.button}
                onPress={handleAddTask}>
                <Text style={styles.textButton}>+</Text>
            </TouchableOpacity>
        </View>
    )
}