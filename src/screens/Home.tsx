import { View, TouchableOpacity } from "react-native";
import Icon from "@expo/vector-icons/Feather"
import { Header } from "../components/Header";
import { InputText } from "../components/InputText";
import { styles } from "./styles";

export function Home() {
    return (
        <>
            <Header />
            <View style={styles.body}>
                <View style={styles.form}>
                    <InputText />
                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Icon name="plus-circle" size={16} style={styles.addIcon} />
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}