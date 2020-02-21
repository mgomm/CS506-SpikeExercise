import React from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Alert
} from "react-native";
import * as firebase from "firebase";

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    constructor() {
        super();
        this.state = {
            password: "",
            newName: "",
            newEmail: "",
            newPassword: ""
        };
    }

    reauthenticateUser = password => {
        var user = firebase.auth().currentUser;
        var cred = firebase.auth.EmailAuthProvider.credential(
            user.email,
            password
        );
        return user.reauthenticateWithCredential(cred);
    };

    changeName = () => {
        this.reauthenticateUser(this.state.password)
            .then(() => {
                var user = firebase.auth().currentUser;
                user.updateProfile({ displayName: this.state.newName })
                    .then(() => {
                        Alert.alert("Name changed.");
                    })
                    .catch(error => {
                        Alert.alert(error.message);
                    });
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };

    changeEmail = () => {
        this.reauthenticateUser(this.state.password)
            .then(() => {
                var user = firebase.auth().currentUser;
                user.updateEmail(this.state.newEmail)
                    .then(() => {
                        Alert.alert("Email changed.");
                    })
                    .catch(error => {
                        Alert.alert(error.message);
                    });
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };

    changePassword = () => {
        this.reauthenticateUser(this.state.password)
            .then(() => {
                var user = firebase.auth().currentUser;
                user.updatePassword(this.state.newPassword)
                    .then(() => {
                        Alert.alert("Password changed.");
                    })
                    .catch(error => {
                        Alert.alert(error.message);
                    });
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };

    signOutUser = () => {
        firebase.auth().signOut();
    };

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>
                    {this.state.displayName}'s Account
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder="Authenticate Current Password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                ></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder="New Name"
                    autoCapitalize="none"
                    onChangeText={newName => this.setState({ newName })}
                    value={this.state.newName}
                ></TextInput>

                <TouchableOpacity
                    style={styles.changeAreas}
                    onPress={this.changeName}
                >
                    <Text style={styles.changeButtons}>Change Name</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="New Email"
                    autoCapitalize="none"
                    onChangeText={newEmail => this.setState({ newEmail })}
                    value={this.state.newEmail}
                ></TextInput>

                <TouchableOpacity
                    style={styles.changeAreas}
                    onPress={this.changeEmail}
                >
                    <Text style={styles.changeButtons}>Change Email</Text>
                </TouchableOpacity>

                <TextInput
                    style={styles.input}
                    placeholder="New Password"
                    secureTextEntry
                    autoCapitalize="none"
                    onChangeText={newPassword => this.setState({ newPassword })}
                    value={this.state.newPassword}
                ></TextInput>

                <TouchableOpacity
                    style={styles.changeAreas}
                    onPress={this.changePassword}
                >
                    <Text style={styles.changeButtons}>Change Password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.logoutButton}
                    onPress={this.signOutUser}
                >
                    <Text style={{ fontWeight: "500", color: "#fff" }}>
                        Logout
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    },
    heading: {
        marginTop: -32,
        marginBottom: 48,
        fontSize: 18,
        fontWeight: "400",
        textAlign: "center"
    },
    input: {
        marginHorizontal: 30,
        marginBottom: 32,
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"
    },
    changeAreas: {
        marginTop: -18,
        marginBottom: 28,
        textAlign: "center"
    },
    changeButtons: {
        fontSize: 15,
        fontWeight: "500",
        textAlign: "center",
        color: "#00b3ff"
    },
    logoutButton: {
        marginTop: 32,
        marginHorizontal: 30,
        backgroundColor: "#00b3ff",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    }
});
