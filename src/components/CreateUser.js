import React, { useState } from 'react';

const CreateUser = ({ setUserId }) => {
  const [username, setUsername] = useState('');

  const handleCreateUser = async () => {
    // Replace this with actual Vonage API call to create a user
    // In a real scenario, you will get the user ID from the API response
    const fakeUserId = '123';
    setUserId(fakeUserId);
  };
  

  return (
    <div>
      <h2>Create User</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default CreateUser;
