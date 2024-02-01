
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './components/AppContext';
import Home from './components/Home';
import GetData from './components/GetData';
import InsertData from './components/InsertData';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/get-data" component={GetData} />
          <Route path="/insert-data" component={InsertData} />
        </Switch>
      </Router>
    </AppProvider>
  );
};

export default App;
