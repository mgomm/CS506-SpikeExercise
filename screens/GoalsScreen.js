import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    SafeAreaView,
    Button
} from "react-native";
import { addGoal, getGoals } from "../Fire";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Divider } from "react-native-elements";

export default class GoalsScreen extends React.Component {
    state = {
        goalList: [],
        currentGoal: null
    };

    onGoalAdded = goal => {
        this.setState(prevState => ({
            goalList: [...prevState.goalList, goal]
        }));
    };

    onGoalsRecieved = goalList => {
        this.setState(prevState => ({
            goalList: (prevState.goalList = goalList)
        }));
    };

    componentDidMount() {
        getGoals(this.onGoalsRecieved);
    }

    render() {
        return (
            <SafeAreaView>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        placeholder="Add Goal"
                        value={this.state.currentGoal}
                        onChangeText={text =>
                            this.setState(prevState => ({
                                currentGoal: (prevState.currentGoal = text)
                            }))
                        }
                    />

                    <Button
                        title="Submit"
                        style={styles.addGoalBtn}
                        onPress={() =>
                            addGoal(
                                {
                                    name: this.state.currentGoal
                                },
                                this.onGoalAdded
                            )
                        }
                    ></Button>
                </View>
                <FlatList
                    data={this.state.goalList}
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
    addGoalBtn: {
        width: 100,
        height: 50
    }
});
