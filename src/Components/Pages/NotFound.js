import React from 'react';
import Config from '../../Config';

export default class NotFound extends React.Component {
  componentDidMount() {
    document.title = Config.page_not_found;
  }

  render() {
    return <div>{Config.page_not_found}</div>;
  }
}
