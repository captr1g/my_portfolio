import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Projects() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-20 max-w-[1400px] mx-auto">
      {/* Hero Section */}
      <motion.section
        className="mb-24"
        initial="hidden" animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-2xl">
            <motion.p variants={fadeUp} custom={0} className="font-label text-secondary text-sm tracking-[0.2em] mb-4 uppercase">System_Active // Research_Development</motion.p>
            <motion.h1 variants={fadeUp} custom={1} className="font-headline text-6xl md:text-8xl font-bold leading-none -ml-1 uppercase tracking-tighter" style={{textShadow: '0 0 15px rgba(153,69,255,0.4)'}}>
              The Forge<span className="text-primary">.</span>
            </motion.h1>
          </div>
          <motion.div variants={fadeUp} custom={2} className="font-label text-right text-xs text-outline tracking-widest hidden md:block">
            DECENTRALIZED ARCHITECTURE<br/>
            STRESS-TESTED PROTOCOLS<br/>
            [ STATUS: OPTIMIZED ]
          </motion.div>
        </div>
        <div className="h-px bg-outline-variant/20 mt-12 w-full"></div>
      </motion.section>

      {/* Hackathon Winners Grid */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
        {/* Feature Card 1: Aether Yield Junction */}
        <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-low p-1 border-0 hover:bg-surface-container-high transition-all duration-500">
          <div className="relative aspect-video overflow-hidden">
            <img
              alt="Aether Yield Junction UI"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-all duration-700 reveal-image"
              src="/assets/aether-yield.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-transparent to-transparent opacity-80"></div>
            <div className="absolute top-6 left-6 flex gap-2">
              <span className="bg-primary text-on-primary font-label px-3 py-1 text-[10px] tracking-widest uppercase">1st Place</span>
              <span className="bg-surface-container-lowest/80 backdrop-blur-md border border-outline-variant/30 text-secondary font-label px-3 py-1 text-[10px] tracking-widest uppercase">Hackathon Winner</span>
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="font-label text-[10px] bg-surface-container-highest px-3 py-1 text-white/70 uppercase border-l-2 border-primary">Solidity</span>
              <span className="font-label text-[10px] bg-surface-container-highest px-3 py-1 text-white/70 uppercase border-l-2 border-primary">Foundry</span>
              <span className="font-label text-[10px] bg-surface-container-highest px-3 py-1 text-white/70 uppercase border-l-2 border-primary">EVM-Compatible</span>
            </div>
            <h2 className="font-headline text-4xl font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors">Aether Yield Junction</h2>
            <p className="text-on-surface-variant max-w-xl leading-relaxed">
              A high-frequency algorithmic liquidity aggregator designed to minimize slippage across fragmented decentralized exchanges. Optimized for sub-second execution on L2 networks.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <a className="text-primary font-label text-xs uppercase tracking-widest flex items-center gap-2 group/link" href="https://github.com/captr1g/aether-yield" target="_blank" rel="noopener noreferrer">
                View Repository <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <div className="text-outline-variant font-label text-[10px]">[ BUILD_VERSION: 1.0.4-STABLE ]</div>
            </div>
          </div>
        </div>

        {/* Feature Card 2: Meme War */}
        <div className="md:col-span-4 group flex flex-col justify-between bg-surface-container-low hover:bg-surface-container-high transition-all duration-500">
          <div className="relative h-full overflow-hidden">
            <img
              alt="Meme War Project"
              className="w-full h-full object-cover reveal-image"
              src="/assets/meme-war.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="bg-secondary text-on-secondary font-label px-3 py-1 text-[10px] tracking-widest uppercase mb-4 inline-block">Best Innovation</span>
              <h2 className="font-headline text-3xl font-bold uppercase tracking-tight mb-2">Meme War</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="font-label text-[9px] bg-black/40 backdrop-blur-md px-2 py-0.5 text-white/80 border border-white/10 uppercase">Rust</span>
                <span className="font-label text-[9px] bg-black/40 backdrop-blur-md px-2 py-0.5 text-white/80 border border-white/10 uppercase">WASM</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Decentralized proof-of-influence engine utilizing social graph consensus for on-chain assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Published Research Section */}
      <section className="relative bg-surface-container-lowest border border-outline-variant/10 p-10 md:p-20 overflow-hidden">
        <div className="absolute top-0 right-0 p-8 font-label text-[10px] text-primary/20 select-none hidden lg:block">
          SECURE_ARCHIVE_NODE_77<br/>
          ENCRYPTION_LAYER: AES-256<br/>
          DISTRIBUTION: PUBLIC_IEEE
        </div>
        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary via-secondary to-transparent opacity-30"></div>

        <div className="flex flex-col lg:flex-row gap-16 relative z-10">
          <div className="lg:w-1/3">
            <div className="w-12 h-1 bg-secondary mb-8"></div>
            <h2 className="font-headline text-4xl font-black uppercase tracking-tighter mb-6 leading-none">Published<br/>Research<span className="text-secondary">_</span></h2>
            <p className="text-on-surface-variant font-body text-sm leading-relaxed mb-8">
              Technical papers and academic contributions focusing on blockchain scalability and formal verification of smart contracts. Peer-reviewed and published under IEEE standards.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 text-xs font-label uppercase text-outline">
                <span className="material-symbols-outlined text-sm">verified</span> Verified Journal
              </div>
              <div className="flex items-center gap-4 text-xs font-label uppercase text-outline">
                <span className="material-symbols-outlined text-sm">security</span> Non-Repudiation
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="group cursor-pointer bg-surface-container border-l-4 border-secondary p-8 hover:bg-surface-container-high transition-all">
              <div className="flex justify-between items-start mb-6">
                <span className="font-label text-[10px] tracking-widest text-secondary uppercase">IEEE Publication XPLORE-2024</span>
                <span className="material-symbols-outlined text-secondary">description</span>
              </div>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight mb-4">Optimizing Throughput in Sharded Heterogeneous Networks</h3>
              <p className="text-on-surface-variant text-sm mb-6 font-body italic">
                "An exploration into cross-shard messaging overheads and the implementation of asynchronous state commitment protocols to mitigate latency spikes in high-load scenarios."
              </p>
              <div className="flex items-center gap-10">
                <div>
                  <span className="block text-[10px] font-label text-outline uppercase mb-1">Citations</span>
                  <span className="text-xl font-headline font-bold text-white">42+</span>
                </div>
                <div>
                  <span className="block text-[10px] font-label text-outline uppercase mb-1">DOI</span>
                  <span className="text-sm font-headline text-white/60">10.1109/BLOCK.2024.0042</span>
                </div>
                <div className="ml-auto">
                  <a
                    href="https://ieeexplore.ieee.org/document/10493513"
                    target="_blank" rel="noopener noreferrer"
                    className="bg-secondary text-on-secondary px-6 py-2 font-label text-[10px] uppercase tracking-widest hover:brightness-110 transition-all inline-block"
                  >
                    Access Paper
                  </a>
                </div>
              </div>
            </div>

            {/* Secondary Papers */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface-container-low border border-outline-variant/10 p-6 hover:border-primary/40 transition-colors">
                <span className="block font-label text-[9px] text-outline uppercase mb-3">Technical Abstract // 02</span>
                <h4 className="font-headline text-lg font-bold uppercase mb-3">Formal Methods in Solidity</h4>
                <p className="text-[12px] text-on-surface-variant mb-4">Leveraging symbolic execution for the prevention of reentrancy vulnerabilities in DeFi protocols.</p>
                <a className="text-primary font-label text-[9px] uppercase tracking-widest flex items-center gap-1" href="#">
                  Read Archive <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                </a>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/10 p-6 hover:border-primary/40 transition-colors">
                <span className="block font-label text-[9px] text-outline uppercase mb-3">Technical Abstract // 03</span>
                <h4 className="font-headline text-lg font-bold uppercase mb-3">ZK-Rollup Architecture</h4>
                <p className="text-[12px] text-on-surface-variant mb-4">Comparative analysis of optimistic vs zero-knowledge rollup finality speeds in retail payments.</p>
                <a className="text-primary font-label text-[9px] uppercase tracking-widest flex items-center gap-1" href="#">
                  Read Archive <span className="material-symbols-outlined text-[12px]">open_in_new</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Binaries */}
      <section className="mt-32">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight">The Lab Binaries</h2>
          <div className="flex-grow h-px bg-outline-variant/30"></div>
          <span className="font-label text-[10px] text-outline uppercase tracking-[0.3em]">Experimental_Work</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 row-span-1 bg-surface-container-low p-8 border border-outline-variant/10 hover:border-secondary/30 transition-all">
            <span className="material-symbols-outlined text-secondary mb-4 block">hub</span>
            <h5 className="font-headline text-xl font-bold uppercase mb-2">Cross-Chain Router</h5>
            <p className="text-xs text-on-surface-variant leading-relaxed">Low-level bridge architecture for seamless asset transfer between Polygon and Avalanche.</p>
          </div>
          <div className="col-span-1 bg-surface-container-low p-8 border border-outline-variant/10 flex flex-col justify-center items-center text-center">
            <span className="text-3xl font-headline font-bold text-primary mb-1">12</span>
            <span className="font-label text-[10px] text-outline uppercase">Active Repos</span>
          </div>
          <div className="col-span-1 bg-surface-container-low p-8 border border-outline-variant/10 flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
            <span className="font-label text-[10px] text-outline uppercase mt-2">Audited Code</span>
          </div>
          <div className="col-span-1 md:col-span-1 bg-surface-container-low p-8 border border-outline-variant/10">
            <h5 className="font-headline text-lg font-bold uppercase mb-4">Stack</h5>
            <div className="flex flex-col gap-2">
              <span className="font-label text-[9px] text-white/40 uppercase">Ethers.js</span>
              <span className="font-label text-[9px] text-white/40 uppercase">Hardhat</span>
              <span className="font-label text-[9px] text-white/40 uppercase">Circom</span>
            </div>
          </div>
          <div className="col-span-3 md:col-span-3 relative h-48 bg-surface-container-low overflow-hidden group">
            <img
              alt="Server Hardware"
              className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-700"
              src="/assets/node-infra.jpg"
            />
            <div className="absolute inset-0 p-8 flex items-end">
              <div>
                <h5 className="font-headline text-2xl font-bold uppercase">Node Infrastructure</h5>
                <p className="text-xs text-on-surface-variant max-w-sm">Managing validator nodes for decentralized networks across three global regions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
