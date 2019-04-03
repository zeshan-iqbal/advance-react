import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    state = { answer: 42 }

    asyncFunc = () => Promise.resolve(32);

    async componentDidMount(){
      this.setState({answer: await this.asyncFunc()});
    }

    render() { 
      return ( <h2>Hello Class Components with Polyfils  -- {this.state.answer}</h2> );
    }
}
 
ReactDOM.render(<App/>, document.getElementById('root'));