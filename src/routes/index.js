import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TodoListScene from "../views/TodoListScene";
import LoginScreen from "../views/LoginScreen";
import HomeScreen from "../views/HomeScreen";

const Routes = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="TodoList" component={TodoListScene} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;