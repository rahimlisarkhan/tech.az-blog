import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"


const firebaseConfig = {
    apiKey: "AIzaSyDV-DLZPcnGX_5aHY9icwvOz2JE12pe-eU",
    authDomain: "techaz-bfae3.firebaseapp.com",
    // databaseURL:"https://techaz-bfae3-default-rtdb.firebaseio.com",
    projectId: "techaz-bfae3",
    storageBucket: "techaz-bfae3.appspot.com",
    messagingSenderId: "186177661017",
    appId: "1:186177661017:web:3a90c4487e1af1e3e22948"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)