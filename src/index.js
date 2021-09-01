import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store';
// import provider so it enables the provider to provide the redux store to our application
//link our react application to redux store to enable redux devtools to analyse state, actions etc of our application
//To our app component, we need to provide redux store
// pass store as props
ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}> 
    <App /> 
    </Provider>          
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
