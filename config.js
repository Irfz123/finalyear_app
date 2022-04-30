import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/functions";
import "firebase//compat/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBeRp4GQh8SkhiZvJmGnLjmoN9uMwD_AR8",
  authDomain: "covid-19-data-6072d.firebaseapp.com",
  projectId: "covid-19-data-6072d",
  databaseURL: "https://covid-19-data-6072d.firebasedatabase.app",
  storageBucket: "covid-19-data-6072d.appspot.com",
});

const firestore = app.firestore();
export const database = {
  coronaDatabase: firestore.collection("coronaDatabase"),
};

export const functions = app.functions();
export const storage = app.storage();

export default app;
