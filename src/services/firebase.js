import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
    apiKey: "AIzaSyD0zthsgzwzwDwA5bPe0YYxErJC4kNq66I",
    authDomain: "chatg-ffb5d.firebaseapp.com",
    databaseURL: "https://chatg-ffb5d.firebaseio.com",
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
