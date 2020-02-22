import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Button
} from "react-native";
import { addClass, getClasses } from "../Fire";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Divider } from "react-native-elements";

export default class ClassesScreen extends React.Component {
    state = {
        classList: [],
        currentClass: null
    };

    onClassAdded = newClass => {
        this.setState(prevState => ({
            classList: [...prevState.classList, newClass]
        }));
    };

    onClassesRecieved = classList => {
        this.setState(prevState => ({
            classList: (prevState.classList = classList)
        }));
    };

    componentDidMount() {
        getClasses(this.onClassesRecieved);
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add Class"
                        value={this.state.currentClass}
                        onChangeText={text =>
                            this.setState(prevState => ({
                                currentClass: (prevState.currentClass = text)
                            }))
                        }
                    />

                    <Button
                        title="Submit"
                        style={styles.addClassBtn}
                        onPress={() =>
                            addClass(
                                {
                                    name: this.state.currentClass
                                },
                                this.onClassAdded
                            )
                        }
                    ></Button>
                </View>
                <FlatList
                    data={this.state.classList}
                    ItemSeparatorComponent={() => (
                        <Divider style={{ backgroundColor: "black" }} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => {
                        return (
                            <ListItem title={item.name} onPress={() => {}} />
                        );
                    }}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        marginTop: 28,
        borderBottomColor: "#000",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: "row",
        alignContent: "center"
    },
    input: {
        flex: 1,
        paddingLeft: 16,
        fontSize: 16
    },
    addClassBtn: {
        width: 100,
        height: 50
    }
});
