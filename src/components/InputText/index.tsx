import { TextInput } from "react-native";
import { styles } from "./styles";

export function InputText() {
    return (
        <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor={'#808080'}
        />
    )
}