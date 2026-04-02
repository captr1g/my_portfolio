import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { to: '/',           label: 'Terminal',     icon: 'terminal' },
  { to: '/experience', label: 'Proof of Work',icon: 'history_edu' },
  { to: '/projects',   label: 'The Forge',    icon: 'construction' },
  { to: '/specs',      label: 'Tech Specs',   icon: 'memory' },
  { to: '/connect',    label: 'Connect',      icon: 'hub' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (link) =>
    link.to === '/' ? location.pathname === '/' : location.pathname.startsWith(link.to)

  return (
    <>
      {/* ── Top bar ─────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#131313]/40 backdrop-blur-xl border-b border-[#d8b9ff]/10 shadow-[0_0_20px_rgba(153,69,255,0.1)]">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-[#d8b9ff]">terminal</span>
          <Link to="/" className="font-['Space_Grotesk'] text-[#d8b9ff] font-bold text-xl tracking-tighter uppercase">
            [ 0xYRS ]
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-['Space_Grotesk'] uppercase tracking-[0.1em] text-sm transition-colors duration-300 ${
                isActive(link) ? 'text-[#d8b9ff]' : 'text-white/60 hover:text-[#00ec91]'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          className="md:hidden material-symbols-outlined text-[#d8b9ff] hover:text-[#00ec91] transition-colors cursor-pointer"
          aria-label="Menu"
        >
          {menuOpen ? 'close' : 'menu'}
        </button>
      </nav>

      {/* ── Mobile full-screen drawer ────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#131313]/97 backdrop-blur-xl flex flex-col items-start justify-center px-8 gap-8 pt-20 pb-32 md:hidden"
          >
            {/* Corner decoration */}
            <div className="absolute top-20 right-6 font-['Space_Mono'] text-[9px] text-[#9945ff]/20 text-right leading-5 select-none">
              MENU_OPEN<br/>SYS_NAV_LAYER
            </div>
            <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-[#9945ff]/30 via-[#00ec91]/20 to-transparent"></div>

            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-4 group transition-colors ${
                    isActive(link) ? 'text-[#d8b9ff]' : 'text-white/30 hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined text-lg opacity-60 group-hover:opacity-100 transition-opacity">
                    {link.icon}
                  </span>
                  <span className="font-['Space_Grotesk'] uppercase tracking-[0.2em] text-2xl font-bold">
                    {link.label}
                  </span>
                  {isActive(link) && (
                    <span className="w-2 h-2 rounded-full bg-[#00ec91] shadow-[0_0_8px_rgba(0,236,145,0.8)] ml-2"></span>
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Mobile bottom tab bar ────────────────────────────── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-[#d8b9ff]/10">
        <div className="flex items-center justify-around px-2 py-2">
          {NAV_LINKS.map(link => {
            const active = isActive(link)
            return (
              <Link
                key={link.to}
                to={link.to}
                className="flex flex-col items-center gap-1 px-3 py-2 min-w-0 flex-1 group"
              >
                <span
                  className={`material-symbols-outlined text-xl transition-all duration-300 ${
                    active
                      ? 'text-[#d8b9ff] drop-shadow-[0_0_6px_rgba(153,69,255,0.8)]'
                      : 'text-white/30 group-hover:text-white/70'
                  }`}
                  style={active ? { fontVariationSettings: "'FILL' 1" } : {}}
                >
                  {link.icon}
                </span>
                <span
                  className={`font-['Space_Grotesk'] text-[8px] uppercase tracking-widest transition-colors duration-300 truncate w-full text-center ${
                    active ? 'text-[#d8b9ff]' : 'text-white/25 group-hover:text-white/50'
                  }`}
                >
                  {link.label.split(' ')[0]}
                </span>
                {active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#9945ff] rounded-t-full shadow-[0_0_8px_rgba(153,69,255,0.8)]"></span>
                )}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
