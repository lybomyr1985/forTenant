import 'firebase/database'
import firebase from 'firebase/app'

 const DB_CONFIG={   
    apiKey: "AIzaSyAb21m5ZquwMPyxuwsPoZfdiX6179tBbkE",
    authDomain: "tenanttask.firebaseapp.com",
    databaseURL: "https://tenanttask.firebaseio.com",
    projectId: "tenanttask",
    storageBucket: "tenanttask.appspot.com",
    messagingSenderId: "568831941729"
 } 

 firebase.initializeApp(DB_CONFIG); 
 
 
 export default firebase;
 export const database=firebase.database();