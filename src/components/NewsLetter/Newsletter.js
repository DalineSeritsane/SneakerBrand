// Newsletter.js
import React, { useState } from 'react';
import './newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubscribed(true);
    setError('');
    setEmail('');
    // Here, you could send to your API
  };

  return (
    <div className="newsletter">
      <h2>Stay in the Loop</h2>
      <p>Subscribe to get exclusive offers and the latest sneaker drops.</p>
      {subscribed ? (
        <div className="success-message">🎉 Thank you for subscribing!</div>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Subscribe</button>
          {error && <div className="error-message">{error}</div>}
        </form>
      )}
    </div>
  );
};

export default Newsletter;
