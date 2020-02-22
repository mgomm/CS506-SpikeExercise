import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Button,
    FlatList
} from "react-native";
import { addFact, getOtherFacts } from "../Fire";
import { ListItem, Divider } from "react-native-elements";

export default class OtherScreen extends React.Component {
    state = {
        factList: [],
        currentFact: null
    };

    onFactAdded = fact => {
        this.setState(prevState => ({
            factList: [...prevState.factList, fact]
        }));
    };

    onFactsRecieved = factList => {
        this.setState(prevState => ({
            factList: (prevState.factList = factList)
        }));
    };

    componentDidMount() {
        getOtherFacts(this.onFactsRecieved);
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add Other Facts"
                        value={this.state.currentFact}
                        onChangeText={text =>
                            this.setState(prevState => ({
                                currentFact: (prevState.currentFact = text)
                            }))
                        }
                    />

                    <Button
                        title="Submit"
                        style={styles.addFactBtn}
                        onPress={() =>
                            addFact(
                                {
                                    name: this.state.currentFact
                                },
                                this.onFactAdded
                            )
                        }
                    ></Button>
                </View>
                <FlatList
                    data={this.state.factList}
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
    addFactBtn: {
        width: 100,
        height: 50
    }
});
