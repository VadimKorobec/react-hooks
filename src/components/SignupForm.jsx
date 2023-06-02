import { useState } from 'react';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = event => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handlePasswordChange = event => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  return (
    <div>
      <form>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={handleEmailChange}
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
            value={password}
          />
        </label>
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};
