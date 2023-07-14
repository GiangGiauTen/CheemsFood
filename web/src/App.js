import {
  Routes,
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';

import { Layout, Menu, theme, Button } from 'antd';

import Home from './components/Home';
import React, { useState } from 'react';
const { Header, Content, Sider } = Layout;

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;