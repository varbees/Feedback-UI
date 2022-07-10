import React, { useState } from 'react';
import FeedbackList from './components/FeedbackList';
import Header from './components/Header';
import FeedbackData from './data/FeedbackData';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  return (
    <>
      <Header text='Feedback UI' />
      <FeedbackList feedback={feedback} />
    </>
  );
};

export default App;
