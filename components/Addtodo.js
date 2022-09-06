import React, { useState } from "react"

import { Text,  StyleSheet, TextInput, View, Button} from "react-native"

export default function Addtodo({ addTodo}) {
const [input, setInput] = useState("")
   
    const handleClick = () => {
        console.log(addTodo)
        console.log("this is comming from the input",addTodo(input))
        console.log("butonjust clicked")

    }
    return <View>
        <View style={styles.input}>
        <TextInput
            placeholder="enter Todos..."
          onChangeText={(val) => setInput(val)}
        />
        </View>
        <Button
            title="Add Todo"
            onPress={handleClick}
        />
    </View> 

}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#777",
        padding: 3,
        fontSize: 20,
        marginTop: 20,
        marginBottom:10,
        color:"black"
    }
})