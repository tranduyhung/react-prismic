import React from 'react';
import PrismicReact from 'prismic-reactjs';

export default class Posts extends React.Component {
  render() {
    let posts = this.props.posts;
    let list = posts.map(function(post, index){
      return (
        <div key={post.id}>
          <h2><a href={`/blog/${post.uid}`}>{PrismicReact.RichText.asText(post.data.title)}</a></h2>
          <p>{PrismicReact.RichText.asText(post.data.description)}</p>
        </div>
      )
    });

    let heading = '';

    if (this.props.title) {
      heading = <h1 className="headline">{this.props.title}</h1>
    }


    return (
      <main>
        <article>
          {heading}

          <div className="article-list">
            {list}
          </div>
        </article>
      </main>
    )
  }
}
