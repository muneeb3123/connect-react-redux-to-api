import React from 'react';
import { useSelector } from 'react-redux';

const UsersComponent = () => {
  const { users, isLoading, error } = useSelector((state) => state.fetchUser);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.firstName} {user.lastName}
        </li>
      ))}
    </ul>
  );
};

export default UsersComponent;
