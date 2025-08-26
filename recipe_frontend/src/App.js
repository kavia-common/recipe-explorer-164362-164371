import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import './design/common.css';
import './design/sign-in.css';
import './design/sign-up.css';
import './design/home.css';

/**
 * Layout shell that provides the theme toggle and renders child routes
 */
function Shell({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));

  const loc = useLocation();
  const showTopNav = !['/'].includes(loc.pathname); // optional: hide on sign-in if desired

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', background: 'transparent' }}>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        {showTopNav && (
          <nav style={{ position: 'absolute', left: 20, top: 20 }}>
            <Link className="App-link" to="/">Sign In</Link>{' | '}
            <Link className="App-link" to="/signup">Sign Up</Link>{' | '}
            <Link className="App-link" to="/home">Home</Link>
          </nav>
        )}
      </header>
      {children}
    </div>
  );
}

/**
// PUBLIC_INTERFACE
 * SignInScreen renders the Sign In UI based on Figma-extracted layout
 */
function SignInScreen() {
  return (
    <main id="sign-in-11-235" className="screen-canvas" style={{ background: 'var(--color-ffffff)' }}>
      <div id="status-bar" className="status-bar abs" aria-hidden="true">
        <div id="status-time" className="time abs">19:27</div>
      </div>

      <h1 id="hello-text" className="title-hello abs">Hello,</h1>
      <div id="welcome-text" className="title-welcome abs">Welcome Back!</div>

      <div id="email-field" className="input-field">
        <label htmlFor="email-input" className="label">Email</label>
        <div className="box" aria-hidden="true"></div>
        <input id="email-input" name="email" type="email" placeholder="Enter Email" autoComplete="email" />
      </div>

      <div id="password-field" className="input-field">
        <label htmlFor="password-input" className="label">Enter Password</label>
        <div className="box" aria-hidden="true"></div>
        <input id="password-input" name="password" type="password" placeholder="Enter Password" autoComplete="current-password" />
      </div>

      <button id="sign-in-btn" className="big-button btn" type="button" aria-label="Sign In" onClick={() => alert('Sign In pressed (stub).')}>
        <span className="label">Sign In</span>
        <span className="icon-arrow-right" aria-hidden="true"></span>
      </button>

      <a id="forgot-password" className="forgot-password abs" href="#!" role="link" onClick={(e) => { e.preventDefault(); alert('Forgot Password tapped (stub).'); }}>Forgot Password?</a>

      <div id="or-with" className="or-with">
        <span className="line" aria-hidden="true"></span>
        <span className="text">Or Sign in With</span>
        <span className="line" aria-hidden="true"></span>
      </div>

      <button id="btn-google" className="social-btn btn" type="button" aria-label="Sign in with Google" onClick={() => alert('Google Sign In (stub).')}>
        <span className="glyph google" aria-hidden="true"></span>
      </button>
      <button id="btn-facebook" className="social-btn btn" type="button" aria-label="Sign in with Facebook" onClick={() => alert('Facebook Sign In (stub).')}>
        <span className="glyph facebook" aria-hidden="true"></span>
      </button>

      <div id="signup-prompt" className="signup-prompt">
        Don’t have an account? <Link to="/signup">Sign up</Link>
      </div>

      <div id="home-indicator" className="home-indicator abs" aria-hidden="true"></div>
    </main>
  );
}

/**
// PUBLIC_INTERFACE
 * SignUpScreen renders the Sign Up UI based on Figma-extracted layout
 */
function SignUpScreen() {
  return (
    <main id="sign-up-30-403" className="screen-canvas" style={{ background: 'var(--color-ffffff)' }}>
      <div id="status-bar" className="status-bar abs" aria-hidden="true">
        <div id="status-time" className="time abs">19:27</div>
      </div>

      <h1 id="title-create" className="title-hello abs">Create an account</h1>
      <div id="subtitle-help" className="title-welcome abs">Let’s help you set up your account, it won’t take long.</div>

      <div id="name-field" className="input-field">
        <label htmlFor="name-input" className="label">Name</label>
        <div className="box" aria-hidden="true"></div>
        <input id="name-input" name="name" type="text" placeholder="Enter Name" autoComplete="name" />
      </div>

      <div id="email-field" className="input-field">
        <label htmlFor="email-input" className="label">Email</label>
        <div className="box" aria-hidden="true"></div>
        <input id="email-input" name="email" type="email" placeholder="Enter Email" autoComplete="email" />
      </div>

      <div id="password-field" className="input-field">
        <label htmlFor="password-input" className="label">Password</label>
        <div className="box" aria-hidden="true"></div>
        <input id="password-input" name="password" type="password" placeholder="Enter Passwrod" autoComplete="new-password" />
      </div>

      <div id="confirm-field" className="input-field">
        <label htmlFor="confirm-input" className="label">Confirm Password</label>
        <div className="box" aria-hidden="true"></div>
        <input id="confirm-input" name="confirm_password" type="password" placeholder="Retype Password" autoComplete="new-password" />
      </div>

      <div id="accept-terms" className="abs" role="group" aria-label="Accept terms and conditions">
        <input id="accept-checkbox" type="checkbox" />
        <label id="accept-label" htmlFor="accept-checkbox">Accept terms &amp; Condition</label>
      </div>

      <button
        id="sign-up-btn"
        className="big-button btn"
        type="button"
        aria-label="Sign Up"
        onClick={() => alert('Sign Up submitted (stub).')}
      >
        <span className="label">Sign Up</span>
        <span className="icon-arrow-right" aria-hidden="true"></span>
      </button>

      <div id="or-with" className="or-with">
        <span className="line" aria-hidden="true"></span>
        <span className="text">Or Sign in With</span>
        <span className="line" aria-hidden="true"></span>
      </div>

      <button id="btn-google" className="social-btn btn" type="button" aria-label="Sign in with Google" onClick={() => alert('Google Sign In (stub).')}>
        <span className="glyph google" aria-hidden="true"></span>
      </button>
      <button id="btn-facebook" className="social-btn btn" type="button" aria-label="Sign in with Facebook" onClick={() => alert('Facebook Sign In (stub).')}>
        <span className="glyph facebook" aria-hidden="true"></span>
      </button>

      <div id="already-member" className="signup-prompt">
        Already a member? <Link to="/">Sign In</Link>
      </div>

      <div id="home-indicator" className="home-indicator abs" aria-hidden="true"></div>
    </main>
  );
}

/**
// PUBLIC_INTERFACE
 * HomeScreen renders the Home UI based on Figma-extracted layout
 */
function HomeScreen() {
  return (
    <main id="home-17-80" className="screen-canvas" style={{ background: 'var(--color-ffffff)' }}>
      <div id="status-bar" className="status-bar abs" aria-hidden="true">
        <div id="status-time" className="time abs">19:27</div>
      </div>

      <h1 id="hello-jega" className="title-hello abs">Hello Jega</h1>
      <div id="cooking-today" className="title-welcome abs">What are you cooking today?</div>

      <div id="avatar" className="abs" role="img" aria-label="Profile avatar"></div>

      <div id="search" className="abs" role="search">
        <div className="search-box" aria-hidden="true"></div>
        <span className="search-icon" aria-hidden="true"></span>
        <input id="search-input" type="text" aria-label="Search recipes" placeholder="Search recipe" />
      </div>

      <button id="btn-filter" className="abs btn" type="button" aria-label="Open filters" onClick={() => alert('Open filters (stub).')}>
        <span className="filter-bg" aria-hidden="true"></span>
        <span className="icon-gear" aria-hidden="true"></span>
      </button>

      <div id="categories" className="abs" role="tablist" aria-label="Categories" onClick={(e) => {
        const btn = e.target.closest('.chip');
        if (!btn) return;
        const container = e.currentTarget;
        container.querySelectorAll('.chip').forEach(c => {
          c.classList.remove('chip-active');
          c.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('chip-active');
        btn.setAttribute('aria-selected', 'true');
      }}>
        <button className="chip chip-active" role="tab" aria-selected="true" data-category="All">All</button>
        <button className="chip" role="tab" aria-selected="false" data-category="Indian">Indian</button>
        <button className="chip" role="tab" aria-selected="false" data-category="Italian">Italian</button>
        <button className="chip" role="tab" aria-selected="false" data-category="Asian">Asian</button>
        <button className="chip" role="tab" aria-selected="false" data-category="Chinese">Chinese</button>
        <button className="chip" role="tab" aria-selected="false" data-category="Fruit">Fruit</button>
        <button className="chip" role="tab" aria-selected="false" data-category="Vegetables">Vegetables</button>
        <button className="chip" role="tab" aria-selected="false" data-category="Protein">Protein</button>
        <button className="chip" role="tab" aria-selected="false" data-category="Cereal">Cereal</button>
        <button className="chip" role="tab" aria-selected="false" data-category="Local Dishes">Local Dishes</button>
      </div>

      <section id="dishes" className="abs" aria-label="Featured dishes">
        <div className="cards">
          {[
            { title: 'Classic Greek Salad', time: '15 Mins', rating: '4.5' },
            { title: 'Crunchy Nut Coleslaw', time: '10 Mins', rating: '3.5' },
            { title: 'Shrimp Chicken Andouille Sausage Jambalaya', time: '10 Mins', rating: '3.0' },
            { title: 'Barbecue Chicken Jollof Rice', time: '10 Mins', rating: '4.5' },
            { title: 'Portuguese Piri Piri Chicken', time: '10 Mins', rating: '4.5' },
          ].map((c, i) => (
            <article className="card" key={i}>
              <div className="image-top">
                <div className="image-ph" aria-hidden="true"></div>
                <button className="bookmark btn" type="button" aria-label="Save recipe" onClick={(e) => {
                  e.currentTarget.classList.toggle('active');
                }}>
                  <span className="bookmark-bg" aria-hidden="true"></span>
                  <span className="bookmark-glyph" aria-hidden="true"></span>
                </button>
                <div className="hero-ellipse" aria-hidden="true"></div>
              </div>
              <div className="title-lines">
                <h3 className="title">{c.title}</h3>
              </div>
              <div className="meta">
                <div className="meta-col">
                  <div className="meta-label">Time</div>
                  <div className="meta-value">{c.time}</div>
                </div>
                <div className="rating pill">
                  <span className="star" aria-hidden="true"></span>
                  <span className="rating-text">{c.rating}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div id="new-recipes" className="abs new-recipes">New Recipes</div>

      <section id="new-recipes-list" className="abs" aria-label="New Recipes">
        <div className="cards-compact">
          {[
            { title: 'Steak with tomato sauce and bulgur rice.', creator: 'By James Milner' },
            { title: 'Pilaf sweet with lamb-and-raisins', creator: 'By Laura wilson' },
            { title: 'Rice Pilaf, Broccoli and Chicken', creator: 'By Lucas Moura' },
            { title: 'Chicken meal with sauce', creator: 'By Issabella Ethan' },
            { title: 'Stir-fry chicken with broccoli in sweet and sour sauce and rice.', creator: 'By Miquel Ferran' },
          ].map((c, i) => (
            <article className="card-compact" key={i}>
              <div className="thumb" aria-hidden="true"></div>
              <div className="content">
                <h4 className="title">{c.title}</h4>
                <div className="compact-bottom">
                  <div className="creator">
                    <span className="avatar" aria-hidden="true"></span>
                    <span className="creator-name">{c.creator}</span>
                  </div>
                  <div className="time-row">
                    <span className="timer-ic" aria-hidden="true"></span>
                    <span className="time-text">20 mins</span>
                  </div>
                </div>
                <div className="rating-compact">
                  <span className="star small" aria-hidden="true"></span>
                  <span className="star small" aria-hidden="true"></span>
                  <span className="star small" aria-hidden="true"></span>
                  <span className="star small" aria-hidden="true"></span>
                  <span className="star small" aria-hidden="true"></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <nav id="nav-bar" className="abs" role="navigation" aria-label="Bottom navigation">
        <div className="nav-bg" aria-hidden="true"></div>
        <button className="nav-btn home active" aria-label="Home"></button>
        <button className="nav-btn bookmark" aria-label="Bookmarks"></button>
        <button className="nav-btn bell" aria-label="Notifications"></button>
        <button className="nav-btn profile" aria-label="Profile"></button>
        <button className="nav-menu btn" aria-label="Create">
          <span className="plus" aria-hidden="true"></span>
        </button>
      </nav>

      <div id="home-indicator" className="home-indicator abs" aria-hidden="true"></div>
    </main>
  );
}

/**
// PUBLIC_INTERFACE
 * App entry that defines routes for Sign In, Sign Up and Home
 */
function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<SignInScreen />} />
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </Shell>
  );
}

export default App;
