import React from 'react';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

export default class Pagination extends React.Component {
  render() {
    return (
      <div className="pagination">
        <PrevButton key="prevButton" current_page={this.props.current_page} />
        <NextButton key="nextButton" current_page={this.props.current_page} total_pages={this.props.total_pages} />
      </div>
    )
  }
}
