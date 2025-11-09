import React from 'react'

export default function UsersList({ users = [] }) {
  return (
    <ul className="users-list">
      {users.map((u) => (
        <li key={u.id}>{u.username}</li>
      ))}
    </ul>
  )
}
