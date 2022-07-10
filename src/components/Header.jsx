import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <h1 className=''>{text}</h1>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: 'App Name',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#d01565',
};

Header.protoTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
