import React, { PropTypes } from 'react';
import { transparentBg } from '../styles';

function MainContainer({ children }) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={transparentBg}>
      {children}
    </div>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
