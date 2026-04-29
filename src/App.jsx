import React, { useMemo, useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyUVoffrDJ0xIRWiqgJQdAlYS1aycGOilxgWbw3hAkTUcXPLQ81O0mZWBpgYdLzloA6Dg/exec";

const legalDisclaimer =
  "Fundr is not a financial adviser, broker, investment manager, crowdfunding platform, or securities exchange. We do not handle investor funds, recommend investments, sell securities, or guarantee outcomes. We facilitate visibility, structured profiles, feedback, and introductions only.";

function SmartSelect({ name, label, children, required = true }) {
  const [value, setValue] = useState("");
  const [otherValue, setOtherValue] = useState("");

  const finalValue = value === "Other" ? otherValue : value;

  return (
    <label>
      <span>{label}</span>

      <select value={value} onChange={(event) => setValue(event.target.value)} required={required}>
        {children}
      </select>

      {value === "Other" && (
        <input
          className="other-input"
          value={otherValue}
          onChange={(event) => setOtherValue(event.target.value)}
          placeholder={`Type other ${label.toLowerCase()}`}
          required
        />
      )}

      <input type="hidden" name={name} value={finalValue} />
    </label>
  );
}

function App() {
  const year = useMemo(() => new Date().getFullYear(), []);
  const [activeForm, setActiveForm] = useState("startup");

  return (
   <main id="main-content" className="page" role="main">
      <header className="topbar">
        <a className="logo" href="#top" aria-label="Fundr home">
          <span className="logo-mark">F</span>
          <span>Fundr</span>
        </a>

        <nav>
          <a href="#manifesto">Manifesto</a>
          <a href="#pilot">Pilot</a>
          <a href="#join">Join</a>
        </nav>
      </header>

      <section id="top" className="manifesto-page">
        <p className="small-label">Fundr Pilot</p>

        <h1>In a world full of pitch decks and cold messages, we choose clarity.</h1>

        <div className="manifesto-copy" id="manifesto">
          <p>Because the first conversation between a founder and an investor should not be messy.</p>

          <p>
            Today, many founders still rely on WhatsApp forwards, LinkedIn messages, family
            contacts, and random pitch decks to get noticed. Some have strong businesses, but they
            struggle to explain them clearly. Others know what they need, but not how to present it.
          </p>

          <p>
            At the same time, investors receive opportunities in different formats, with missing
            information and unclear terms. One founder sends a deck. Another sends a voice note.
            Another says they are “raising money” but does not explain if it is debt, equity,
            partnership, or advisory support.
          </p>

          <p>We believe the first step should be better.</p>

          <p>That’s why we are testing Fundr.</p>

          <p>
            Fundr is a UAE-focused startup discovery and warm-introduction network. It helps
            founders present their businesses in a clear, standard format and helps investors
            discover better-organised opportunities.
          </p>

          <p>Not just “startups.” But structured startup profiles.</p>

          <p>
            Each profile can capture what matters: the company, the founder, the traction, the
            capital need, the transaction structure, the proposed terms, the use of funds, and the
            supporting documents.
          </p>

          <p>
            Fundr is not crowdfunding. It does not handle investor money. It does not sell shares.
            It does not give investment advice. It does not guarantee funding.
          </p>

          <p>
            We are here to make discovery cleaner. To reduce back-and-forth. To help founders look
            more professional before the first introduction happens. To help investors understand
            opportunities faster.
          </p>

          <p>
            This is a pilot. We are testing whether UAE founders, investors, operators, and advisors
            want a more organised way to connect.
          </p>

          <p>
            If the traditional way is built on who you know, Fundr is testing a better first step:
            what you can clearly show.
          </p>

          <p className="bold-line">Be clear. Be ready. Be Fundr.</p>
        </div>

        <div className="signature-row">
          <div>
            <strong>Mohammed Shams Abdullah</strong>
            <span>Founder</span>
            <a href="mailto:hello@fundr.com">hello@fundr.com</a>
          </div>

          <a className="outline-button" href="#join">
            Join the pilot
          </a>
        </div>
      </section>

      <section id="pilot" className="section">
        <p className="small-label">What the pilot tests</p>
        <h2>We are testing demand before building the full platform.</h2>

        <div className="cards-grid">
          <article>
            <span>01</span>
            <h3>Startup demand</h3>
            <p>
              Do UAE founders want to present themselves through a clearer, standardised startup
              profile?
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Investor demand</h3>
            <p>
              Do investors, operators, and advisors want better-organised UAE startup opportunities?
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Structured information</h3>
            <p>
              Is it useful to capture capital need, transaction structure, proposed terms, and use
              of funds before introductions happen?
            </p>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <p className="small-label">Why it matters</p>
          <h2>Better than random decks, forwards, and unclear asks.</h2>
        </div>

        <div className="text-panel">
          <p>
            Fundr is not trying to replace due diligence, legal review, or investor judgment. It is
            trying to improve the first step: how an opportunity is presented before an introduction.
          </p>

          <p>
            A standard Fundr profile can include company overview, founder details, industry, stage,
            traction, revenue range, capital need, transaction structure, proposed terms, use of
            funds, and supporting documents.
          </p>

          <p>The goal is simple: make the first conversation clearer for both founders and investors.</p>
        </div>
      </section>

      <section id="join" className="section forms-section">
        <p className="small-label">Join the pilot</p>
        <h2>Choose your side of the market.</h2>

        <div className="form-toggle">
          <button
            type="button"
            className={activeForm === "startup" ? "active" : ""}
            onClick={() => setActiveForm("startup")}
          >
            I am a Startup / Founder
          </button>

          <button
            type="button"
            className={activeForm === "investor" ? "active" : ""}
            onClick={() => setActiveForm("investor")}
          >
            I am an Investor / Operator
          </button>

          <button
            type="button"
            className={activeForm === "feedback" ? "active" : ""}
            onClick={() => setActiveForm("feedback")}
          >
            Give Feedback
          </button>
        </div>

        <div className="form-card">
          {activeForm === "startup" && <StartupPilotForm />}
          {activeForm === "investor" && <InvestorPilotForm />}
          {activeForm === "feedback" && <FeedbackForm />}
        </div>
      </section>

      <section className="legal-section">
        <p>{legalDisclaimer}</p>
      </section>

      <footer className="footer">
        <span>© {year} Fundr. Pilot website.</span>
        <a href="mailto:hello@fundr.com">hello@fundr.com</a>
      </footer>
    </main>
  );
}

function StartupPilotForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Submitting...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("type", "pilot_startup");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData)
      });

      form.reset();
      setStatus("Received. Thank you — we will review your pilot response.");
    } catch {
      setStatus("Something went wrong. Please try again or email hello@fundr.com.");
    }
  }

  return (
    <>
      <h3>Startup pilot application</h3>
      <p>
        Apply to test whether a structured Fundr profile could help your business become clearer
        and more investor-ready.
      </p>

      <form className="pilot-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            <span>Founder name</span>
            <input name="founderName" required />
          </label>

          <label>
            <span>Email</span>
            <input name="email" type="email" required />
          </label>

          <label>
            <span>Company name</span>
            <input name="companyName" required />
          </label>

          <SmartSelect name="location" label="Location">
            <option value="">Select</option>
            <option>Dubai</option>
            <option>Abu Dhabi</option>
            <option>Sharjah</option>
            <option>Ajman</option>
            <option>Ras Al Khaimah</option>
            <option>Fujairah</option>
            <option>Umm Al Quwain</option>
            <option>GCC</option>
            <option>Outside UAE</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="industry" label="Industry">
            <option value="">Select</option>
            <option>Technology</option>
            <option>AI</option>
            <option>Fintech</option>
            <option>Automotive</option>
            <option>F&amp;B</option>
            <option>Health &amp; wellness</option>
            <option>Education</option>
            <option>Real estate</option>
            <option>Marketplace</option>
            <option>Consumer brands</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="stage" label="Stage">
            <option value="">Select</option>
            <option>Idea</option>
            <option>MVP</option>
            <option>Pre-seed</option>
            <option>Seed</option>
            <option>Early revenue</option>
            <option>Growth</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="monthlyRevenue" label="Monthly revenue range">
            <option value="">Select</option>
            <option>No revenue yet</option>
            <option>AED 1k–10k</option>
            <option>AED 10k–50k</option>
            <option>AED 50k–100k</option>
            <option>AED 100k–500k</option>
            <option>AED 500k+</option>
            <option>Prefer not to say</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="capitalNeed" label="Capital need">
            <option value="">Select</option>
            <option>Under AED 100k</option>
            <option>AED 100k–250k</option>
            <option>AED 250k–500k</option>
            <option>AED 500k–1M</option>
            <option>AED 1M–3M</option>
            <option>AED 3M+</option>
            <option>Not sure yet</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="transactionStructure" label="Transaction structure">
            <option value="">Select</option>
            <option>Equity</option>
            <option>Debt</option>
            <option>Convertible note</option>
            <option>SAFE-style agreement</option>
            <option>Revenue share</option>
            <option>Strategic partnership</option>
            <option>Advisory support</option>
            <option>Not sure yet</option>
            <option>Other</option>
          </SmartSelect>

          <label>
            <span>Pitch deck / website link</span>
            <input name="pitchDeck" type="url" />
          </label>

          <label className="full-width">
            <span>What are you looking for?</span>
            <textarea
              name="goal"
              rows="4"
              required
              placeholder="Investors, advisors, operators, strategic partners, growth capital, feedback, etc."
            />
          </label>

          <label className="full-width">
            <span>Short company description</span>
            <textarea
              name="description"
              rows="5"
              required
              placeholder="Briefly explain the business, traction, and why Fundr could help."
            />
          </label>
        </div>

        <button className="submit-button" type="submit">
          Submit startup pilot response
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </>
  );
}

function InvestorPilotForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Submitting...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("type", "pilot_investor");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData)
      });

      form.reset();
      setStatus("Received. Thank you — we will review your pilot response.");
    } catch {
      setStatus("Something went wrong. Please try again or email hello@fundr.com.");
    }
  }

  return (
    <>
      <h3>Investor / operator pilot profile</h3>
      <p>
        Join the pilot to tell us what information you would need before reviewing or requesting
        introductions to UAE startups.
      </p>

      <form className="pilot-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            <span>Full name</span>
            <input name="fullName" required />
          </label>

          <label>
            <span>Email</span>
            <input name="email" type="email" required />
          </label>

          <SmartSelect name="investorType" label="Investor / operator type">
            <option value="">Select</option>
            <option>Angel investor</option>
            <option>Family office</option>
            <option>Operator</option>
            <option>Business owner</option>
            <option>Strategic investor</option>
            <option>Advisor / mentor</option>
            <option>VC / investment firm</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="ticketSize" label="Typical ticket size">
            <option value="">Select</option>
            <option>Under AED 50k</option>
            <option>AED 50k–100k</option>
            <option>AED 100k–250k</option>
            <option>AED 250k–500k</option>
            <option>AED 500k–1M</option>
            <option>AED 1M+</option>
            <option>Not investing, only advising</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="location" label="Location">
            <option value="">Select</option>
            <option>Dubai</option>
            <option>Abu Dhabi</option>
            <option>Sharjah</option>
            <option>Ajman</option>
            <option>Ras Al Khaimah</option>
            <option>Fujairah</option>
            <option>Umm Al Quwain</option>
            <option>GCC</option>
            <option>Outside UAE</option>
            <option>Other</option>
          </SmartSelect>

          <label>
            <span>LinkedIn / profile link</span>
            <input name="profile" type="url" />
          </label>

          <label className="full-width">
            <span>Preferred sectors</span>
            <textarea
              name="preferredSectors"
              rows="3"
              required
              placeholder="Technology, AI, fintech, automotive, F&B, education, real estate, etc."
            />
          </label>

          <label className="full-width">
            <span>What information would you need before requesting an intro?</span>
            <textarea
              name="investorNeeds"
              rows="5"
              required
              placeholder="For example: traction, revenue, pitch deck, deal structure, terms, founder background, financials, use of funds."
            />
          </label>
        </div>

        <button className="submit-button" type="submit">
          Submit investor / operator response
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </>
  );
}

function FeedbackForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("Submitting...");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("type", "pilot_feedback");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(formData)
      });

      form.reset();
      setStatus("Received. Thank you — your feedback has been recorded.");
    } catch {
      setStatus("Something went wrong. Please try again or email hello@fundr.com.");
    }
  }

  return (
    <>
      <h3>Pilot feedback</h3>
      <p>
        Give quick feedback on the Fundr pilot idea, website, clarity, trust, and usefulness.
      </p>

      <form className="pilot-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            <span>Name</span>
            <input name="name" required />
          </label>

          <label>
            <span>Email</span>
            <input name="email" type="email" required />
          </label>

          <SmartSelect name="role" label="Role">
            <option value="">Select</option>
            <option>Founder</option>
            <option>Investor</option>
            <option>Operator</option>
            <option>Advisor / mentor</option>
            <option>Student</option>
            <option>Business owner</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="understandsFundr" label="Do you understand what Fundr does?">
            <option value="">Select</option>
            <option>Yes, clearly</option>
            <option>Somewhat</option>
            <option>Not really</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="usefulness" label="How useful does this idea seem?">
            <option value="">Select</option>
            <option>Very useful</option>
            <option>Somewhat useful</option>
            <option>Not useful</option>
            <option>Not sure yet</option>
            <option>Other</option>
          </SmartSelect>

          <SmartSelect name="trustLevel" label="Does the pilot feel trustworthy?">
            <option value="">Select</option>
            <option>Yes</option>
            <option>Somewhat</option>
            <option>No</option>
            <option>Needs more credibility</option>
            <option>Other</option>
          </SmartSelect>

          <label className="full-width">
            <span>Feedback</span>
            <textarea
              name="feedback"
              rows="6"
              required
              placeholder="What is clear, confusing, useful, weak, or missing? What would make Fundr better?"
            />
          </label>
        </div>

        <button className="submit-button" type="submit">
          Submit feedback
        </button>

        {status && <p className="form-status">{status}</p>}
      </form>
    </>
  );
}

export default App;
