import React from 'react';
import Config from '../Config';

export default class Header extends React.Component {
  render() {
    return (
      <footer>
        <div className="links">
          <a href="/">Home</a>
          <a href="/blog">{Config.blog_title}</a>
        </div>

        <p class="copy"><small>Powered by <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> and <a href="https://prismic.io/" target="_blank" rel="noopener noreferrer">Prismic</a> | Theme by <a href="http://webjeda.com" target="_blank" rel="noopener noreferrer">webjeda</a></small></p>
      </footer>
    )
  }
}
