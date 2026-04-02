import './TerminalDivider.css'

export default function TerminalDivider({ text = '0x00...FF' }) {
  return (
    <div className="terminal-divider">
      <span className="terminal-divider__dots">· · · · · · · · · ·</span>
      <span className="terminal-divider__label">[ {text} ]</span>
      <span className="terminal-divider__dots">· · · · · · · · · ·</span>
    </div>
  )
}
