import React from 'react';

export default class Header extends React.Component {
  render() {
    let url = this.props.url;
    let hasUrl = true;

    if (url === '' || typeof url === "undefined") {
      hasUrl = false;
    }

    return (
      <div>
      {hasUrl &&
        <header>
          <a href={`${url}`}><div className="home"></div></a>
        </header>
      }
      </div>
    )
  }
}
