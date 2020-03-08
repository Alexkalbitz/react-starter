import React from 'react';
import './App.css';

// a class based component

class App extends React.Component {

  // the render method
  public render() {

    // logic
    const name = 'DevJetzt';

    // return the HTML
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>The name is {name}</h2>
      </div>
    );
  }
}


export default App;
