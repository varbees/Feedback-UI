import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackItem from './FeedbackItem';

const FeedbackList = ({ handleDelete }) => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <p className='message'>No Feedback Comments</p>;
  }

  return (
    <div>
      <AnimatePresence>
        {feedback.map(item => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FeedbackList;
