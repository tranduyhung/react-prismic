import React from 'react';
import ReactDOM from 'react-dom';
import PrismicApp from './PrismicApp';
import Footer from './Components/Footer';

ReactDOM.render(
  <PrismicApp />,
  document.getElementById('root'),
);

ReactDOM.render(
  <Footer />,
  document.getElementById('footer'),
);
