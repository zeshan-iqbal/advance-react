import React, { PureComponent } from 'react';
import Article from './Article';

class ArticleList extends PureComponent {  
  render() { 
    const {articles} = this.props;  
    return (
      <div>      
        {
          Object.values(articles).map(article => 
            <Article
              key={article.id}
              article={article}            
            />
          )}
      </div>
    );
  }
}


export default ArticleList;