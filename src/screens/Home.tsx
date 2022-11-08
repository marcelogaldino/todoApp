import { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text, FlatList, Alert, Keyboard } from "react-native";
import { Header } from "../components/Header";
import { TaskCard } from "../components/TaskCard";
import { styles } from "./styles";

import Icon from "@expo/vector-icons/Feather"

interface ITodo {
    description: string
    done: boolean
}

export function Home() {
    const [tasks, setTasks] = useState<ITodo[]>([])
    const [taskDescription, setTaskDescription] = useState('')
    const [counterTaskCreated, setCounterTaskCreated] = useState(0)
    const [counterTaskDone, setCounterTaskDone] = useState(0)

    function handleTaskDone(item: ITodo) {
        setTasks(tasks.map(task => {
            if (task.description === item.description) {
                task.done = !task.done
            }
            return task
        }))


    }

    function handleTaskAdd() {
        setTasks(prevState => ([...prevState, { description: taskDescription, done: false }]))
        setTaskDescription('')
        Keyboard.dismiss()
    }

    function handleTaskRemove(taskName: string) {
        Alert.alert("Remover", `Deseja remover esta tarefa ?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task.description !== taskName))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    useEffect(() => {
        setCounterTaskCreated(tasks.length)
        setCounterTaskDone(tasks.filter(task => task.done === true).length)
    }, [tasks])

    return (
        <>
            <Header />
            <View style={styles.body}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#808080'}
                        onChangeText={setTaskDescription}
                        value={taskDescription}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleTaskAdd}
                    >
                        <Icon
                            name="plus-circle"
                            size={16}
                            style={styles.addIcon}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.textInfo}>
                        <Text style={styles.created}>Criadas</Text>
                        <Text style={styles.counter}>{counterTaskCreated}</Text>
                    </View>

                    <View style={styles.textInfo}>
                        <Text style={styles.done}>Concluídas</Text>
                        <Text style={styles.counter}>{counterTaskDone}</Text>
                    </View>

                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item.description}
                    renderItem={({ item }) => (
                        <TaskCard
                            key={item.description}
                            name={item.description}
                            onRemove={() => handleTaskRemove(item.description)}
                            onPressCheck={() => handleTaskDone(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.noTasks}>
                            <Icon
                                name="clipboard"
                                size={56}
                                color="#333333"
                            />
                            <Text style={styles.descriptionBold}>
                                Você ainda não tem tarefas cadastradas
                            </Text>

                            <Text style={styles.descriptionNormal}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>
                        </View>
                    )}
                />
            </View>
        </>
    )
}