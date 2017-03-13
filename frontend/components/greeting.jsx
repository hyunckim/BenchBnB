import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  handleLogOut() {

  }

  render() {
    let { currentUser } = this.props;
    if (currentUser) {
      return (
        <div>
          <h3>Welcome to your homepage { currentUser.username }!</h3>
          <button onClick={this.handleLogOut}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }
  }
}

export default Greeting;
