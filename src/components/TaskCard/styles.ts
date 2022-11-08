import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingRight: 8,
        paddingLeft: 12,
        marginBottom: 8,
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        color: '#F2F2F2',
        maxWidth: '80%',
    },
    textChecked: {
        color: '#808080',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
        fontSize: 14,
        fontWeight: '400',
        maxWidth: '80%',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 50,
        backgroundColor: '#5E60CE',
        alignItems: 'center',
        justifyContent: 'center',
    }
})