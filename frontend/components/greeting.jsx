import React from 'react';

class Greeting extends React.Component {

  constructor({ currentUser, logout }) {
    super({ currentUser, logout });
  }

  handleLogOut() {

  }

  render() {
    if (currentUser) {
      return (
        <div>
          <h3>Welcome to your homepage { currentUser.username }!</h3>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      );
    }
  }
};
