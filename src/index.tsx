import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from "@react-oauth/google"
const GOOGLE_CLIENT_ID  = "484459850106-22of2ccn4qdpu457n8js70ur7mpb0gvt.apps.googleusercontent.com"
// 484459850106-22of2ccn4qdpu457n8js70ur7mpb0gvt.apps.googleusercontent.com
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
   <App />
  </GoogleOAuthProvider>

);

