import { View, Text, TouchableOpacity } from 'react-native'
import { TaskProps } from '../../Types'

import { Circle } from '../../Icons/Circle'
import { Trash } from '../../Icons/Trash'
import { styles } from './styles'
import { CheckedCircle } from '../../Icons/CheckedCircle'

export function Task({text, onRemove, concluded, toggleConcluded}: TaskProps){

    const concludedTask = concluded ? <CheckedCircle/> : <Circle/> 
    return (
        <View style={styles.component}>
            <TouchableOpacity
                onPress={toggleConcluded}>
                {concludedTask}
            </TouchableOpacity>
            <Text style={{
                color: concluded ? '#808080' : '#F2F2F2',
                maxWidth: 235,
                paddingVertical: 12,
                textDecorationLine: concluded ? 'line-through' : 'none'

            }}>{text}</Text>
            <TouchableOpacity
                onPress={onRemove}>
                <Trash/>
            </TouchableOpacity>
        </View>
    )
}