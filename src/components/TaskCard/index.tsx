import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

import Icon from "@expo/vector-icons/Feather"

export function TaskCard() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon
                    name="circle"
                    size={24}
                    color="#4EA8DE"
                />
            </TouchableOpacity>

            <Text style={styles.text}>
                Integer urna interdum massa libero
                auctor neque turpis turpis semper.
                auctor neque turpis turpis semperasd.
            </Text>

            <TouchableOpacity>
                <Icon
                    name="trash-2"
                    size={18}
                    color='#808080'
                />
            </TouchableOpacity>
        </View>
    )
}