import React, { useState } from 'react';

const HomePage = () => {
  const token = localStorage.getItem('token');
  const [me, _] = useState<string>(token || '');

  const onLogout = () => {
    localStorage.removeItem('token');
  };

  return (
    <div>
      <p>
        {!me ? (
          <a href="/auth/login">login</a>
        ) : (
          <a href="/" onClick={onLogout}>
            logout
          </a>
        )}
      </p>

      <p>
        <a href="/auth/signup">signup</a>
      </p>

      {me && (
        <p>
          <a href="/todo">todo</a>
        </p>
      )}

      <p>
        <a href="/polls">polls</a>
      </p>
    </div>
  );
};

export default HomePage;
