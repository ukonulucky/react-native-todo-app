import React from "react"

import { Text, TouchableOpacity, StyleSheet, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';





export default function Todo({ todo , deleteTodo }) {

   
    return <TouchableOpacity onPress={() => {
        console.log("in the todo list")
       deleteTodo(todo.id)
    }}>
        <View style={ styles.todo}>
            <MaterialIcons name="delete" size={15} color="#333" />
            <Text >
          {todo.list}
        </Text>
        </View>
      
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    todo: {
        textAlign: "center",
        paddingVertical: 10,
        paddingHorizontal:10,
        borderWidth: 1,
        borderStyle:"dotted",
        borderRadius: 10,
        marginVertical: 20,
        flex:1,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems:"center"
   }
})