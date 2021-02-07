import React, { Component } from "react";
import "./App.css";
import AddTask from "./Addtask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 1;

  state = {
    tasks: [
      // {
      //   id: 0,
      //   text: "zagrać wreszcie w Wiedźmina 3",
      //   date: "2018-02-15",
      //   important: true,
      //   active: true,
      //   finishDate: null,
      // },
      // {
      //   id: 1,
      //   text: "ugotować obiad",
      //   date: "2018-03-18",
      //   important: false,
      //   active: true,
      //   finishDate: null,
      // },
    ],
  };

  deleteTask = (id) => {
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks,
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text: text, // tekst z input
      date, // tekst z input
      important, // tekst z input
      active: true,
      finishDate: null,
    };
    this.counter++;
    if (task.text !== "") {
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, task],
      }));
    }
    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>LISTA ZADAŃ</h1>
        <h2>Dodaj nowe zadanie</h2>
        <AddTask className="Addtasks" add={this.addTask} />
        <hr />
        <TaskList
          className="TaskList"
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
