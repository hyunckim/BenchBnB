import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser } = this.props;
    if (currentUser) {
      return (
        <div>
          <h3>Welcome { currentUser.username[0].toUpperCase() + currentUser.username.slice(1) }!</h3>
          <button onClick={this.props.logout}>Log Out</button>
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
