import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center terminal-grid">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-md"
      >
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="material-symbols-outlined text-error text-6xl shadow-[0_0_20px_rgba(255,82,82,0.3)]">warning</span>
        </div>
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-error mb-4 uppercase">
          404_<span className="text-on-surface">NOT_FOUND</span>
        </h1>
        <div className="h-px w-full bg-outline-variant/20 my-6"></div>
        <p className="font-label text-sm uppercase tracking-widest text-outline mb-10 leading-relaxed">
          The requested coordinate <span className="text-secondary">[ {window.location.pathname} ]</span> is not indexed in the sovereign grid.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-10 py-5 bg-surface-container-low border border-primary/40 text-primary font-label font-bold uppercase tracking-widest text-xs hover:bg-primary/5 transition-all shadow-[0_0_30px_rgba(153,69,255,0.15)] group"
        >
          <span className="material-symbols-outlined text-sm transition-transform group-hover:-translate-x-1">arrow_back</span>
          Re-establish_Link
        </Link>
      </motion.div>

      {/* Decorative background numbers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Space_Mono'] text-[20vw] opacity-[0.02] pointer-events-none select-none z-0">
        404
      </div>
    </main>
  )
}
