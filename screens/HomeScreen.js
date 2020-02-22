import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    LayoutAnimation
} from "react-native";
import * as firebase from "firebase";

export default class HomeScreen extends React.Component {
    state = {
        email: "",
        displayName: "",
        description: ""
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{this.state.displayName}</Text>

                <Text style={styles.description}>
                    My name is {this.state.displayName} and I am a senior
                    studying Computer Science at UW-Madison. Here is where I
                    store my classes, goals, and some other fun facts. Check out
                    the other tabs and you will know all about me!
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        fontSize: 32,
        fontWeight: "900"
    },
    description: {
        fontSize: 18
    }
});
