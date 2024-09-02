import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SignInSignUp from './pages/SignInSignUp';
import Dashboard from './pages/Dashboard'; // Create a simple Home component for demonstration

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  // This function simulates authentication process
  const handleAuthentication = (status) => {
    setIsAuthenticated(status);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signin" render={(props) => <SignInSignUp {...props} onAuth={handleAuthentication} />} />
          <Route path="/dashboard" render={() => (
            isAuthenticated ? (
              <>
                <Dashboard />
              </>
            ) : (
              <Redirect to="/signin" />
            )
          )} />
          <Redirect from="/" to="/signin" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;