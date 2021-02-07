import React, { Component } from "react";
import "./Addtask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    checked: false,
    date: this.minDate,
    active: false,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;

    const add = this.props.add(text, date, checked);
    if (add && text !== "") {
      this.setState({
        text: "",
        checked: false,
        date: this.minDate,
        active: !this.state.active,
      });
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    const styles = {
      form_off: {
        display: "none",
      },
      form_oon: {
        display: "block",
      },
    };

    const classes = [];
    if (this.state.active) classes.push("btnLess");
    if (!this.state.active) classes.push("btnMore");

    return (
      <>
        <button
          // style={this.state.active ? styles.btn_on : styles.btn_off}
          className={classes.join(" ")}
          onClick={() => this.setState({ active: !this.state.active })}
        >
          {this.state.active ? <i class="fas fa-sort-up"></i> : "+"}
        </button>
        <div
          className="form"
          style={this.state.active ? styles.form_on : styles.form_off}
        >
          <input
            className="taskTextInput"
            type="text"
            placeholder="zadanie..."
            value={this.state.text}
            onChange={this.handleText}
          />
          <br />
          <label htmlFor="date">Czas na wykonanie:</label>
          <input
            style={{
              borderRadius: 10,
            }}
            type="date"
            value={this.state.date}
            min={this.minDate}
            max={maxDate}
            onChange={this.handleDate}
          />
          <br />
          <input
            style={{
              height: 20,
              width: 20,
            }}
            type="checkbox"
            checked={this.state.checked}
            id="important"
            onChange={this.handleCheckbox}
          />
          <label htmlFor="important">Priorytet!</label>
          <button
            style={{
              borderRadius: 5,
              cursor: "pointer",
              backgroundColor: "transparent",
              color: "rgb(241, 248, 174)",
              border: "2px solid white",
            }}
            onClick={this.handleClick}
          >
            Dodaj
          </button>
        </div>
      </>
    );
  }
}

export default AddTask;
