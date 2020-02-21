import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";

export default class OtherScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Other</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
});
