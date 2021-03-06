import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    StatusBar,
    LayoutAnimation
} from "react-native";
import * as firebase from "firebase";

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        email: "",
        password: "",
        errorMessage: null
    };

    handleLogin = () => {
        const { email, password } = this.state;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }));
    };

    render() {
        LayoutAnimation.easeInEaseOut();
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"></StatusBar>
                <Image
                    source={require("../assets/watercolor-background.jpg")}
                    style={styles.image}
                ></Image>

                <Text style={styles.greeting}>
                    {"Welcome Back!\nPlease Login."}
                </Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && (
                        <Text style={styles.error}>
                            {this.state.errorMessage}
                        </Text>
                    )}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Email Address</Text>
                        <TextInput
                            style={styles.input}
                            autoCapitalize="none"
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Password</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password =>
                                this.setState({ password })
                            }
                            value={this.state.password}
                        ></TextInput>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleLogin}
                >
                    <Text style={{ fontWeight: "500", color: "#fff" }}>
                        Login
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        alignSelf: "center",
                        marginTop: 32,
                        marginBottom: 150
                    }}
                    onPress={() => this.props.navigation.navigate("SignUp")}
                >
                    <Text style={{ color: "#414959", fontSize: 13 }}>
                        Don't have an account?{" "}
                        <Text style={{ fontWeight: "500", color: "#00b3ff" }}>
                            Sign Up
                        </Text>
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    greeting: {
        marginTop: -32,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    errorMessage: {
        height: 72,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#FF3030",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#00b3ff",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        marginTop: -150,
        resizeMode: "contain"
    }
});
