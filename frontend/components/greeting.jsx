import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut() {
    this.props.logout();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <h3>Welcome to your homepage { this.props.currentUser.username }!</h3>
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
