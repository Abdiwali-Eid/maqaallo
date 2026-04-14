import React from 'react';
import { SubscribePosterStyles } from '../styles/SubscribePosterStyles';

function SubscribePoster({ className }) {
  return (
    <SubscribePosterStyles
      className={className}
      aria-labelledby="subscribe-heading"
    >
      <div className="subscribe-inner">
        <div className="subscribe-copy">
          <p className="subscribe-kicker">Newsletter</p>
          <h2 id="subscribe-heading" className="subscribe-title">
            Hel maqaallada cusub
          </h2>
        </div>
        <div className="subscribe-form-wrap">
          <form
            className="subscribe-form"
            name="subscribe"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="subscribe" />
            <p className="honeypot">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>
            <div className="subscribe-row">
              <input
                className="subscribe-input"
                type="email"
                name="email"
                required
                placeholder="Emailkaaga qor"
                autoComplete="email"
                aria-label="Email address"
              />
              <button type="submit" className="subscribe-btn">
                Diiwaangeli
              </button>
            </div>
            <p className="subscribe-note">Spam ma dirno.</p>
          </form>
        </div>
      </div>
    </SubscribePosterStyles>
  );
}

export default SubscribePoster;
