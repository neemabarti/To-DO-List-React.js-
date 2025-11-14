import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';       // Import App component
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Only reference the component here */}
  </React.StrictMode>
);


