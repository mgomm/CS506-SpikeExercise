import React from "react";
import FirebaseKeys from "./config";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import ClassesScreen from "./screens/ClassesScreen";
import GoalsScreen from "./screens/GoalsScreen";
import OtherScreen from "./screens/OtherScreen";
import ProfileScreen from "./screens/ProfileScreen";

import LoadingScreen from "./screens/LoadingScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

import * as firebase from "firebase";

var firebaseConfig = FirebaseKeys;
firebase.initializeApp(firebaseConfig);

const AppTabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                        name="ios-home"
                        size={24}
                        color={tintColor}
                    ></Ionicons>
                )
            }
        },
        Classes: {
            screen: ClassesScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                        name="ios-school"
                        size={24}
                        color={tintColor}
                    ></Ionicons>
                )
            }
        },
        Goals: {
            screen: GoalsScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                        name="ios-list"
                        size={24}
                        color={tintColor}
                    ></Ionicons>
                )
            }
        },
        Other: {
            screen: OtherScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                        name="ios-happy"
                        size={24}
                        color={tintColor}
                    ></Ionicons>
                )
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <Ionicons
                        name="ios-person"
                        size={24}
                        color={tintColor}
                    ></Ionicons>
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "#161F3D",
            inactiveTintColor: "#B8BBC4",
            showLabel: false
        }
    }
);

const AuthStack = createStackNavigator({
    Login: LoginScreen,
    SignUp: SignUpScreen
});

export default createAppContainer(
    createSwitchNavigator(
        {
            Loading: LoadingScreen,
            App: AppTabNavigator,
            Auth: AuthStack
        },
        {
            initialRouteName: "Loading"
        }
    )
);
