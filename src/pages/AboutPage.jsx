import React from 'react';
import Card from '../components/shared/Card';
import { BsGithub } from 'react-icons/bs';
import Button from '../components/shared/Button';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>Project Info</h1>
        <p>A React App that allows users to submit feedback about a product.</p>
        <p>Version: 1.0.0</p>
      </div>
      <p className='message'>
        <a href='https://github.com/varbees/Feedback-UI'>
          <BsGithub /> {'  '}Varbees
        </a>
      </p>
      <p>
        <Link to='/'>
          <Button version='secondary'>Back</Button>
        </Link>
      </p>
    </Card>
  );
}

export default AboutPage;
