import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = ({ text, bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={headerStyles}>
      <div className='container'>
        <Link to='/'>
          <h1 className=''>{text}</h1>
        </Link>
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
