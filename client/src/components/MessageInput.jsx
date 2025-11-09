import React, { useState, useEffect } from 'react'

export default function MessageInput({ onSend, onTyping, onSendPrivate, users = [] }) {
  const [text, setText] = useState('')
  const [toPrivate, setToPrivate] = useState('')

  useEffect(() => {
    const isTyping = text.length > 0
    onTyping(isTyping)
  }, [text, onTyping])

  const submit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    if (toPrivate) {
      onSendPrivate(toPrivate, text.trim())
    } else {
      onSend(text.trim())
    }
    setText('')
  }

  return (
    <form className="message-input" onSubmit={submit}>
      <div className="controls">
        <select value={toPrivate} onChange={(e) => setToPrivate(e.target.value)}>
          <option value="">Global</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>{u.username}</option>
          ))}
        </select>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" />
        <button type="submit">Send</button>
      </div>
    </form>
  )
}
