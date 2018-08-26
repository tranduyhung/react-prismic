import React from 'react';
import NotFound from '../Pages/NotFound';
import PrismicReact from 'prismic-reactjs';
import Config from '../../Config';
import Loading from '../Loading';

export default class Post extends React.Component {
  state = {
    post: null,
    notFound: false,
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
    document.title = Config.site_title;
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      return props.prismicCtx.api.getByUID(Config.blog_post_api_id, props.match.params.uid, {}, (err, post) => {
        if (post) {
          this.setState({ post });
          document.title = PrismicReact.RichText.asText(post.data.title) + ' - ' + Config.site_title;
        } else {
          this.setState({ notFound: !post });
        }
      });
    }

    return null;
  }

  render() {
    if (this.state.post) {
      let image = '';
      let title = PrismicReact.RichText.asText(this.state.post.data.title);

      if (this.state.post.data.image.url) {
        image = <img alt={title} src={this.state.post.data.image.url} />
      }

      return (
        <div>
          <h1>{title}</h1>

          {image}

          {PrismicReact.RichText.render(this.state.post.data.content, this.props.prismicCtx.linkResolver)}
        </div>
      )
    } else if (this.state.notFound) {
      return <NotFound />;
    }

    return <Loading />;
  }
}
