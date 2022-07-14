import { FaEdit, FaTimes } from 'react-icons/fa';
import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import PropTypes from 'prop-types';

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => deleteFeedback(item.id)}>
        <FaTimes color='purple' />
      </button>
      <button className='edit' onClick={() => editFeedback(item)}>
        <FaEdit color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
};

FeedbackItem.propTypes = {
  item: PropTypes.object,
};

export default FeedbackItem;
