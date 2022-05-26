import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './pages/Header'
import { BrowserRouter as Router} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
       <Header />
      <App />
    </Router>   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
