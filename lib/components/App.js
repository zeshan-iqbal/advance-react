import React, { Component } from 'react';
import ArticleList from './ArticleList';


class App extends Component {
    state = this.props.store.getState()

    render() { 
      const {articles } = this.state;
      return ( 
        <ArticleList 
          articles={articles}
          store={this.props.store} 
        />
      );
    }
}
 
export default App;