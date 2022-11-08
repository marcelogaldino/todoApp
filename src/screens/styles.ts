import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: '#1A1A1A',
        padding: 24,
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: -52,
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        padding: 14,
        borderRadius: 6,
        borderColor: '#0D0D0D',
        borderWidth: 1,
        fontSize: 16,
        fontWeight: 'normal',
        lineHeight: 22,
        color: '#F2F2F2',
        height: 54,
        marginRight: 4,
    },
    button: {
        width: 52,
        height: 52,
        backgroundColor: '#1E6F9F',
        borderRadius: 6,
        marginLeft: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addIcon: {
        color: '#F2F2F2'
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 32,
        marginBottom: 20,
    },
    textInfo: {
        flexDirection: "row",
    },
    created: {
        fontSize: 14,
        fontWeight: "700",
        color: '#4EA8DE',
    },
    done: {
        fontSize: 14,
        fontWeight: "700",
        color: '#8284FA',
    },
    counter: {
        width: 30,
        height: 19,
        marginLeft: 8,
        paddingVertical: 2,
        paddingHorizontal: 8,
        backgroundColor: '#333333',
        borderRadius: 9,
        overflow: 'hidden',
        color: '#D9D9D9',
        fontSize: 12,
        fontWeight: "700",
    },
    noTasks: {
        width: '100%',
        height: 208,
        borderTopWidth: 1,
        borderTopColor: '#333333',
        // marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    descriptionBold: {
        color: '#808080',
        fontWeight: 'bold',
        fontSize: 14,
        marginTop: 16,
    },
    descriptionNormal: {
        color: '#808080',
        fontWeight: 'normal',
        fontSize: 14,
    }
})