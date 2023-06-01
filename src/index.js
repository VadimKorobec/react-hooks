import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { UserContext } from 'components/userContext';
import { UserProvider } from 'components/userContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={{ username: 'Mango' }}>
      <UserProvider>
        <App />
      </UserProvider>
    </UserContext.Provider>
  </React.StrictMode>
);
