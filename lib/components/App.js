import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';


class App extends Component {
    state = this.props.store.getState()

    static childContextTypes = {
      store: PropTypes.object
    }

    getChildContext(){
      return {
        store: this.props.store
      };
    }

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