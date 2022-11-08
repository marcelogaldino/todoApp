import { View, TouchableOpacity, Text, FlatList } from "react-native";
import { Header } from "../components/Header";
import { InputText } from "../components/InputText";
import { styles } from "./styles";
import { TaskCard } from "../components/TaskCard";

import Icon from "@expo/vector-icons/Feather"
import { useState } from "react";

export function Home() {
    const [tasks, setTasks] = useState<string[]>([])

    return (
        <>
            <Header />
            <View style={styles.body}>
                <View style={styles.form}>
                    <InputText />
                    <TouchableOpacity style={styles.button}>
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