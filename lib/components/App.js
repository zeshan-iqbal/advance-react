import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';

class App extends PureComponent {
  
  appState = () => {
    const {articles, searchTerm } = this.props.store.getState();
    return {articles, searchTerm };
  }
  state = this.appState();

  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext(){
    return {
      store: this.props.store
    };
  }

  onStoreChange = () => {
    this.setState(this.appState);
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