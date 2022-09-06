import { View, SafeAreaView, Text, StatusBar, StyleSheet} from "react-native"


export default function Header(){
    return (
        <View style={styles.header }>
            <Text style={ styles.word}>Todo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "coral",
        paddingVertical: 10

    },
    word: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "bold",
        color:"white"
    }
})