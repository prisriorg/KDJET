import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="1007810998886-iiieqjdrugj2li25kr1bg46lq0bvuo03.apps.googleusercontent.com">
    <App />
    </GoogleOAuthProvider>
 
  </React.StrictMode>
);
