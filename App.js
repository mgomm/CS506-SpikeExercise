import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

import * as firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDdbO30T1YxG7OVxjZbSE1jNYfp-MwYK48",
  authDomain: "spike-exercise-f17ae.firebaseapp.com",
  databaseURL: "https://spike-exercise-f17ae.firebaseio.com",
  projectId: "spike-exercise-f17ae",
  storageBucket: "spike-exercise-f17ae.appspot.com",
  messagingSenderId: "523506316344",
  appId: "1:523506316344:web:c9bdb3d81a4212219822cd",
  measurementId: "G-NLX1B10Y0R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);