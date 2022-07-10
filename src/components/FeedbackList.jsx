import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

const FeedbackList = ({ feedback }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedback Comments</p>;
  }

  return (
    <div>
      {feedback.map(item => {
        return <FeedbackItem key={item.key} item={item} />;
      })}
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default FeedbackList;
