import React, { useState } from "react";
import { Button, TextInput, View, StyleSheet, SafeAreaView, FlatList, Text } from "react-native";

const TodoListScene = () => {

    const [todoListData, setTodoListData] = useState([]);
    const [todoText, setTodoText] = useState("");
    
    const handleChangeText = (text) => {
        setTodoText(text);
    };

    const handleButtonPress = () => {
        if(todoText.trim().length > 0) {
            setTodoListData((value) => value.concat({ text: todoText }));
            setTodoText("");
        }
    };

    const hadnledRenderListItem = ({ item }) => {
        return <Text>{item.text}</Text>
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.viewContainer}>
                <View>
                    <TextInput placeholder="Escribe tus datos" 
                            style={styles.textInput} 
                            placeholderTextColor="#c4c4c4"
                            value={todoText}
                            onChangeText={handleChangeText} />
                    <Button title="Enter"
                            onPress={handleButtonPress} />
                </View>
                <View>
                <FlatList data={ todoListData }
                        renderItem={hadnledRenderListItem}
                        keyExtractor={(item) => item.text} />
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffbfb'
    },
    viewContainer: {
        paddingTop: 16,
        paddingBottom: 16,
        paddingLeft: 12,
        paddingRight: 12
    },
    textInput: {
        backgroundColor: '#f5f5f5',
        color: '#212121',
        fontSize: 16,
        marginBottom: 16
    }
});

export default TodoListScene;