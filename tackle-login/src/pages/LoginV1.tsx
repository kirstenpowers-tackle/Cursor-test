import React, { useState } from 'react';
import TackleLogo from '../components/TackleLogo';
import Button from '../components/Button';
import TextField, { PasswordField } from '../components/TextField';
import Checkbox from '../components/Checkbox';
import Alert from '../components/Alert';
import './LoginV1.css';

/**
 * Login Screen — Version 1: Centered Card
 *
 * Layout pattern: ContentLayout (centered) wrapping a Tackle Card.
 * Elevation: --elevation-300 on card (selected/prominent card intent).
 * Typography: TextOpenSans hierarchy — page title, labels, helper, body.
 * Components used: TackleLogo, TextField, PasswordField, Checkbox, Button, Alert.
 * Color tokens: --color-neutral-010 (page bg), --color-neutral-000 (card),
 *               --color-brand-primary-500 (primary action, links),
 *               --color-brand-teal-500 (accent divider).
 */
const LoginV1: React.FC = () => {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Please enter your work email address.');
      return;
    }
    if (!password) {
      setError('Please enter your password.');
      return;
    }

    setLoading(true);
    // Simulate async auth
    setTimeout(() => {
      setLoading(false);
      setError('Invalid email or password. Please try again.');
    }, 1800);
  };

  return (
    <div className="v1-page">
      {/* Subtle brand gradient background */}
      <div className="v1-page__bg" aria-hidden="true" />

      <main className="v1-content" role="main">
        {/* Tackle Card — elevation-300 */}
        <div className="v1-card" aria-label="Sign in to Tackle">

          {/* Card header */}
          <header className="v1-card__header">
            <TackleLogo variant="full" color="dark" height={38} />
            <div className="v1-card__divider" aria-hidden="true" />
            <h1 className="v1-card__title">Welcome back</h1>
            <p className="v1-card__subtitle">
              Sign in to your Tackle Platform account
            </p>
          </header>

          {/* Error alert */}
          {error && (
            <Alert variant="error" className="v1-card__alert">
              {error}
            </Alert>
          )}

          {/* Sign-in form */}
          <form className="v1-card__form" onSubmit={handleSubmit} noValidate>
            <TextField
              label="Work email"
              type="email"
              placeholder="you@yourcompany.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              autoFocus
              leftIcon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              }
            />

            <PasswordField
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />

            <div className="v1-card__row">
              <Checkbox
                label="Keep me signed in"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <a href="#" className="v1-card__link v1-card__link--sm">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              loading={loading}
            >
              Sign in
            </Button>
          </form>

          {/* SSO separator */}
          <div className="v1-card__sep" aria-hidden="true">
            <span>or</span>
          </div>

          {/* SSO button */}
          <Button
            variant="secondary"
            fullWidth
            size="lg"
            leftIcon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            }
          >
            Continue with SSO
          </Button>

          {/* Footer */}
          <footer className="v1-card__footer">
            <p>
              New to Tackle?{' '}
              <a href="#" className="v1-card__link">Request access</a>
            </p>
            <p className="v1-card__legal">
              By signing in you agree to Tackle's{' '}
              <a href="#" className="v1-card__link">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="v1-card__link">Privacy Policy</a>.
            </p>
          </footer>
        </div>
      </main>

      {/* Page footer */}
      <div className="v1-page__footer">
        <span>© {new Date().getFullYear()} Tackle.io, an AppDirect company. All rights reserved.</span>
      </div>
    </div>
  );
};

export default LoginV1;
