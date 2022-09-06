import { add } from 'lodash'
import React, { useState } from 'react'
import {View, SafeAreaView, Text, StatusBar, StyleSheet, FlatList,Keyboard, Alert, TouchableWithoutFeedback } from "react-native"
import Addtodo from './components/Addtodo'
import Header from './components/Header'
import Todo from './components/Todo'
function App() {
  const [todo, setTodo] = useState([{
    list: "cooking",
    id:1
  },
  {
    list: "coding",
    id:2
    },
    {
      list: "go shopping",
      id:3
    }])
  
  const deleteTodo = (id) => {
    console.log("code just ran")
    setTodo((prevTodo) => {
       return prevTodo.filter(item => item.id !== id )
    })
  }
  const addTodo = (i) => {
    if (i.length > 3) {
     
   setTodo([{
    list: i,
     id:Math.random()
   }, ...todo]) 
    } else {
      Alert.alert("Todo", "Failed To Add new element",
        [{
          text: "ok",
          onPress: () => {
          console.log("completed")
          }
        },
        {
          text: "Cancel",
          onPress: () => {
          console.log("cancelled")
        }}])
   }

  }
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss() 
    }}>
    <SafeAreaView style={ styles.body}>
      {/* header component */}
      <Header />
      {/* form  */}
      <Addtodo addTodo={ addTodo } />
      {/* todos */}

      <FlatList
        keyExtractor={(todo) => todo.id}
        data={todo}
        renderItem={({ item }) => {
          
          return (
           
            <View style={ styles.list}>
              <Todo todo={item} deleteTodo={ deleteTodo } />
            </View>
          )
          
        }}
      
      />

      </SafeAreaView>
      </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  body: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    flex: 1
  },
  list: {
    flex: 1,
  }
})

export default App