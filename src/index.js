import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Homepage from './components/pages/homepage';
import ForgotPassword from './components/pages/forgotpass';
import Signin from './components/pages/Signin';
import SignUp from './components/pages/Signup';
import CreateAccount from './components/pages/CreateAccount';
import EmailVarification from './components/pages/EmailVarification';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
  {
    path: "/resetpassword",
    element: <ForgotPassword />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/createaccount",
    element: <CreateAccount />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/verifyemail",
    element: <EmailVarification />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
