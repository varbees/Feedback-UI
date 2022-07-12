import React from 'react';
import Card from '../components/shared/Card';
import { BsGithub } from 'react-icons/bs';

function AboutPage() {
  return (
    <Card>
      <div className='about'>
        <h1>Project Info</h1>
        <p>A React App that allows users to submit feedback about a product.</p>
        <p>Version: 1.0.0</p>
      </div>
      <p className='message'>
        <a href='www.github.com/varbees'>
          <BsGithub />
          Varbees
        </a>
      </p>
      <p>
        <a href='/'>Back</a>
      </p>
    </Card>
  );
}

export default AboutPage;
