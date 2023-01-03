import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from "aws-amplify";
import awsconfig from "./aws-exports";
import { DataStore } from '@aws-amplify/datastore';
import { Post } from './models';
Amplify.configure(awsconfig);

const root = ReactDOM.createRoot(document.getElementById('root'));

DataStore.save(
  new Post({
    title: "My First Post",
    rating: 10,
    status: "DRAFT",
    content: "Hello World!",
  })
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
