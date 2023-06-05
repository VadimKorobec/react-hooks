import { useState } from 'react';

export const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   const handleEmailChange = event => {
  //     console.log(event.target.value);
  //     setEmail(event.target.value);
  //   };

  //   const handlePasswordChange = event => {
  //     console.log(event.target.value);
  //     setPassword(event.target.value);
  //   };

  const handleChange = event => {
    const { name, value } = event.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <form>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>
        <label>
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};
