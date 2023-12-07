import React from 'react';

const AddToConversation = ({ userId, conversationId }) => {
  // Replace this with actual Vonage API call to add the user to the conversation
  const handleAddToConversation = async () => {
    console.log('Adding user to conversation');
  };

  return (
    <div>
      <h2>Add to Conversation</h2>
      <button onClick={handleAddToConversation}>Add to Conversation</button>
    </div>
  );
};

export default AddToConversation;
