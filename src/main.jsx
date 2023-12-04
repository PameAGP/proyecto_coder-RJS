import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";

import App from './App.jsx'


const firebaseConfig = {
  apiKey: "AIzaSyCQdOVBK9AQmfcX9blqpg79jsnpFIDD3QA",
  authDomain: "coder-ec-pame-react.firebaseapp.com",
  projectId: "coder-ec-pame-react",
  storageBucket: "coder-ec-pame-react.appspot.com",
  messagingSenderId: "820436013501",
  appId: "1:820436013501:web:b7df38bb1af8c2f92782d4"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
