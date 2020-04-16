import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

const App1 = (
  <div>
    <p>Start editing to see some magic happen :)</p>
  </div>
);

function App2() {
  return <div>
    <p>Start editing to see some magic happen :)</p>
  </div>
}

class App3 extends Component {
  render() {
    return <div>
    111
    {App1}
    <App2/>
    <p>Start editing to see some magic happen :)</p>
  </div>
  }
}

render(App1, document.getElementById('root'));
render(<App2/>, document.getElementById('root1'));
render(<App3/>, document.getElementById('root2'));

