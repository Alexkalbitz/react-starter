//
// This file is not being rendered right now
// just some comments to clarify
//

import React from 'react';
import './App.css';
import Child from './Child';

class Template extends React.Component {

  // think of the render function as a mathematical function
  // y = f(x)
  // --> f is the render function
  // --> x will be explained later
  // --> y is the HTML result
  public render() {

    // random variable
    const name = 'DevJetzt';

    // until here standard javascript
    // but now we will enter JSX which looks like HTML
    // within JSX we can escape with {} to have javascript
    //
    //
    return (
      <div>
        {/*
          We use first "{" to signal that we want to write javascript
          Then we can use the normal comments like "//" and "/*"
        */}
        <h1>Hello World!</h1>

        {/*
          To reference a variable we use the same technique
          Write "{" to enter javascript mode
          And just write the variable name
          The result of the expression is pasted at that location
        */}
        <h2>The name is {name}</h2>
        <h3>
          {/*
            This example doesn't make any sense
            It just shows that we can freely use Javascript
          */}
          {(name + name + '5').toLowerCase()}
        </h3>
        {/*
          Lowercase elements (enclose with "<>") are normal HTML elements
          All elements beginning with an Uppercase letter are React components
          Basically we can mix and match them
        */}
        <hr />
        {/*
          Child is being imported from a different file
          And again: it's a component
        */}
        <Child />
      </div>
    );
  }
}

export default Template;

