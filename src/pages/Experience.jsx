import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
}

const inView = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

export default function Experience() {
  return (
    <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto terminal-grid">
      {/* Hero Section */}
      <motion.section
        className="mb-24 flex flex-col items-start"
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} custom={0} className="mb-6 flex gap-2 items-center">
          <div className="w-12 h-[1px] bg-secondary-container"></div>
          <span className="font-headline text-secondary-container text-xs tracking-[0.3em] uppercase">Deployment History</span>
        </motion.div>
        <motion.h1 variants={fadeUp} custom={1} className="font-headline text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-none">
          PROOF OF <span className="text-primary">WORK</span>
        </motion.h1>
        <motion.p variants={fadeUp} custom={2} className="max-w-2xl text-lg text-on-surface-variant font-light leading-relaxed">
          A technical deep-dive into the architectural milestones and cryptographic contributions of Yash Raj Saxena.
        </motion.p>
      </motion.section>

      {/* Stats Grid */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-80px' }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {[
          { label: 'Code Integrity',   value: '100%',  accent: 'border-primary',           textCol: 'text-primary',             desc: 'Critical Path Coverage achieved across all audited mainnet protocols.' },
          { label: 'Security Ledger',  value: 'ZERO',  accent: 'border-secondary-container',textCol: 'text-secondary-container', desc: 'Post-deployment critical vulnerabilities or audit findings since inception.' },
          { label: 'Networks',         value: '08+',   accent: 'border-white/10',           textCol: 'text-white/90',            desc: 'Production-grade deployments on Solana, Ethereum, and Polygon.' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label} variants={fadeUp} custom={i}
            className={`bg-surface-container-low p-8 border-l-4 ${stat.accent} group hover:bg-surface-container-high transition-all`}
          >
            <p className="font-headline text-xs text-white/40 uppercase tracking-widest mb-2">{stat.label}</p>
            <h3 className={`text-3xl font-bold font-headline ${stat.textCol}`}>{stat.value}</h3>
            <p className="text-xs text-on-surface-variant mt-4">{stat.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Experience Cards */}
      <section className="space-y-12">
        {[
          {
            years: 'May 2025 - Present', company: 'Staker.fun', role: 'Blockchain Engineer',
            accentYear: 'text-primary', projectAccent: 'group-hover:border-primary/30',
            title: 'Liquid Staking Optimization',
            badge: <span className="bg-primary/10 text-primary text-[10px] px-2 py-1 uppercase tracking-tighter border border-primary/20">Active Node</span>,
            bullets: [
              { color: 'text-primary', text: 'Developed high-throughput Rust programs on Solana, reducing transaction overhead by 14.5% using custom memory allocators.' },
              { color: 'text-primary', text: 'Orchestrated the core staking engine managing $45M in SOL with non-custodial risk parameters.' },
            ],
            tags: ['RUST', 'SOLANA ANCHOR', 'ZEROMQ'],
            icon: 'token',
          },
          {
            years: 'Apr 2025 - Present', company: 'Maxtron Innovations', role: 'Blockchain Developer',
            accentYear: 'text-white/40', projectAccent: 'group-hover:border-secondary-container/30',
            title: 'Cross-Chain Liquidity Bridges',
            bullets: [
              { color: 'text-secondary-container', text: 'Engineered hardened Solidity contracts for high-frequency bridge transactions, securing $120M in cross-chain volume.' },
              { color: 'text-secondary-container', text: 'Implemented multi-signature governance frameworks and circuit-breaker patterns for emergency pause states.' },
            ],
            tags: ['SOLIDITY', 'HARDHAT', 'YUL/ASSEMBLY'],
            icon: 'security',
          },
          {
            years: 'Jan 2025 - Apr 2025', company: 'Freelance', role: 'Blockchain Developer',
            accentYear: 'text-white/40', projectAccent: '',
            title: 'Security & Systems Consulting',
            body: 'Provided specialized security audits for 12+ DeFi projects, identifying 4 high-severity vulnerabilities before mainnet launch. Focused on formal verification and symbolic execution of contract logic.',
            tags: ['AUDITING', 'FORMAL METHODS', 'SLITHER'],
          },
          {
            years: 'Jul 2024 - Dec 2024', company: 'Neemo Finance', role: 'Smart Contract developer',
            accentYear: 'text-white/40', projectAccent: '',
            title: 'Decentralized ID Protocol',
            body: 'Pioneered zero-knowledge proof integrations for sovereign identity management. Built the initial MVP using Substrate and Polkadot.js.',
            tags: ['SUBSTRATE', 'ZKP', 'POLKADOT'],
          },
        ].map((block, i) => (
          <motion.div
            key={block.company}
            className="flex flex-col md:flex-row gap-8 items-start group"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
            variants={inView}
            custom={i}
          >
            <div className="md:w-1/4 pt-2">
              <span className={`font-headline text-sm font-bold tracking-widest uppercase ${block.accentYear}`}>{block.years}</span>
              <h4 className="text-2xl font-bold mt-2">{block.company}</h4>
              <p className="text-xs text-secondary-container font-headline tracking-tighter mt-1 uppercase">{block.role}</p>
            </div>
            <div className={`md:w-3/4 bg-surface-container-low p-12 border-l border-white/5 relative overflow-hidden ${block.projectAccent} transition-colors hover:bg-surface-container-high`}>
              {block.icon && (
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <span className="material-symbols-outlined text-9xl">{block.icon}</span>
                </div>
              )}
              <div className="relative z-10">
                <h5 className="text-xl font-bold mb-6 flex items-center gap-4">
                  {block.title}
                  {block.badge}
                </h5>
                {block.bullets ? (
                  <ul className="space-y-4 text-on-surface-variant leading-relaxed mb-8">
                    {block.bullets.map((b, j) => (
                      <li key={j} className="flex gap-4">
                        <span className={`font-headline ${b.color}`}>[0{j + 1}]</span>
                        {b.text}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-on-surface-variant mb-8 leading-relaxed">{block.body}</p>
                )}
                <div className="flex flex-wrap gap-2">
                  {block.tags.map(t => (
                    <span key={t} className="text-[10px] font-headline border border-white/10 px-3 py-1 text-white/60">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* System Specs Section */}
      <motion.section
        className="mt-40"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={inView} className="mb-12">
          <h2 className="font-headline text-4xl font-bold tracking-tight mb-4 uppercase">System Specs</h2>
          <div className="w-16 h-1 bg-primary"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
          {[
            { icon: 'diamond',          color: 'text-primary',           label: 'SOLANA',   desc: 'High-performance Rust programming, PDA architecture, and Anchor framework.' },
            { icon: 'layers',           color: 'text-secondary-container',label: 'EVM',      desc: 'Gas-optimized Solidity, inline Assembly, and intricate DeFi logic.' },
            { icon: 'memory',           color: 'text-white/60',           label: 'RUST',     desc: 'Systems engineering, safe memory management, and WASM compilation.' },
            { icon: 'shield_with_heart',color: 'text-white/60',           label: 'SECURITY', desc: 'In-depth vulnerability research, threat modeling, and formal verification.' },
          ].map((spec, i) => (
            <motion.div
              key={spec.label} variants={fadeUp} custom={i}
              className="bg-surface p-10 hover:bg-surface-container-low transition-all"
            >
              <div className="mb-6">
                <span className={`material-symbols-outlined text-4xl ${spec.color}`}>{spec.icon}</span>
              </div>
              <h6 className="font-headline text-lg font-bold mb-2 uppercase">{spec.label}</h6>
              <p className="text-sm text-on-surface-variant leading-relaxed">{spec.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Visual Interlude */}
      <motion.section
        className="mt-40 relative h-[400px] overflow-hidden group"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img
          alt="Blockchain nodes abstract"
          className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-40 transition-opacity"
          src="/assets/blockchain-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
          <p className="font-headline text-primary text-lg tracking-[0.5em] uppercase mb-4">Integrity Through Proof</p>
          <h2 className="text-4xl font-black font-headline tracking-tighter">TRUST IS EARNED VIA CODE</h2>
        </div>
      </motion.section>
    </main>
  )
}
