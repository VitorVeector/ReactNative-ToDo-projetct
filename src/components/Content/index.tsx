import React, { useState } from 'react'
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Clipboard } from "../../Icons/Clipboard"
import { Task } from '../../components/Task'
import { TaskObj } from '../../Types'
import { InputText } from '../../components/InputText'

export const Content = () => {
    const [inputText, setInputText] = useState<string>('')
    const [tasks, setTasks] = useState<TaskObj[]>([])
    const [concludedTesk, setConcludedTask] = useState(0)

    function handleAddTask() {
        const task = {
            id: Math.random(),
            text: inputText,
            concluded: false,
        }

        if (inputText === '') {
            Alert.alert('Campo vazio')
        } else {
            setTasks([...tasks, task])
            setInputText('')
        }
    }

    function handleRemoveTask(id) {
        Alert.alert('Remover task', 'Você realmente deseja remover essa Task?', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Remover',
                onPress: () => {
                    const newTaks = tasks.filter(task => task.id !== id)
                    setTasks(newTaks)
                }
            }

        ])
    }

    function updateTask(id, concluded) {
        const index = tasks.findIndex(task => task.id === id)
        const newList = tasks
        newList[index].concluded = !concluded
        setTasks([...newList])

        const filteredTask = newList.filter(task => task.concluded === true)
        setConcludedTask(filteredTask.length)
    }


    return (
        <>
            <View
                style={styles.container}>
                <InputText setText={setInputText} inputText={inputText} handleAddTask={handleAddTask}/>
                <View style={styles.content}>
                    <View style={styles.infoTask}>
                        <View style={styles.createdTask}>
                            <Text
                                style={
                                    {
                                        color: '#4EA8DE',
                                        fontWeight: "700",
                                        marginRight: 8
                                    }
                                }>Criadas</Text>
                            <Text style={
                                {
                                    backgroundColor: '#333333',
                                    color: '#D9D9D9',
                                    fontWeight: "700",
                                    paddingHorizontal: 8,
                                    paddingVertical: 2,
                                    borderRadius: 999
                                }
                            }>{tasks.length}</Text>
                        </View>
                        <View style={styles.concludedTask}>
                            <Text
                                style={
                                    {
                                        color: '#8284FA',
                                        fontWeight: "700",
                                        marginRight: 8
                                    }
                                }>Concluídas</Text>
                            <Text style={
                                {
                                    backgroundColor: '#333333',
                                    color: '#D9D9D9',
                                    fontWeight: "700",
                                    paddingHorizontal: 8,
                                    paddingVertical: 2,
                                    borderRadius: 999
                                }
                            }>{concludedTesk}</Text>
                        </View>
                    </View>
                    <View style={styles.tasks}>
                        <FlatList
                            data={tasks}
                            renderItem={({ item }) => {
                                return (
                                    <Task text={item.text} onRemove={() => handleRemoveTask(item.id)} concluded={item.concluded} toggleConcluded={() => updateTask(item.id, item.concluded)} />
                                )
                            }}
                            ListEmptyComponent={() => (
                                <View
                                    style={styles.listTask}>
                                    <Clipboard />
                                    <Text style={{ fontWeight: '700', color: '#808080', marginTop: 16 }}>Você ainda não tem tarefas cadastradas</Text>
                                    <Text style={{ color: '#808080' }}>Crie tarefas e organize seus itens a fazer</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}