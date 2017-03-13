import React from 'react';
import GreetingContainer from './greeting_container';

const App = ({ children }) => (
  <div>
    <h1>Bench BnB</h1>
    <h2>Test Test</h2>
    <GreetingContainer />
    { children }
  </div>
);

export default App;
