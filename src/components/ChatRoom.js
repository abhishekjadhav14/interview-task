import React, { useState } from 'react';

const ChatRoom = ({ userId, conversationId }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    // Replace this with actual Vonage API call to send a message
    // In a real scenario, you will update the messages state with the API response
    const fakeMessage = {
      id: messages.length + 1,
      userId,
      content: message,
    };

    setMessages([...messages, fakeMessage]);
    setMessage('');
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        {messages.map((msg) => (
          <div key={msg.id}>
            <strong>{msg.userId}:</strong> {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatRoom;
