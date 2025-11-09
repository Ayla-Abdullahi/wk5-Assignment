import React, { useState, useEffect } from 'react'
import { useSocket } from './socket/socket'
import Login from './components/Login'
import Chat from './components/Chat'

export default function App() {
  const { socket, isConnected } = useSocket()
  const [username, setUsername] = useState(localStorage.getItem('username') || '')

  useEffect(() => {
    if (username) {
      socket.auth = { username }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])

  return (
    <div className="app-container">
      <h1>Week 5 — Socket.io Chat</h1>
      {!username ? (
        <Login onSubmit={(name) => { setUsername(name); localStorage.setItem('username', name); socket.connect(); socket.emit('user_join', name); }} />
      ) : (
        <Chat username={username} />
      )}
      <footer className="status-bar">Socket: {isConnected ? 'connected' : 'disconnected'}</footer>
    </div>
  )
}
