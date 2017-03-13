import React from 'react';

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

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.redirect());
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
    debugger;

    const header = (this.props.formType === "login" ? "Log In" : "Sign Up");
    return (
      <form>
        <h3>{ header }</h3>
        <ul>
          { allErrors }
        </ul>
        Username <input type='text' onChange={ this.handleInput('username') }></input><br/>
        Password <input type='password' onChange={ this.handleInput('password') }></input><br/>
        <input type='submit' onClick={ this.handleSubmit } value = { header }></input>
      </form>
    );
  }


}

export default SessionForm;
