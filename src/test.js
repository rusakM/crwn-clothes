import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

firestore
  .collection("users")
  .doc("iQARJs6KKtZvw8koMrhr")
  .collection("cartItems")
  .doc("9YbPlLezI6Udb2TkunC9");

firestore.doc('/users/iQARJs6KKtZvw8koMrhr/cartItems/9YbPlLezI6Udb2TkunC9');

firestore.collection('/users/iQARJs6KKtZvw8koMrhr/cartItems');
