export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-[#1c1b1b] bg-[#0e0e0e]">
      <div className="flex flex-col md:flex-row justify-between items-center px-10 gap-4">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <span className="font-['Space_Grotesk'] text-[10px] tracking-widest text-[#d8b9ff] font-bold">SYSTEM_ACTIVE // YRS_PORTFOLIO</span>
          <span className="font-['Space_Grotesk'] text-[10px] tracking-widest text-white/20">© 2024 Yash Raj Saxena</span>
        </div>
        <div className="flex gap-8">
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest text-white/20 hover:text-white underline decoration-[#9945ff] transition-all duration-500 uppercase"
            href="https://github.com/captr1g"
            target="_blank" rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest text-white/20 hover:text-white underline decoration-[#9945ff] transition-all duration-500 uppercase"
            href="https://www.linkedin.com/in/yash-raj-saxena/"
            target="_blank" rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="font-['Space_Grotesk'] text-[10px] tracking-widest text-[#00ec91] hover:text-white underline decoration-[#9945ff] transition-all duration-500 uppercase"
            href="mailto:yashrajsaxena1@gmail.com"
          >
            Email
          </a>
        </div>
        <div className="text-[10px] font-['Space_Grotesk'] text-white/10 tracking-[0.3em] uppercase hidden lg:block">
          Architecting the Sovereign Web3 Layers
        </div>
      </div>
    </footer>
  )
}
