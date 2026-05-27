import './App.css'
import Countdown from './Countdown.jsx'

export default function App() {
  return (
    <div className="page">
      <div className="bg" aria-hidden="true">
        <div className="bg-gradient" />
        <div className="bg-maze" />
        <div className="bg-maze bg-maze--offset" />
      </div>

      <main className="content">
        <img
          src="/callinx-mark.png"
          alt="Calliniix"
          className="logo"
          width={120}
          height={120}
        />

        <p className="badge">Coming soon</p>

        <h1 className="title">
          We turn customer communication into revenue and action
        </h1>

        <p className="lead">
          Calliniix is your AI voice receptionist - every call gets answered,
          every conversation can drive revenue, and customer questions turn into
          clear next steps without your team picking up the phone.
        </p>

        <ul className="pillars">
          <li>
            <span className="pillar-icon" aria-hidden="true">◆</span>
            Communication that converts
          </li>
          <li>
            <span className="pillar-icon" aria-hidden="true">◆</span>
            Revenue from every call
          </li>
          <li>
            <span className="pillar-icon" aria-hidden="true">◆</span>
            Action, not voicemail
          </li>
        </ul>

        <Countdown />
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Calliniix</span>
        <span className="footer-dot" aria-hidden="true">·</span>
        <span>Secure, fast - built in Finland</span>
      </footer>
    </div>
  )
}
