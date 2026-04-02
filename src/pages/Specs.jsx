import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Specs() {
  return (
    <main className="min-h-screen terminal-grid pt-12 pb-32 px-6 md:px-12 lg:px-24">
      {/* Header Section */}
      <motion.header
        className="mb-20 border-l-4 border-primary pl-8"
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.div variants={fadeUp} custom={0} className="font-label text-secondary tracking-[0.4em] mb-2 text-xs">STATUS: SYSTEM_READY</motion.div>
        <motion.h1 variants={fadeUp} custom={1} className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter uppercase text-on-surface">
          SYSTEM_<span className="text-primary" style={{textShadow: '0 0 10px rgba(153,69,255,0.5)'}}>SPECIFICATIONS</span>_v1.0
        </motion.h1>
        <motion.div variants={fadeUp} custom={2} className="mt-4 flex items-center gap-4 text-outline font-label text-sm">
          <span>[ BUILD: 2024.Q4 ]</span>
          <span className="w-12 h-[1px] bg-outline-variant"></span>
          <span>[ LOC: 0x...8E2 ]</span>
        </motion.div>
      </motion.header>

      {/* Bento Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
      >
        {/* 01: Blockchain & Core Protocol */}
        <section className="md:col-span-7 bg-surface-container-low border-none p-10 relative overflow-hidden group hover:bg-surface-container-high transition-all duration-500">
          <div className="absolute top-0 right-0 p-4 font-label text-[10px] text-outline/30 select-none">0x01_CORE</div>
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-secondary text-3xl">database</span>
            <h2 className="font-headline text-2xl font-bold tracking-tight uppercase">Blockchain &amp; Core Protocol</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-8">
            <div>
              <p className="font-label text-secondary text-[10px] tracking-widest mb-4 uppercase">Languages</p>
              <ul className="space-y-3 font-headline text-lg">
                <li className="flex items-center gap-2">Solidity <span className="h-px flex-grow bg-outline-variant/30"></span></li>
                <li className="flex items-center gap-2">Rust <span className="text-primary-fixed-dim text-xs">(Anchor/Solana)</span></li>
              </ul>
            </div>
            <div>
              <p className="font-label text-secondary text-[10px] tracking-widest mb-4 uppercase">Standards</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant text-xs font-label">SPL_TOKENS</span>
                <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant text-xs font-label">ERC-20</span>
                <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant text-xs font-label">ERC-721</span>
                <span className="px-3 py-1 bg-surface-container-highest border border-outline-variant text-xs font-label">ERC-1155</span>
              </div>
            </div>
            <div className="sm:col-span-2">
              <p className="font-label text-secondary text-[10px] tracking-widest mb-4 uppercase">Interoperability</p>
              <div className="p-6 bg-surface-container-lowest border border-outline-variant/20 flex items-center justify-between group-hover:border-secondary/40 transition-colors">
                <span className="font-headline text-xl font-medium tracking-tighter">LayerZero</span>
                <span className="material-symbols-outlined text-secondary animate-pulse">hub</span>
              </div>
            </div>
          </div>
        </section>

        {/* 02: DeFi Primitives */}
        <section className="md:col-span-5 bg-surface-container-low p-10 relative group hover:bg-surface-container-high transition-all duration-500">
          <div className="absolute top-0 right-0 p-4 font-label text-[10px] text-outline/30">0x02_PRIMITIVES</div>
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">account_balance_wallet</span>
            <h2 className="font-headline text-2xl font-bold tracking-tight uppercase">DeFi Primitives</h2>
          </div>
          <div className="space-y-6">
            <div className="flex flex-col gap-2 border-l-2 border-outline-variant pl-4 py-1 hover:border-primary transition-colors">
              <span className="font-headline text-lg">AMMs &amp; Cross-Chain Bridges</span>
              <span className="font-body text-sm text-outline">High-efficiency liquidity routing systems.</span>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-outline-variant pl-4 py-1 hover:border-primary transition-colors">
              <span className="font-headline text-lg">Token Swaps &amp; Yield Strategies</span>
              <span className="font-body text-sm text-outline">Automated yield optimization vaults.</span>
            </div>
            <div className="flex flex-col gap-2 border-l-2 border-outline-variant pl-4 py-1 hover:border-primary transition-colors">
              <span className="font-headline text-lg">LST Locking &amp; Staking</span>
              <span className="font-body text-sm text-outline">Liquid Staking Tokenization protocols.</span>
            </div>
          </div>
        </section>

        {/* 03: Security Stack */}
        <section className="md:col-span-12 lg:col-span-4 bg-surface-container-low p-10 border-t-2 border-error/30">
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-error text-3xl">security</span>
            <h2 className="font-headline text-2xl font-bold tracking-tight uppercase">Security Stack</h2>
          </div>
          <div className="space-y-8">
            <div className="bg-surface-container-lowest p-6 border border-outline-variant/30">
              <p className="font-label text-error text-[10px] tracking-widest mb-2 uppercase">Static Analysis</p>
              <h3 className="font-headline text-xl mb-4">Slither Implementation</h3>
              <div className="h-2 w-full bg-surface-container-highest overflow-hidden">
                <div className="h-full bg-error w-[94%]"></div>
              </div>
              <p className="mt-2 font-label text-[10px] text-outline text-right">94% VULNERABILITY_COVERAGE</p>
            </div>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm mt-0.5">check_circle</span>
                <span>Smart Contract Auditing (Manual/Automated)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm mt-0.5">check_circle</span>
                <span>Reentrancy / Overflow Prevention</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-secondary text-sm mt-0.5">check_circle</span>
                <span>Formal Verification Logic</span>
              </li>
            </ul>
          </div>
        </section>

        {/* 04: Architectural Tools */}
        <section className="md:col-span-12 lg:col-span-8 bg-surface-container-low p-10 relative">
          <div className="absolute top-0 right-0 p-4 font-label text-[10px] text-outline/30">0x03_ARCH</div>
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl">architecture</span>
            <h2 className="font-headline text-2xl font-bold tracking-tight uppercase">Architectural Tools</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 p-6 bg-surface-container-lowest border border-outline-variant/20">
              <p className="font-label text-secondary text-[10px] tracking-widest mb-4 uppercase">Backend / Server</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 font-headline text-sm">
                <span>Node.js</span>
                <span>FastAPI</span>
                <span>REST APIs</span>
                <span>MongoDB</span>
                <span>SQL</span>
                <span>Python</span>
              </div>
            </div>
            <div className="col-span-2 p-6 bg-surface-container-lowest border border-outline-variant/20">
              <p className="font-label text-primary text-[10px] tracking-widest mb-4 uppercase">Frontend / Interface</p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 font-headline text-sm">
                <span>TypeScript</span>
                <span>React.js</span>
                <span>Vite</span>
                <span>Tailwind CSS</span>
                <span>JavaScript</span>
              </div>
            </div>
            <div className="col-span-4 p-6 bg-[#131313] border-l-4 border-secondary">
              <p className="font-label text-outline text-[10px] tracking-widest mb-4 uppercase">Web3 Frameworks &amp; Tooling</p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-surface-container-low font-headline text-sm border border-outline-variant/50">Foundry</span>
                <span className="px-4 py-2 bg-surface-container-low font-headline text-sm border border-outline-variant/50">Hardhat</span>
                <span className="px-4 py-2 bg-surface-container-low font-headline text-sm border border-outline-variant/50">Ether.js</span>
                <span className="px-4 py-2 bg-surface-container-low font-headline text-sm border border-outline-variant/50">Web3.js</span>
                <span className="px-4 py-2 bg-surface-container-low font-headline text-sm border border-outline-variant/50">Solana Anchor</span>
                <span className="px-4 py-2 bg-surface-container-low font-headline text-sm border border-outline-variant/50">IPFS</span>
                <span className="px-4 py-2 bg-surface-container-low font-headline text-sm border border-outline-variant/50">Truffle</span>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      {/* Publication Section */}
      {/* eslint-disable-next-line */}
      <motion.section
        className="mt-20 border border-outline-variant/30 p-12 relative bg-surface-container-lowest overflow-hidden"
        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="relative z-10">
          <p className="font-label text-primary text-xs tracking-[0.4em] mb-6 uppercase">Scientific Publication // IEEE_INDEXED</p>
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-8 max-w-4xl leading-[1.1]">
            "Decentralized Finance and Cross-Chain Interoperable Automated Market Maker Using Blockchain"
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-16 pt-8 border-t border-outline-variant/30">
            <div>
              <p className="font-label text-outline text-[10px] tracking-widest mb-1 uppercase">Publisher</p>
              <p className="font-headline font-medium">IEEE · Feb 2024</p>
            </div>
            <div>
              <p className="font-label text-outline text-[10px] tracking-widest mb-1 uppercase">Digital Object Identifier</p>
              <p className="font-headline font-medium text-secondary">10.1109/ic-ETITE58242.2024.10493513</p>
            </div>
            <a
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-on-primary font-label text-xs tracking-widest uppercase hover:bg-primary-container transition-colors active:scale-95"
              href="https://ieeexplore.ieee.org/document/10493513"
              target="_blank" rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Access_Paper
            </a>
          </div>
        </div>
      </motion.section>
    </main>
  )
}
