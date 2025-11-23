import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  registerWithEmail,
  loginWithEmail,
  signInWithGoogle,
} from "../firebase/auth";
import "../styles/AuthPage.css";

export default function AuthPage() {
  const [mode, setMode] = useState("login"); // 'login' or 'register'
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const toggleMode = () => setMode((m) => (m === "login" ? "register" : "login"));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (mode === "login") {
        await loginWithEmail({ email: form.email, password: form.password });
      } else {
        if (form.password !== form.confirm) {
          setError("Passwords do not match");
          setLoading(false);
          return;
        }
        await registerWithEmail({ name: form.name, email: form.email, password: form.password });
      }
      // on success navigate home
      navigate('/');
    } catch (err) {
      console.error(err);
      setError(err.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError(null);
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate('/');
    } catch (err) {
      console.error(err);
      setError(err.message || "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-top">
          <div className="auth-logo">☕</div>
          <h1 className="auth-title">{mode === "login" ? "Welcome back" : "Create an account"}</h1>
          <p className="auth-sub">{mode === "login" ? "Sign in to continue to Coffee Dates" : "Sign up and start meeting for coffee"}</p>
        </div>

        {error && <div style={{ color: 'crimson', marginBottom: 12 }}>{error}</div>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === "register" && (
            <label className="field">
              <span className="label">Full name</span>
              <input name="name" value={form.name} onChange={handleChange} required />
            </label>
          )}

          <label className="field">
            <span className="label">Email</span>
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>

          <label className="field">
            <span className="label">Password</span>
            <input name="password" type="password" value={form.password} onChange={handleChange} required />
          </label>

          {mode === "register" && (
            <label className="field">
              <span className="label">Confirm password</span>
              <input name="confirm" type="password" value={form.confirm} onChange={handleChange} required />
            </label>
          )}

          <div className="form-actions">
            <button type="submit" className="primary" disabled={loading}>
              {loading ? 'Please wait...' : (mode === "login" ? "Sign in" : "Create account")}
            </button>
            <button type="button" className="ghost" onClick={toggleMode} disabled={loading}>
              {mode === "login" ? "Create an account" : "Have an account? Sign in"}
            </button>
          </div>
        </form>

        <div className="auth-divider">or</div>

        <div className="social-row">
          <button className="social" onClick={handleGoogle} disabled={loading}>Continue with Google</button>
          <button className="social" disabled>Continue with Apple</button>
          <button className="social" disabled>Continue with Github</button>
        </div>
      </div>
    </div>
  );
}
