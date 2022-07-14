import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'This is feedback 1',
    },
    {
      id: 2,
      rating: 5,
      text: 'This is feedback 2',
    },
    {
      id: 3,
      rating: 7,
      text: 'This is feedback 3',
    },
    {
      id: 4,
      rating: 9,
      text: 'This is feedback 4',
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    editMode: false,
  });

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = item => {
    setFeedbackEdit({
      item,
      editMode: true,
    });
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map(item =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
