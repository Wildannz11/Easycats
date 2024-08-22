import React, { useState } from 'react';
import './index.css';

function SignInSignUp() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''}`}>
      <SignInSignUpForm isSignUp={isSignUp} />
      <PanelsContainer toggleSignUp={() => setIsSignUp(!isSignUp)} />
    </div>
  );
}

function SignInSignUpForm({ isSignUp }) {
  return (
    <div className="forms-container">
      <div className="signin-signup">
        <form className={`sign-in-form ${!isSignUp ? 'active' : ''}`}>
        <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user-alt"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
        </form>
        <form className={`sign-up-form ${isSignUp ? 'active' : ''}`}>
        <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
        </form>
      </div>
    </div>
  );
}

function PanelsContainer({ toggleSignUp }) {
  return (
    <div className="panels-container">
      <div className="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
            ex ratione. Aliquid!
          </p>
          <button className="btn transparent" onClick={toggleSignUp}>
            Sign up
          </button>
        </div>
          <img src="./assets/log.svg" class="image" alt="" />
      </div>
      <div className="panel right-panel">
        <div class="content">
          <h3>One of us ?</h3>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
          </p>
          <button className="btn transparent" onClick={toggleSignUp}>
            Sign in
          </button>
        </div>
        <img src="./assets/register.svg" class="image" alt="" />
      </div>
    </div>
  );
}

export default SignInSignUp;