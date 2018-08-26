import React from 'react';

export default class Main extends React.Component {
  render() {
    let image = '';
    let heading = '';
    let title = this.props.title;

    if (this.props.title) {
      heading = <h1 className="headline">{title}</h1>
    }

    if (this.props.image) {
      image = <img alt={title} src={this.props.image} />
    }

    return (
      <main>
        <article>
          {heading}

          {image}

          {this.props.content}
        </article>
      </main>
    )
  }
}
