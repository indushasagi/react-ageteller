import React, { Component } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import "../styles.css";
import AgeStats from "./AgeStats";

class App extends Component {
  constructor() {
    super();
    this.state = {
      newDate: "",
      birthday: "1992-06-21",
      showStats: false
    };
  }
  changeBirthday() {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true });
  }
  render() {
    return (
      <div className="App">
        <Form inline>
          <h2>Input Your Birthday!</h2>
          <FormControl
            type="date"
            onChange={event => this.setState({ newDate: event.target.value })}
          />
          {""}
          <Button onClick={() => this.changeBirthday()}>Submit</Button>
          {this.state.showStats ? (
            <div className="fad age-stats">
              <AgeStats date={this.state.birthday} />
            </div>
          ) : (
            <div />
          )}
        </Form>
      </div>
    );
  }
}

export default App;
