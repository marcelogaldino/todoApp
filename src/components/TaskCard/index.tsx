import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Icon from "@expo/vector-icons/Feather"
import { useState } from "react";

type Props = {
    name: string,
    onRemove: () => void
}

export function TaskCard({ name, onRemove }: Props) {
    const [isTaskChecked, setTaskChecked] = useState(false)

    function handleTaskCheck() {
        setTaskChecked(!isTaskChecked)
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleTaskCheck}>
                {isTaskChecked ? (
                    <View style={styles.circle}>
                        <Icon
                            name="check"
                            size={14}
                            color='#F2F2F2'
                        />
                    </View>
                ) : (
                    <Icon
                        name="circle"
                        size={24}
                        color="#4EA8DE"
                    />
                )}
            </TouchableOpacity>

            {isTaskChecked ? (
                <Text style={styles.textChecked}>
                    {name}
                </Text>

            ) : (
                <Text style={styles.text}>
                    {name}
                </Text>
            )}

            <TouchableOpacity onPress={onRemove}>
                <Icon
                    name="trash-2"
                    size={18}
                    color='#808080'
                />
            </TouchableOpacity>
        </View>
    )
}