import React from 'react';
import ReactDOM from "react-dom";
import App from './Apps'
import { BrowserRouter,  history } from 'react-router-dom'
 


 ReactDOM.render(
     <BrowserRouter history={history}>
       <App/>
      </BrowserRouter> ,  
    document.getElementById('root')
);
