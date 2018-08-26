import React from 'react';
import Config from '../../Config';

export default class NextButton extends React.Component {
  render() {
    let button = '';

    if (this.props.current_page < this.props.total_pages) {
      let next_page = this.props.current_page + 1;
      button = <a className="btn-next" href={`/blog?page=${next_page}`}>{Config.next_page}</a>
    }

    return button;
  }
}
