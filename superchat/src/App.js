// import logo from './logo.svg';
import dotenv from 'dotenv';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

dotenv.config();
console.log(process.env);

firebase.initializeApp({

})

const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <script src="/__/firebase/8.2.2/firebase-app.js"></script>
        <script src="/__/firebase/8.2.2/firebase-analytics.js"></script>
        <script src="/__/firebase/init.js"></script>
      </header>
    </div>
  );
}
        // {/* <img src={logo} className="App-logo" alt="logo" />
        // <p>
        //   Edit <code>src/App.js</code> and save to reload.
        // </p>
        // <a
        //   className="App-link"
        //   href="https://reactjs.org"
        //   target="_blank"
        //   rel="noopener noreferrer"
        // >
        //   Learn React
        // </a> */}
export default App;

