import React from 'react';

export default function UsersPage() {
  return (
    <div>
      <h1>Users</h1>

      <User name="John" age={12} />
      <User name="Alice" age={42} />
    </div>
  );
}

function User(props) {
  return (
    <div>
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
    </div>
  );
}
