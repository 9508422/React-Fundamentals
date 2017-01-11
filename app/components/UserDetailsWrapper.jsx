import React, { PropTypes } from 'react';

function UserDetailsWrapper({ children, header }) {
  return (
    <div className="col-sm-6">
      <p className="lead">{header}</p>
      {children}
    </div>
  );
}

UserDetailsWrapper.header = {
  header: PropTypes.string.isRequired,
};

UserDetailsWrapper.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default UserDetailsWrapper;
