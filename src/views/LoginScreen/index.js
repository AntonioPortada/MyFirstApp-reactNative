import React, {useState} from "react";
import { Button, Image, StyleSheet, TextInput, View, Alert } from "react-native";

const LoginScreen = ({ navigation }) => {

    const {user, setUser} = useState("");
    const {password, setPassword} = useState("");

    const handleUserTextChange = (text) => setUser(text);
    const handlePasswordTextChange = (text) => setPassword(text);

    const handledSingInPress = () => {
        if(user.trim().length>0 && password.trim().length>0) {
            navigation.navigate("Home");
        }
        else {
            Alert.alert("Error", "El usuario y/o contraseña son incorrectos");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.image} />
            </View>
            <View style={styles.image.inputsContainer}>
                <TextInput placeholder="user" style={styles.textInput} onChange={handleUserTextChange} value={user} />
                <TextInput placeholder="password" style={styles.textInput} secureTextEntry onChange={handlePasswordTextChange} value={password} />
            </View>
            <Button style={styles.image.button} title="Sing in" onPress={handledSingInPress} />
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 70,
        height: 70,
        alignSelf: "center"
    },
    imageContainer: {
        marginTop: 10,
        marginBottom: 10
    },
    textInput: {
        backgroundColor: "#fff",
        padding: 6,
        marginTop: 4,
        marginBottom: 12,
        fontSize: 16
    },
    button: {
        backgroundColor: "#1976d2"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20
    }
});

export default LoginScreen;