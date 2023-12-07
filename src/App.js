import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import CreateConversation from './components/CreateConversation';
import AddToConversation from './components/AddToConversation';
import ChatRoom from './components/ChatRoom';

const App = () => {
  const [userId, setUserId] = useState(null);
  const [conversationId, setConversationId] = useState(null);

  return (
    <Router>
      <div>
        <nav>
          <ul 
          style={{
            display:'flex',
            gap:"20px",
            listStyle: 'none',
            background:'black',
            padding:'20px'
          }}>
            <li style={{
              StyleType: 'none',
            }}>
              <Link to="/">Create User</Link>
            </li>
            <li>
              <Link to="/create-conversation">Create Conversation</Link>
            </li>
            <li>
              <Link to="/add-to-conversation">Add to Conversation</Link>
            </li>
            <li>
              <Link to="/chat-room">Chat Room</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CreateUser setUserId={setUserId} />} />
          <Route
            path="/create-conversation"
            element={<CreateConversation setConversationId={setConversationId} />}
          />
          <Route
            path="/add-to-conversation"
            element={<AddToConversation userId={userId} conversationId={conversationId} />}
          />
          <Route
            path="/chat-room"
            element={<ChatRoom userId={userId} conversationId={conversationId} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
