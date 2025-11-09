import React from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import UsersList from './UsersList'
import { useSocket } from '../socket/socket'

export default function Chat({ username }) {
  const { messages, users, sendMessage, sendPrivateMessage, typingUsers, setTyping } = useSocket()

  return (
    <div className="chat-root">
      <aside className="sidebar">
        <h3>Online</h3>
        <UsersList users={users} />
      </aside>

      <main className="chat-main">
        <MessageList messages={messages} username={username} typingUsers={typingUsers} />
        <MessageInput onSend={(msg) => sendMessage(msg)} onTyping={(val) => setTyping(val)} onSendPrivate={(to, msg) => sendPrivateMessage(to, msg)} users={users} />
      </main>
    </div>
  )
}
