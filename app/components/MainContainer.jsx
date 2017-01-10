import React, { PropTypes } from 'react';
import styles from '../styles';

function MainContainer(props) {
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      {props.children}
    </div>
  );
}

MainContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContainer;
