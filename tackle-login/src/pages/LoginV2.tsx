import React, { useState } from 'react';
import TackleLogo from '../components/TackleLogo';
import Button from '../components/Button';
import TextField, { PasswordField } from '../components/TextField';
import Checkbox from '../components/Checkbox';
import Alert from '../components/Alert';
import './LoginV2.css';

/**
 * Login Screen — Version 2: Split Panel
 *
 * Layout pattern: Two-column split using LeftPanelLayout + ContentLayout.
 * Left panel: brand storytelling panel (elevation-500L intent, dark bg).
 * Right panel: authentication form on white (elevation-500R intent).
 * Elevation: --elevation-500l on left brand panel shadow edge.
 * Typography: TextOpenSans hierarchy throughout.
 * Components: TackleLogo (light variant in left panel, dark in right),
 *             TextField, PasswordField, Checkbox, Button, Alert.
 * Color tokens: --color-brand-primary-700 (left panel bg),
 *               --color-brand-teal-500 (accents), --color-neutral-000 (right panel).
 */
const LoginV2: React.FC = () => {
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
    setTimeout(() => {
      setLoading(false);
      setError('Invalid email or password. Please try again.');
    }, 1800);
  };

  return (
    <div className="v2-page">

      {/* ── LEFT PANEL — Brand / LeftPanelLayout (elevation-500L) ── */}
      <aside className="v2-left" aria-label="Tackle brand panel">

        {/* Decorative mesh grid overlay */}
        <div className="v2-left__mesh" aria-hidden="true" />

        {/* Decorative floating orbs */}
        <div className="v2-left__orb v2-left__orb--1" aria-hidden="true" />
        <div className="v2-left__orb v2-left__orb--2" aria-hidden="true" />

        <div className="v2-left__inner">
          {/* Logo — light variant */}
          <div className="v2-left__logo">
            <TackleLogo variant="full" color="light" height={40} />
          </div>

          {/* Hero content */}
          <div className="v2-left__hero">
            <div className="v2-left__badge">Cloud GTM Platform</div>

            <h2 className="v2-left__headline">
              Accelerate your<br />
              <span className="v2-left__headline--accent">cloud revenue</span>
            </h2>

            <p className="v2-left__body">
              Tackle unifies co-sell, marketplace listings, and partner operations
              on a single intelligent platform — so you can close deals faster
              and scale cloud revenue with confidence.
            </p>
          </div>

          {/* Feature list */}
          <ul className="v2-left__features" aria-label="Platform highlights">
            {[
              { icon: '⚡', text: 'Real-time co-sell pipeline visibility' },
              { icon: '🛒', text: 'Multi-cloud marketplace in one place' },
              { icon: '🤝', text: 'Partner-led growth at scale' },
            ].map((f) => (
              <li key={f.text} className="v2-left__feature">
                <span className="v2-left__feature-icon" aria-hidden="true">{f.icon}</span>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>

          {/* Testimonial */}
          <blockquote className="v2-left__quote">
            <p>
              "Tackle cut our marketplace transaction time from weeks to hours."
            </p>
            <footer>
              <strong>Sarah K.</strong> · VP of Cloud Partnerships
            </footer>
          </blockquote>
        </div>
      </aside>

      {/* ── RIGHT PANEL — Auth form / ContentLayout (elevation-500R) ── */}
      <main className="v2-right" role="main">
        <div className="v2-right__inner">

          {/* Mobile-only logo */}
          <div className="v2-right__mobile-logo" aria-hidden="true">
            <TackleLogo variant="full" color="dark" height={34} />
          </div>

          {/* Form header */}
          <header className="v2-right__header">
            <h1 className="v2-right__title">Sign in</h1>
            <p className="v2-right__subtitle">
              Access your Tackle Platform workspace
            </p>
          </header>

          {/* Error alert */}
          {error && (
            <Alert variant="error" className="v2-right__alert">
              {error}
            </Alert>
          )}

          {/* Sign-in form */}
          <form className="v2-right__form" onSubmit={handleSubmit} noValidate>
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

            <div className="v2-right__row">
              <Checkbox
                label="Keep me signed in"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <a href="#" className="v2-right__link v2-right__link--sm">
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              fullWidth
              size="lg"
              loading={loading}
            >
              Sign in to Tackle
            </Button>
          </form>

          {/* SSO separator */}
          <div className="v2-right__sep" aria-hidden="true">
            <span>or continue with</span>
          </div>

          {/* SSO options */}
          <div className="v2-right__sso">
            <Button
              variant="secondary"
              fullWidth
              leftIcon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              }
            >
              Google Workspace
            </Button>

            <Button
              variant="secondary"
              fullWidth
              leftIcon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              }
            >
              Single Sign-On (SSO)
            </Button>
          </div>

          {/* Footer */}
          <footer className="v2-right__footer">
            <p>
              New to Tackle?{' '}
              <a href="#" className="v2-right__link">Request access</a>
            </p>
            <p className="v2-right__legal">
              © {new Date().getFullYear()} Tackle.io, an AppDirect company.{' '}
              <a href="#" className="v2-right__link">Terms</a>
              {' · '}
              <a href="#" className="v2-right__link">Privacy</a>
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default LoginV2;
