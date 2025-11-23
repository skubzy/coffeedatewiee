// src/components/Header.js
import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../logo2.png';
import '../styles/Header.css';
import { useAuth } from '../context/AuthContext';

function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <header className="header-container">
      <div className="header-content">
        <img src={logo} className="App-logo" alt="Coffee Dates logo" />
        <div style={{ flex: 1 }}>
          <h1 className="header-title">Coffee Dates</h1>
          <p className="header-subtitle">Find the coziest coffee spot — and someone to share it with!</p>
        </div>

        {user ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ textAlign: 'right', marginRight: 8 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{user.displayName || user.email}</div>
              <div style={{ fontSize: 12, color: '#666' }}>{user.email}</div>
            </div>
            <button
              className="header-auth-btn"
              aria-label="Sign out"
              onClick={async () => { await logout(); navigate('/'); }}
              title="Sign out"
            >
              <span className="auth-icon">🔓</span>
            </button>
          </div>
        ) : (
          <button
            className="header-auth-btn"
            aria-label="Sign in"
            onClick={() => navigate('/auth')}
          >
            <span className="auth-icon">👤</span>
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
