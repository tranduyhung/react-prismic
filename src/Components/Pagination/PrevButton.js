import React from 'react';
import Config from '../../Config';

export default class PrevButton extends React.Component {
  render() {
    let button = '';

    if (this.props.current_page > 1) {
      let next_page = this.props.current_page - 1;
      button = <a className="btn-prev" href={`/blog?page=${next_page}`}>{Config.previous_page}</a>
    }

    return button;
  }
}
