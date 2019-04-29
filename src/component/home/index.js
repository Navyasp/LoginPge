import React, { Component } from "react";
import FormField from "./Formfield";
import { login } from "../jsonFiles/loginDetails";
import { update } from "./formAction";

class Home extends Component {
  state = {
    formError: false,
    formSuccess: false,
    formdata: {
      email: {
        element: "input",
        value: "",
        config: {
          type: "email",
          name: "email_imput",
          placeholder: "Enter a email"
        },
        validation: {
          required: true,
          email: true
        },
        valid: false,

        validationMessage: ""
      },
      password: {
        element: "input",
        value: "",
        config: {
          type: "password",
          name: "password_imput",
          placeholder: "Enter a password"
        },
        validation: {
          required: true
        },
        valid: false,

        validationMessage: ""
      }
    }
  };
  updateForm = element => {
    const newFormdata = update(element, this.state.formdata, "login");
    this.setState({
      formError: false,
      formdata: newFormdata
    });
  };
  submitForm = event => {
    event.preventDefault();
    if (
      login[0].username === this.state.formdata.email.value &&
      login[0].password === this.state.formdata.password.value
    ) {
      this.props.history.push("/dashboard");
    } else {
      console.log("false");
    }
  };

  render() {
    return (
      <div className="signin_wrapper">
        <form onSubmit={event => this.submitForm()}>
          <FormField
            id={"email"}
            formdata={this.state.formdata.email}
            change={element => this.updateForm(element)}
          />
          <FormField
            id={"password"}
            formdata={this.state.formdata.password}
            change={element => this.updateForm(element)}
          />

          {this.state.formError ? (
            <div className="error_label">please check ur data</div>
          ) : null}
          <button onClick={event => this.submitForm(event)}>Login</button>
        </form>
      </div>
    );
  }
}

export default Home;
