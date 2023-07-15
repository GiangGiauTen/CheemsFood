import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import QuanLyCongThuc from './QuanLyCongThuc';
import QuanLyCongThucYeuThich from './QuanLyCongThucYeuThich';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={QuanLyCongThuc} />
        <Route
          path="/QuanLyCongThucYeuThich"
          exact
          component={QuanLyCongThucYeuThich}
        />
      </Switch>
    </Router>
  );
};

export default App;
