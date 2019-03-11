import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Task from './tasks/Task'

const dummyTaskData = [
  {
    title: "Slow down",
    description: "When leading from the front, you cannot go too slow"
  },
  {
    title: "Provide stretch exercise",
    description: "Ensure all students have meaningful, challenging work to do."
  },
  {
    title: "Provide actual stretch exercise",
    description: "It is important whilst coding to stretch."
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <section>
          {dummyTaskData.map((item, i) => 
            <Task key={i} title={item.title} description={item.description}/>
          )}
        </section>
      </div>
    );
  }
}

export default App;
