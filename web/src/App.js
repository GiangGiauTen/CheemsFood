import React from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';


const App = () => {
  return (

    <div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </Router>
  </div>
  );
};

export default App;