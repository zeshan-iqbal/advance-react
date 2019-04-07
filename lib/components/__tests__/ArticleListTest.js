import React from 'react';
import { shallow } from 'enzyme';
import ArticleList from './../ArticleList';
import Article from './../Article';

Article.propTypes = {};


describe('ArticleList', () => {

  const testProps = {
    articles: {
      a: {id: 'a'},
      b: {id: 'b'}
    }
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList 
        {...testProps}
      />
    );

    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
}); 