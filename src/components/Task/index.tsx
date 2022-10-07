import { View, Text, TouchableOpacity } from 'react-native'
import { TaskProps } from '../../Types'

import { Circle } from '../../Icons/Circle'
import { Trash } from '../../Icons/Trash'
import { styles } from './styles'
import { CheckedCircle } from '../../Icons/CheckedCircle'

export function Task({text, concluded, onRemove}: TaskProps){
    return (
        <View style={styles.component}>
            {
                concluded ? <CheckedCircle/> : <Circle/> 
            }
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity
                onPress={onRemove}>
                <Trash/>
            </TouchableOpacity>
        </View>
    )
}