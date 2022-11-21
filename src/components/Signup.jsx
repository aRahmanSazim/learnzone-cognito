import React, { useState } from 'react'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div style={{ marginBottom: '2rem' }}>
      <h1>Signup</h1>
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Email</label>
            <input onChange={(event) => setEmail(event.target.value)} value={email} />
            <label htmlFor="password">Password</label>
            <input onChange={(event) => setPassword(event.target.value)} value={password} />
            <input type="submit" value="Singup" />
        </form>
    </div>
  )
}

export default Signup
