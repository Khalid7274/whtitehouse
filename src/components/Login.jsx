import React from 'react';

export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

function App() {
  const handleLogin = () => {
    // Updating the user object with arbitrary values
    user.email = 'newemail@example.com';
    user.password = 'newpassword';
    user.loggedIn = true;

    // Logging the updated user object
    console.log('User updated:', user);
  };

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={handleLogin}>Login</button>
      </p>
    </div>
  );
}

export default App;
