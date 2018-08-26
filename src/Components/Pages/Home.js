import React from 'react';
import PrismicReact from 'prismic-reactjs';
import NotFound from './NotFound';
import Main from '../Main';
import Header from '../Header';
import Loading from '../Loading';
import Config from '../../Config';

export default class Home extends React.Component {
  state = {
    page: null,
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
      return props.prismicCtx.api.getByUID(Config.home_page_api_id, 'home', {}, (err, page) => {
        if (page) {
          this.setState({ page });
          document.title = PrismicReact.RichText.asText(page.data.title) + ' - ' + Config.site_title;
        } else {
          this.setState({ notFound: !page });
        }
      });
    }

    return null;
  }

  render() {
    if (this.state.page) {
      return [
        <Header key="header" />,
        <Main key="main"
          title={PrismicReact.RichText.asText(this.state.page.data.title)}
          image={this.state.page.data.image.url}
          content={PrismicReact.RichText.render(this.state.page.data.content)} />
      ];
    } else if (this.state.notFound) {
      return <NotFound />;
    }

    return <Loading />;
  }
}
