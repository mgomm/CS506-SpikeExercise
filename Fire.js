import firebase from "firebase";
import "firebase/firestore";

export function addClass(newClass, addComplete) {
    firebase
        .firestore()
        .collection("Classes")
        .add({
            name: newClass.name,
            active: true,
            created: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(snapshot => snapshot.get())
        .then(classData => addComplete(classData.data()))
        .catch(error => console.log(error));
}

export function addGoal(goal, addGoalComplete) {
    firebase
        .firestore()
        .collection("Goals")
        .add({
            name: goal.name,
            isComplete: false,
            created: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(snapshot => snapshot.get())
        .then(goalData => addGoalComplete(goalData.data()))
        .catch(error => console.log(error));
}

export function addFact(fact, addFactComplete) {
    firebase
        .firestore()
        .collection("OtherInfo")
        .add({
            name: fact.name,
            created: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(snapshot => snapshot.get())
        .then(factData => addFactComplete(factData.data()))
        .catch(error => console.log(error));
}

export async function getClasses(classesRetrieved) {
    var classList = [];
    var snapshot = await firebase
        .firestore()
        .collection("Classes")
        .orderBy("created")
        .get();

    snapshot.forEach(doc => {
        classList.push(doc.data());
    });

    classesRetrieved(classList);
}

export async function getGoals(goalsRetrieved) {
    var goalList = [];
    var snapshot = await firebase
        .firestore()
        .collection("Goals")
        .orderBy("created")
        .get();

    snapshot.forEach(doc => {
        goalList.push(doc.data());
    });

    goalsRetrieved(goalList);
}

export async function getOtherFacts(factsRetrieved) {
    var factList = [];
    var snapshot = await firebase
        .firestore()
        .collection("OtherInfo")
        .orderBy("created")
        .get();

    snapshot.forEach(doc => {
        factList.push(doc.data());
    });

    factsRetrieved(factList);
}
