import React from 'react'

export default function MessageList({ messages = [], username, typingUsers = [] }) {
  return (
    <div className="messages">
      {messages.map((m) => (
        <div key={m.id} className={`message ${m.system ? 'system' : m.sender === username ? 'mine' : 'other'}`}>
          {m.system ? (
            <div className="system-msg">{m.message}</div>
          ) : (
            <>
              <div className="meta">
                <strong>{m.sender}</strong>
                <span className="time">{new Date(m.timestamp).toLocaleTimeString()}</span>
              </div>
              <div className="body">{m.message}</div>
            </>
          )}
        </div>
      ))}

      {typingUsers.length > 0 && (
        <div className="typing">{typingUsers.join(', ')} is typing...</div>
      )}
    </div>
  )
}
