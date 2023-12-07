import React, { useState } from 'react';

const CreateConversation = ({ userId, setConversationId }) => {
  const [conversationName, setConversationName] = useState('');

  const handleCreateConversation = async () => {
    // Replace this with actual Vonage API call to create a conversation
    // In a real scenario, you will get the conversation ID from the API response
    const fakeConversationId = '456';
    setConversationId(fakeConversationId);
  };

  return (
    <div>
      <h2>Create Conversation</h2>
      <input
        type="text"
        placeholder="Enter conversation name"
        value={conversationName}
        onChange={(e) => setConversationName(e.target.value)}
      />
      <button onClick={handleCreateConversation}>Create Conversation</button>
    </div>
  );
};

export default CreateConversation;
