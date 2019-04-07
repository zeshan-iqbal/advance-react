import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps) => (Component) => {
  return class extends React.Component {
        
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object
    };

    render() {      
      const {store} = this.context;
      return <Component 
        {...this.props}
        {...extraProps(store, this.props)}
        store={store} />;
    }
  };
};

export default storeProvider;
