import React, { PureComponent } from 'react';
import debounce from 'lodash.debounce';
import storeProvider from './storeProvider';

class SearchBar extends PureComponent {

    state = { searchTerm: '' };

    doSearch = debounce(() => {
      this.props.store.setSearchTerm(this.state.searchTerm);
    }, 300);

    handleSearch = (event) => {
      this.setState({searchTerm: event.target.value}, () => {
        this.doSearch();
      });
    };    

    render() { 
    return ( <input
      type="search"
      value={this.state.searchTerm}
      onChange={this.handleSearch} /> );
  }
}
 
export default storeProvider()(SearchBar);