import React, { useState } from 'react'

export default function Login({ onSubmit }) {
  const [name, setName] = useState('')

  const submit = (e) => {
    e.preventDefault()
    if (name.trim()) onSubmit(name.trim())
  }

  return (
    <form className="login" onSubmit={submit}>
      <label>Enter a username to join</label>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
      <button type="submit">Join Chat</button>
    </form>
  )
}
