import firebase from "firebase";
import FirebaseKeys from "./config";


export function addClass(class)  {
    firebase.firestore().collection("Classes").add({
        name: class.name,
        created: firebase.firestore().FieldValue.serverTimeStamp()
    })
}

export function addGoal(goal) {
    firebase.firestore().collection("Goals").add({
        name: goal.name,
        isComplete: false,
        created: firebase.firestore().FieldValue.serverTimeStamp(),
        completed:
    }).then().catch();
}

export function addOther() {
    firestore().collection("OtherInfo").add({

    })   
}