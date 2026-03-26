import React, { useState } from 'react';
import LoginV1 from './pages/LoginV1';
import LoginV2 from './pages/LoginV2';
import './App.css';

type Version = 'v1' | 'v2';

/**
 * App shell with a fixed version switcher tab bar
 * so both designs can be previewed side-by-side.
 */
const App: React.FC = () => {
  const [active, setActive] = useState<Version>('v1');

  return (
    <div className="app">
      {/* Version switcher — GlobalHeaderLayout-style strip */}
      <nav className="app__switcher" aria-label="Login design version selector" role="tablist">
        <div className="app__switcher-inner">
          <span className="app__switcher-label">Design Version:</span>

          <button
            role="tab"
            aria-selected={active === 'v1'}
            className={`app__tab ${active === 'v1' ? 'app__tab--active' : ''}`}
            onClick={() => setActive('v1')}
          >
            <span className="app__tab-badge">V1</span>
            Centered Card
          </button>

          <button
            role="tab"
            aria-selected={active === 'v2'}
            className={`app__tab ${active === 'v2' ? 'app__tab--active' : ''}`}
            onClick={() => setActive('v2')}
          >
            <span className="app__tab-badge app__tab-badge--teal">V2</span>
            Split Panel
          </button>
        </div>
      </nav>

      {/* Design canvas */}
      <div className="app__canvas" role="tabpanel">
        {active === 'v1' ? <LoginV1 /> : <LoginV2 />}
      </div>
    </div>
  );
};

export default App;
