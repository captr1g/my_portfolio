import { useState } from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
}

const CHANNELS = [
  {
    id: 'github',
    label: 'Code Repository',
    handle: '@captr1g',
    href: 'https://github.com/captr1g',
    icon: 'code',
    accent: 'group-hover:border-primary/50 group-hover:bg-primary/5',
    accentText: 'text-primary',
    arrowColor: 'text-primary',
  },
  {
    id: 'linkedin',
    label: 'Professional Network',
    handle: 'yash-raj-saxena',
    href: 'https://www.linkedin.com/in/yash-raj-saxena/',
    icon: 'work',
    accent: 'group-hover:border-secondary/40 group-hover:bg-secondary/5',
    accentText: 'text-secondary',
    arrowColor: 'text-secondary',
  },
]

export default function Connect() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('yashrajsaxena1@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen terminal-grid flex flex-col justify-center px-6 md:px-20 pt-28 pb-32 max-w-7xl mx-auto">

      {/* ── Header ──────────────────────────────── */}
      <motion.div
        className="mb-20"
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_8px_rgba(0,236,145,0.8)] animate-pulse" />
          <span className="font-label text-[10px] uppercase tracking-[0.25em] text-secondary">AVAILABLE_FOR_COLLABORATION</span>
        </motion.div>

        <motion.h1
          variants={fadeUp} custom={1}
          className="font-headline text-[13vw] md:text-[9rem] font-bold tracking-tighter leading-[0.85] text-on-surface mb-6 select-none uppercase"
        >
          LET'S<br />
          <span className="text-primary" style={{ textShadow: '0 0 40px rgba(153,69,255,0.35)' }}>BUILD.</span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2} className="max-w-lg text-base text-on-surface-variant font-light leading-relaxed">
          Open to protocol engineering, security consulting, and DeFi architecture. Let's architect the next generation of decentralised systems.
        </motion.p>
      </motion.div>

      {/* ── Email — hero CTA ─────────────────────── */}
      <motion.button
        onClick={copyEmail}
        className="w-full group text-left relative bg-surface-container-low border border-outline-variant/20 hover:border-primary/40 transition-all duration-300 p-10 md:p-14 mb-6 overflow-hidden"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Copy email address"
      >
        {/* left accent bar */}
        <div className="absolute top-0 left-0 w-[3px] h-full bg-gradient-to-b from-primary to-secondary opacity-70 group-hover:opacity-100 transition-opacity" />
        {/* top-right label */}
        <div className="absolute top-4 right-6 font-label text-[9px] text-primary/20 uppercase tracking-[0.3em] select-none group-hover:text-primary/40 transition-colors">
          SECURE_CHANNEL
        </div>

        <p className="font-label text-[10px] uppercase tracking-[0.35em] text-outline mb-4">Primary Contact</p>

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <span className="font-headline text-xl md:text-4xl font-bold text-on-surface group-hover:text-primary transition-colors break-all">
            yashrajsaxena1@gmail.com
          </span>
          <span className={`material-symbols-outlined text-2xl transition-all duration-300 ${copied ? 'text-secondary scale-110' : 'text-outline group-hover:text-primary'}`}>
            {copied ? 'check_circle' : 'content_copy'}
          </span>
        </div>

        {copied && (
          <motion.p
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            className="font-label text-[10px] text-secondary uppercase tracking-widest mt-4"
          >
            // COPIED TO CLIPBOARD
          </motion.p>
        )}
      </motion.button>

      {/* ── Social + CV grid ─────────────────────── */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } } }}
      >
        {CHANNELS.map(ch => (
          <motion.a
            key={ch.id}
            href={ch.href}
            target="_blank" rel="noopener noreferrer"
            variants={fadeUp}
            className={`group relative bg-surface-container-low border border-outline-variant/20 p-8 flex items-center justify-between transition-all duration-300 ${ch.accent}`}
          >
            <div className="flex items-start gap-4">
              <span className={`material-symbols-outlined text-xl mt-0.5 text-outline group-hover:${ch.arrowColor} transition-colors`}>{ch.icon}</span>
              <div>
                <p className="font-label text-[9px] uppercase tracking-[0.3em] text-outline mb-1">{ch.label}</p>
                <p className={`font-headline text-base font-bold uppercase ${ch.accentText}`}>{ch.handle}</p>
              </div>
            </div>
            <span className={`material-symbols-outlined transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${ch.arrowColor} opacity-0 group-hover:opacity-100`}>
              arrow_outward
            </span>
          </motion.a>
        ))}

        {/* CV download — third tile */}
        <motion.a
          href="/Yash_Raj_Saxena_Resume.docx.pdf"
          download="Yash_Raj_Saxena_Resume.pdf"
          variants={fadeUp}
          className="group relative bg-gradient-to-br from-primary/10 to-transparent border border-primary/30 hover:border-primary/60 hover:bg-primary/15 p-8 flex items-center justify-between transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <span className="material-symbols-outlined text-xl mt-0.5 text-primary">download</span>
            <div>
              <p className="font-label text-[9px] uppercase tracking-[0.3em] text-primary/60 mb-1">Documentation</p>
              <p className="font-headline text-base font-bold uppercase text-primary">Curriculum Vitae</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 group-hover:translate-y-0.5 transition-all duration-300">
            arrow_downward
          </span>
        </motion.a>
      </motion.div>

      {/* ── System status bar ────────────────────── */}
      <motion.div
        className="border-l-2 border-secondary pl-6 flex items-center gap-6 mt-6"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(0,236,145,0.8)] animate-pulse" />
          <span className="font-headline text-sm font-bold text-secondary uppercase">Available</span>
        </div>
        <span className="font-label text-[9px] uppercase tracking-widest text-outline">Response &lt; 24h</span>
        <div className="flex-1 h-px bg-outline-variant/10" />
        <span className="font-label text-[9px] uppercase tracking-widest text-outline hidden sm:block">SECURE_CHANNEL_ACTIVE</span>
      </motion.div>
    </main>
  )
}
