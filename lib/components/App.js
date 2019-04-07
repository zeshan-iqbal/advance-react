import React, { Component } from 'react';
import ArticleList from './ArticleList';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';
import Timestamp from './Timestamp';


class App extends Component {
    
  state = this.props.store.getState();

  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext(){
    return {
      store: this.props.store
    };
  }

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount(){
    const {store} = this.props;
    this.subscriptionId = store.subscribe(this.onStoreChange);
    store.startClock();
  }

  componentWillUnmount(){
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() { 
    let {articles, searchTerm } = this.state;
    const searchRE = new RegExp(searchTerm, 'i');
    if(searchTerm){
      articles = pickBy(articles, (value) =>{
        return value.title.match(searchRE)
            || value.body.match(searchRE);
      });
    }

    return (
      <div>
        <Timestamp />
        <SearchBar />
        <ArticleList 
          articles={articles}          
        />
      </div>
    );
  }
}
 
export default App;