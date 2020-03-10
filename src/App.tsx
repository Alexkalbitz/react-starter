import React from 'react';
import './App.css';
import Child from './Child';

class App extends React.Component {

  public render() {

    const name = 'DevJetzt';

    return (
      <div>
        <h1>Hello World!</h1>
        <h2>The name is {name}</h2>
        <hr />
        <Child />
      </div>
    );
  }
}

export default App;
