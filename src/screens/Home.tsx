import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, FlatList, Alert } from "react-native";
import { Header } from "../components/Header";
import { TaskCard } from "../components/TaskCard";
import { styles } from "./styles";

import Icon from "@expo/vector-icons/Feather"

export function Home() {
    const [tasks, setTasks] = useState<string[]>([])
    const [taskDescription, setTaskDescription] = useState('')

    function handleTaskAdd() {
        setTasks(prevState => ([...prevState, taskDescription]))
        setTaskDescription('')
    }

    function handleTaskRemove(taskName: string) {
        Alert.alert("Remover", `Deseja remover esta tarefa ?`, [
            {
                text: 'Sim',
                onPress: () => setTasks(prevState => prevState.filter(task => task !== taskName))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

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
                        <Text style={styles.counter}>0</Text>
                    </View>

                    <View style={styles.textInfo}>
                        <Text style={styles.done}>Concluídas</Text>
                        <Text style={styles.counter}>0</Text>
                    </View>

                </View>

                <FlatList
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <TaskCard
                            key={item}
                            name={item}
                            onRemove={() => handleTaskRemove(item)}
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