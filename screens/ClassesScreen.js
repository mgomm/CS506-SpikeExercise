import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Button
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import * as firebase from "firebase";
//import Fire from "../Fire";

export default class ClassesScreen extends React.Component {
    state = {
        classList: [],
        currentClass: null
    };
    // handleAddClass = () => {
    //     Fire.shared.addClass({ text: this.state.class.trim() });
    // };

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
                        title="Add Class"
                        style={styles.addClassBtn}
                        onPress={() => {}}
                    ></Button>
                </View>
                <FlatList
                    data={this.state.classList}
                    ItemSeparatorComponent={() => (
                        <Divider style={{ background: "black" }} />
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
