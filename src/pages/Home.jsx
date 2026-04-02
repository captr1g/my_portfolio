import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ROLES = ['Solana Developer', 'EVM Engineer', 'Security Auditor', 'DeFi Architect']

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Home() {
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [cursorVisible, setCursorVisible] = useState(true)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = ROLES[roleIndex]
    let timeout
    if (!isDeleting) {
      if (displayText.length < current.length) {
        timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40)
      } else {
        setIsDeleting(false)
        setRoleIndex(i => (i + 1) % ROLES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  useEffect(() => {
    const t = setInterval(() => setCursorVisible(v => !v), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <main className="relative min-h-screen flex flex-col justify-center items-start pt-20 pb-20 px-6 md:px-20 overflow-hidden cyber-grid">
      {/* Background orbs */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Left column */}
        <div className="w-full lg:w-2/3">
          {/* Status badge */}
          <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-8">
            <div className="w-2 h-2 bg-secondary rounded-full shadow-[0_0_8px_rgba(0,236,145,0.8)]" />
            <span className="font-label text-[10px] uppercase tracking-[0.2em] text-secondary">SYSTEM_READY // UPLINK_ACTIVE</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp} custom={1}
            className="font-headline text-[13vw] md:text-[8rem] font-bold leading-[0.85] tracking-tighter text-on-surface mb-8 select-none"
          >
            YASH RAJ<br />SAXENA
          </motion.h1>

          {/* Subtitle block */}
          <motion.div variants={fadeUp} custom={2} className="flex flex-col max-w-xl">
            {/* Title row */}
            <p className="font-label text-sm uppercase tracking-widest text-primary flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-xs">code</span>
              Sovereign Smart Contract Architect // Solana &amp; EVM
            </p>

            <div className="h-px w-full bg-outline-variant/20 mb-4" />

            {/* Typewriter — its own labeled row */}
            <div className="flex items-center gap-3 py-2 mb-4">
              <span className="font-label text-[9px] uppercase tracking-[0.3em] text-outline border border-outline-variant/30 px-2 py-0.5 shrink-0">Role</span>
              <span className="w-4 h-px bg-outline-variant/40 shrink-0" />
              <span className="font-label text-sm uppercase tracking-widest text-secondary flex items-center gap-0.5">
                //{' '}{displayText}
                <span style={{ opacity: cursorVisible ? 1 : 0 }} className="text-primary ml-0.5">▌</span>
              </span>
            </div>

            <div className="h-px w-full bg-outline-variant/20 mb-4" />

            <p className="text-on-surface-variant font-body text-base max-w-md leading-relaxed">
              Engineering hyper-secure, decentralized primitives for the next era of finance. Specialized in Rust, Solidity, and formal verification.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} custom={3} className="mt-12 flex flex-col sm:flex-row gap-4 flex-wrap">
            <Link
              to="/projects"
              className="px-10 py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-label font-bold uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(153,69,255,0.25)] hover:shadow-[0_0_45px_rgba(153,69,255,0.4)] active:translate-y-0.5 transition-all group overflow-hidden relative inline-block text-center"
            >
              <span className="relative z-10">[ ENTER_THE_FORGE ]</span>
              <div className="absolute inset-0 bg-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </Link>
            <Link
              to="/experience"
              className="px-10 py-5 border border-outline-variant/30 font-label font-bold uppercase tracking-widest text-xs hover:bg-on-surface/5 transition-all text-on-surface/70 hover:text-on-surface inline-block text-center"
            >
              Proof_of_Work
            </Link>
            <Link
              to="/specs"
              className="px-10 py-5 border border-primary/50 font-label font-bold uppercase tracking-widest text-xs hover:bg-primary/10 transition-all text-primary shadow-[0_0_20px_rgba(153,69,255,0.1)] hover:shadow-[0_0_30px_rgba(153,69,255,0.2)] inline-flex items-center justify-center gap-3"
            >
              <span className="material-symbols-outlined text-sm">settings_ethernet</span>
              [ VIEW_TECHNICAL_SPECS ]
            </Link>
          </motion.div>
        </div>

        {/* Right — Active Protocols panel */}
        <motion.div variants={fadeUp} custom={4} className="w-full lg:w-1/3 flex flex-col gap-6 items-end lg:mb-12">
          <div className="w-full glass-panel border border-outline-variant/15 p-8 relative">
            <div className="absolute top-0 left-0 w-1 h-8 bg-secondary" />
            <div className="flex justify-between items-start mb-10">
              <span className="font-label text-[10px] text-white/40 uppercase tracking-[0.2em]">Active_Protocols</span>
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            </div>
            <ul className="flex flex-col gap-6">
              {[
                { label: 'Solana_Program_Lib', value: '0x...FF89' },
                { label: 'EVM_Yield_Engines',  value: 'SECURED' },
                { label: 'Slither_Audit_Lvl_3', value: '100%_COV' },
              ].map(item => (
                <li key={item.label} className="flex justify-between items-center group">
                  <span className="font-label text-xs tracking-widest text-white/60 group-hover:text-secondary transition-colors uppercase">{item.label}</span>
                  <span className="text-[10px] font-headline text-secondary group-hover:translate-x-1 transition-transform">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4">
            <div className="p-4 bg-surface-container-low border border-outline-variant/10">
              <span className="material-symbols-outlined text-on-surface/40">security</span>
            </div>
            <div className="p-4 bg-surface-container-low border border-outline-variant/10">
              <span className="material-symbols-outlined text-on-surface/40">hub</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-16 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span
          className="font-label text-[9px] uppercase tracking-[0.4em] text-outline"
          style={{ writingMode: 'vertical-lr', transform: 'rotate(180deg)' }}
        >
          SCROLL_FOR_DEPTH
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
      </motion.div>
    </main>
  )
}
