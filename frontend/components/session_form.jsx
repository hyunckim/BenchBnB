import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {

  }

  navLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">Sign Up Instead</Link>;
    } else {
      return (
        <section>
          Already have an account?<br/>
          <Link to="/login">Log In</Link>
        </section>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/')).fail(() => this.setState({password: ""}));
  }

  handleInput(attr) {
    return (event) => {
      event.preventDefault();
      this.setState({[attr]: event.currentTarget.value });
    };
  }

  render() {

    let { errors } = this.props;
    let allErrors = [];
    if (errors.length) {
      allErrors = errors.map((error, index) => {
        return (
          <li key="index">
            { error }
          </li>
        );
      });
    }

    const header = (this.props.formType === "login" ? "Log In" : "Sign Up");
    return (
      <form>
        <h3>{ header }</h3>
        <ul>
          { allErrors }
        </ul>
        Username <input type='text' onChange={ this.handleInput('username') } value={ this.state.username }></input><br/>
        Password <input type='password' onChange={ this.handleInput('password') } value={ this.state.password }></input><br/>
        <input type='submit' onClick={ this.handleSubmit } value = { header }></input>
        { this.navLink() }
      </form>
    );
  }


}

export default SessionForm;
