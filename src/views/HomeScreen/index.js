import React from "react";
import { View, Image, Text, SafeAreaView, StyleSheet } from "react-native";

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer} >
                <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png'}} />
            </View>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome back, User!</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        backgroundColor: "#63a4ff",
        height: 50,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingLeft: 12,
        paddingRight: 12
    },
    image: {
        width: 35,
        height: 35
    }, 
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 30
    }
});

export default HomeScreen;