import React from 'react';
import Prismic from 'prismic-javascript';
import Posts from './Posts';
import Header from '../Header';
import Loading from '../Loading';
import Pagination from '../Pagination/Pagination';
import Config from '../../Config';

export default class Blog extends React.Component {
  state = {
    current_page: 1,
    total_pages: null,
    posts: null,
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  componentDidMount() {
    document.title = Config.blog_title + ' - ' + Config.site_title;
  }

  fetchPage(props) {
    var t = this;

    if (props.prismicCtx) {
      let page_number = new URLSearchParams(this.props.location.search).get('page');

      if (page_number === null || isNaN(page_number) || page_number < 0) {
        page_number = 1;
      } else {
        page_number =  parseInt(page_number, 8);
      }

      return props.prismicCtx.api.query(
          Prismic.Predicates.at('document.type', Config.blog_post_api_id),
          { pageSize : Config.pagination, page : page_number, orderings : '[my.post.date desc]' }
      ).then(function(response) {
        if (response) {
          t.setState({
            current_page: response.page,
            total_pages: response.total_pages,
            posts: response.results
          });
        }
      });
    }

    return null;
  }

  render() {
    if (this.state.posts !== null && this.state.posts.length > 0) {
      const posts = this.state.posts;
      const current_page = this.state.current_page;
      const total_pages = this.state.total_pages;

      return [
        <Header key="header" current_page={current_page} total_pages={total_pages}/>,
        <Posts key="posts" title="Blog" posts={posts} />,
        <Pagination key="pagination" current_page={current_page} total_pages={total_pages} />,
      ]
    } else if (this.state.posts !== null && this.state.posts.length === 0) {
      return <p>{Config.no_posts_found}</p>;
    }

    return <Loading />;
  }
}
