import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false
    }
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePassWordChange = this.handlePassWordChange.bind(this)
    this.handleRememberMeChange = this.handleRememberMeChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(e) {
    let regex = /[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/;


    if (regex.test(e.target.value)) {
      e.target.className = "form-control is-valid"
      this.setState({ email: e.target.value, emailIsValid: true })
    } else {
      e.target.className = "form-control is-invalid"
      this.setState({ email: e.target.value, emailIsValid: false })
    }
  }

  handlePassWordChange(e) {
    if (e.target.value.length > 5) {
      e.target.className = "form-control is-valid"
      this.setState({ password: e.target.value, passwordIsValid: true })
    } else {
      e.target.className = "form-control is-invalid"
      this.setState({ password: e.target.value, passwordIsValid: false })
    }
  }

  handleRememberMeChange() {
    this.state.rememberMe ? this.setState({ rememberMe: false }) : this.setState({ rememberMe: true })
  }

  handleSubmit(e) {
    e.preventDefault()


    if (this.state.emailIsValid && this.state.passwordIsValid) {
      this.setState({ isSubmitted: true })
      App.render(

      )
    }


  }




  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group mt-2 ms-2">
            <label htmlFor="exampleInputEmail1">Adresse Email</label>
            <input
              type="email"
              autoComplete="on"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Entrez votre Email"
              onChange={this.handleEmailChange}
            />
          </div>
          <div className="form-group ms-2">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              autoComplete="on"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.handlePassWordChange}
            />
          </div>
          <div className="col-auto">
            <div className="form-check mb-3 mt-2 ms-2">
              <input
                className="form-check-input"
                type="checkbox"
                id="autoSizingCheck"
                onChange={this.handleRememberMeChange}
              />
              <label className="form-check-label" htmlFor="autoSizingCheck">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary ms-2">Envoyer</button>
        </form>

      </div>
    );
  }
}

export default App;