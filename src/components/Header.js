import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <div className='container'>
      <h1 className=''>{text}</h1>
    </div>
  );
};

Header.defaultProps = {
  text: 'App Name',
};

Header.protoTypes = {
  text: PropTypes.string,
};

export default Header;
