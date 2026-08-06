import { useState, useEffect, useRef } from 'react'

// ─── SVG Illustrations ──────────────────────────────────────────────────────

function Cloud({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 120 60" className={className} style={style} fill="none">
      <ellipse cx="60" cy="45" rx="50" ry="18" fill="white" fillOpacity="0.95" />
      <ellipse cx="40" cy="38" rx="28" ry="22" fill="white" fillOpacity="0.95" />
      <ellipse cx="70" cy="32" rx="32" ry="26" fill="white" fillOpacity="0.95" />
      <ellipse cx="90" cy="40" rx="22" ry="18" fill="white" fillOpacity="0.95" />
    </svg>
  )
}

function SmilingSun({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <g className="animate-spin-slow" style={{ transformOrigin: '50px 50px' }}>
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg, i) => (
          <line key={i} x1="50" y1="50"
            x2={50 + 42 * Math.cos(deg * Math.PI / 180)}
            y2={50 + 42 * Math.sin(deg * Math.PI / 180)}
            stroke="#FFE066" strokeWidth="4" strokeLinecap="round" />
        ))}
      </g>
      <circle cx="50" cy="50" r="28" fill="#FFE066" stroke="#FFB347" strokeWidth="2" />
      <circle cx="42" cy="45" r="4" fill="#333" />
      <circle cx="58" cy="45" r="4" fill="#333" />
      <circle cx="43" cy="43" r="1.5" fill="white" />
      <circle cx="59" cy="43" r="1.5" fill="white" />
      <path d="M40 56 Q50 66 60 56" stroke="#FF8C42" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <circle cx="39" cy="56" r="2" fill="#FFB347" />
      <circle cx="61" cy="56" r="2" fill="#FFB347" />
    </svg>
  )
}

function Rainbow({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 400 200" className={className} style={style} fill="none">
      <path d="M10 200 Q200 -20 390 200" stroke="#FF6B6B" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M28 200 Q200 10 372 200" stroke="#FF9F43" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M46 200 Q200 30 354 200" stroke="#FFE066" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M64 200 Q200 50 336 200" stroke="#A8E6CF" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M82 200 Q200 70 318 200" stroke="#87CEEB" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.8" />
      <path d="M100 200 Q200 90 300 200" stroke="#C9B8E8" strokeWidth="12" strokeLinecap="round" fill="none" opacity="0.8" />
    </svg>
  )
}

function Balloon({ color, className = '', style = {} }: { color: string; className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 60 100" className={className} style={style} fill="none">
      <ellipse cx="30" cy="32" rx="22" ry="28" fill={color} />
      <ellipse cx="22" cy="22" rx="7" ry="9" fill="white" fillOpacity="0.3" />
      <path d="M30 60 Q28 72 30 80 Q32 88 30 95" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M30 60 L33 65" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function Butterfly({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 50" className={className} style={style} fill="none">
      <g className="animate-flutter">
        <ellipse cx="25" cy="18" rx="22" ry="16" fill="#FFB3C6" fillOpacity="0.8" stroke="#FF8FAB" strokeWidth="1" />
        <ellipse cx="25" cy="35" rx="16" ry="12" fill="#FFD6E0" fillOpacity="0.8" stroke="#FF8FAB" strokeWidth="1" />
      </g>
      <g className="animate-flutter" style={{ animationDelay: '0.1s' }}>
        <ellipse cx="55" cy="18" rx="22" ry="16" fill="#C9B8E8" fillOpacity="0.8" stroke="#9B7ED4" strokeWidth="1" />
        <ellipse cx="55" cy="35" rx="16" ry="12" fill="#E0D4F5" fillOpacity="0.8" stroke="#9B7ED4" strokeWidth="1" />
      </g>
      <ellipse cx="40" cy="25" rx="3" ry="12" fill="#333" />
      <path d="M38 13 Q36 6 34 4" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M42 13 Q44 6 46 4" stroke="#333" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="34" cy="4" r="2" fill="#333" />
      <circle cx="46" cy="4" r="2" fill="#333" />
    </svg>
  )
}

function Star({ className = '', style = {}, color = '#FFE066' }: { className?: string; style?: React.CSSProperties; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} style={style} fill="none">
      <path d="M20 2 L23.5 14 L36 14 L26 22 L29.5 34 L20 26.5 L10.5 34 L14 22 L4 14 L16.5 14 Z" fill={color} stroke={color} strokeWidth="1" />
    </svg>
  )
}

function FlowerStem({ color = '#A8E6CF', petalColor = '#FFB3C6' }: { color?: string; petalColor?: string }) {
  return (
    <svg viewBox="0 0 40 80" fill="none">
      <line x1="20" y1="80" x2="20" y2="30" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d="M20 28 Q10 18 8 10 Q18 12 20 22 Q22 12 32 10 Q30 18 20 28" fill={petalColor} />
      <circle cx="20" cy="28" r="6" fill="#FFE066" />
      <circle cx="20" cy="28" r="3" fill="#FFB347" />
      <path d="M14 55 Q8 52 6 45" stroke={color} strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="6" cy="43" rx="5" ry="7" fill={color} opacity="0.7" transform="rotate(-30 6 43)" />
    </svg>
  )
}

function TeddyBear({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none">
      <circle cx="25" cy="30" r="14" fill="#D4A574" />
      <circle cx="75" cy="30" r="14" fill="#D4A574" />
      <circle cx="25" cy="30" r="9" fill="#C4956A" />
      <circle cx="75" cy="30" r="9" fill="#C4956A" />
      <ellipse cx="50" cy="75" rx="32" ry="38" fill="#D4A574" />
      <ellipse cx="50" cy="42" rx="24" ry="24" fill="#D4A574" />
      <ellipse cx="50" cy="42" rx="24" ry="24" fill="#C4956A" fillOpacity="0.3" />
      <circle cx="40" cy="37" r="4" fill="#333" />
      <circle cx="60" cy="37" r="4" fill="#333" />
      <circle cx="41" cy="36" r="1.5" fill="white" />
      <circle cx="61" cy="36" r="1.5" fill="white" />
      <ellipse cx="50" cy="48" rx="8" ry="6" fill="#C4956A" />
      <circle cx="50" cy="46" r="3" fill="#A0745A" />
      <path d="M44 52 Q50 57 56 52" stroke="#A0745A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <ellipse cx="30" cy="95" rx="12" ry="18" fill="#D4A574" transform="rotate(15 30 95)" />
      <ellipse cx="70" cy="95" rx="12" ry="18" fill="#D4A574" transform="rotate(-15 70 95)" />
      <ellipse cx="50" cy="80" rx="14" ry="10" fill="#C4956A" fillOpacity="0.5" />
      <circle cx="50" cy="70" r="4" fill="#FF8FAB" fillOpacity="0.6" />
    </svg>
  )
}

function BuildingBlock({ letter, color, className = '' }: { letter: string; color: string; className?: string }) {
  return (
    <svg viewBox="0 0 60 60" className={className} fill="none">
      <rect x="4" y="4" width="52" height="52" rx="8" fill={color} />
      <rect x="4" y="4" width="52" height="52" rx="8" fill="white" fillOpacity="0.1" />
      <rect x="2" y="2" width="52" height="52" rx="8" fill={color} stroke="white" strokeOpacity="0.3" strokeWidth="2" />
      <text x="29" y="38" textAnchor="middle" fontSize="28" fontFamily="Baloo 2, cursive" fontWeight="800" fill="white">{letter}</text>
    </svg>
  )
}

function Crayon({ color, angle = 0, className = '' }: { color: string; angle?: number; className?: string }) {
  return (
    <svg viewBox="0 0 30 120" className={className} style={{ transform: `rotate(${angle}deg)` }} fill="none">
      <polygon points="15,0 5,20 25,20" fill={color} opacity="0.8" />
      <rect x="5" y="20" width="20" height="80" rx="2" fill={color} />
      <rect x="5" y="20" width="20" height="12" fill="white" fillOpacity="0.2" />
      <rect x="5" y="90" width="20" height="10" fill={color} opacity="0.7" />
      <rect x="3" y="100" width="24" height="8" rx="2" fill="#E0E0E0" />
      <text x="15" y="70" textAnchor="middle" fontSize="8" fill="white" fontFamily="Nunito" fontWeight="700" transform="rotate(0 15 60)">✏</text>
    </svg>
  )
}

function PaperAirplane({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 60" className={className} style={style} fill="none">
      <polygon points="0,30 80,0 60,60" fill="#87CEEB" stroke="#5BA8D0" strokeWidth="1.5" />
      <polygon points="60,60 40,40 80,0" fill="#C8E9F8" />
      <line x1="40" y1="40" x2="80" y2="0" stroke="#5BA8D0" strokeWidth="1" />
      <path d="M10 30 Q40 28 60 60" stroke="white" strokeWidth="1" opacity="0.5" fill="none" />
    </svg>
  )
}

function Kite({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 80 100" className={className} style={style} fill="none">
      <polygon points="40,2 70,45 40,80 10,45" fill="#FF6B6B" stroke="#E74C3C" strokeWidth="1.5" />
      <polygon points="40,2 70,45 40,43" fill="#FF9F9F" fillOpacity="0.5" />
      <line x1="40" y1="2" x2="40" y2="80" stroke="#E74C3C" strokeWidth="1.5" />
      <line x1="10" y1="45" x2="70" y2="45" stroke="#E74C3C" strokeWidth="1.5" />
      <path d="M40 80 Q45 85 42 90 Q47 92 44 98" stroke="#FFB347" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="43" cy="98" r="4" fill="#FFE066" />
    </svg>
  )
}

function GrassHill({ fill = '#A8E6CF' }: { fill?: string }) {
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" fill="none">
      <path d="M0 120 Q360 0 720 60 Q1080 120 1440 30 L1440 120 Z" fill={fill} />
    </svg>
  )
}

function Bird({ className = '', style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg viewBox="0 0 40 20" className={className} style={style} fill="none">
      <path d="M20 10 Q10 2 0 6" stroke="#555" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M20 10 Q30 2 40 6" stroke="#555" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="20" cy="10" r="3" fill="#555" />
    </svg>
  )
}

function Rabbit({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 100" className={className} fill="none">
      <ellipse cx="30" cy="25" rx="8" ry="20" fill="#F5F5F5" stroke="#DDD" strokeWidth="1" />
      <ellipse cx="50" cy="25" rx="8" ry="20" fill="#F5F5F5" stroke="#DDD" strokeWidth="1" />
      <ellipse cx="30" cy="28" rx="4" ry="14" fill="#FFB3C6" fillOpacity="0.6" />
      <ellipse cx="50" cy="28" rx="4" ry="14" fill="#FFB3C6" fillOpacity="0.6" />
      <ellipse cx="40" cy="60" rx="24" ry="28" fill="#F5F5F5" stroke="#DDD" strokeWidth="1" />
      <ellipse cx="40" cy="42" rx="18" ry="18" fill="#F5F5F5" stroke="#DDD" strokeWidth="1" />
      <circle cx="34" cy="38" r="3.5" fill="#333" /><circle cx="35" cy="37" r="1.5" fill="white" />
      <circle cx="46" cy="38" r="3.5" fill="#333" /><circle cx="47" cy="37" r="1.5" fill="white" />
      <circle cx="40" cy="44" r="4" fill="#FFB3C6" />
      <path d="M36 48 Q40 53 44 48" stroke="#888" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <ellipse cx="28" cy="75" rx="8" ry="14" fill="#F5F5F5" stroke="#DDD" strokeWidth="1" transform="rotate(10 28 75)" />
      <ellipse cx="52" cy="75" rx="8" ry="14" fill="#F5F5F5" stroke="#DDD" strokeWidth="1" transform="rotate(-10 52 75)" />
      <ellipse cx="40" cy="88" rx="12" ry="8" fill="#F5F5F5" stroke="#DDD" strokeWidth="1" />
    </svg>
  )
}

// ─── Loading Screen ──────────────────────────────────────────────────────────

function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0)
  const [trainPos, setTrainPos] = useState(-200)
  useEffect(() => {
    const t = setInterval(() => setProgress(p => {
      if (p >= 100) { clearInterval(t); setTimeout(onDone, 400); return 100 }
      return p + 2
    }), 40)
    return () => clearInterval(t)
  }, [onDone])
  useEffect(() => {
    const t = setInterval(() => setTrainPos(p => p > window.innerWidth + 200 ? -200 : p + 4), 16)
    return () => clearInterval(t)
  }, [])

  const blocks = ['W','E','L','C','O','M','E']
  const blockColors = ['#FF6B6B','#FF9F43','#FFE066','#A8E6CF','#87CEEB','#C9B8E8','#FFB3C6']

  return (
    <div className="loading-screen px-4 sm:px-6">
      <SmilingSun className="w-16 h-16 sm:w-20 sm:h-20 animate-pulse-soft mb-4" />
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2" style={{ fontFamily: "'Baloo 2', cursive", color: '#FF6B6B' }}>
        Little Stars Kindergarten
      </h1>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
        {blocks.map((l, i) => (
          <BuildingBlock key={i} letter={l} color={blockColors[i]}
            className={`w-10 h-10 sm:w-12 sm:h-12 animate-pop-in`}
            style={{ animationDelay: `${i * 0.1}s` } as React.CSSProperties} />
        ))}
      </div>
      {/* Rainbow arc */}
      <div className="relative w-56 sm:w-64 h-14 sm:h-16 mb-6">
        <Rainbow className="absolute inset-0 w-full h-full" />
      </div>
      {/* Train track */}
      <div className="relative w-full max-w-xl h-16 overflow-hidden">
        <div className="absolute bottom-0 w-full h-2 bg-amber-200 rounded" />
        <svg viewBox="0 0 120 40" style={{ position: 'absolute', bottom: 4, left: trainPos, width: 120 }} fill="none">
          <rect x="0" y="10" width="110" height="22" rx="6" fill="#FF6B6B" />
          <rect x="0" y="10" width="30" height="22" rx="6" fill="#E74C3C" />
          <rect x="4" y="13" width="22" height="14" rx="3" fill="#87CEEB" />
          <rect x="36" y="13" width="22" height="12" rx="2" fill="#FFE066" fillOpacity="0.8" />
          <rect x="64" y="13" width="22" height="12" rx="2" fill="#A8E6CF" fillOpacity="0.8" />
          <circle cx="20" cy="32" r="7" fill="#333" /><circle cx="20" cy="32" r="4" fill="#888" />
          <circle cx="50" cy="32" r="7" fill="#333" /><circle cx="50" cy="32" r="4" fill="#888" />
          <circle cx="80" cy="32" r="7" fill="#333" /><circle cx="80" cy="32" r="4" fill="#888" />
          <circle cx="105" cy="32" r="7" fill="#333" /><circle cx="105" cy="32" r="4" fill="#888" />
          <path d="M0 14 Q-8 6 -4 0" stroke="white" strokeWidth="3" fill="none" strokeOpacity="0.7" />
        </svg>
      </div>
      <div className="mt-6 w-full max-w-xs sm:max-w-sm h-3 bg-white rounded-full overflow-hidden shadow-inner">
        <div className="h-full rounded-full transition-all duration-100"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #FF6B6B, #FF9F43, #FFE066, #A8E6CF, #87CEEB, #C9B8E8)' }} />
      </div>
      <p className="mt-2 text-sm font-semibold text-center" style={{ color: '#888', fontFamily: "'Nunito', sans-serif" }}>
        {progress < 100 ? 'Getting ready for fun...' : 'Let\'s go! 🎉'}
      </p>
    </div>
  )
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}
      style={{ background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent', backdropFilter: scrolled ? 'blur(12px)' : 'none' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <SmilingSun className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
          <div className="min-w-0">
            <span className="block text-lg sm:text-xl font-bold leading-none" style={{ fontFamily: "'Baloo 2', cursive", color: '#FF6B6B' }}>Little Stars</span>
            <span className="block text-[11px] sm:text-xs font-semibold" style={{ color: '#FFB347', fontFamily: "'Nunito', sans-serif" }}>Kindergarten</span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          {['About','Programs','Activities','Gallery','Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="font-semibold transition-colors hover:text-pink-400"
              style={{ fontFamily: "'Nunito', sans-serif", color: '#444', fontSize: 15 }}>
              {item}
            </a>
          ))}
        </div>
        <button className="btn-pill px-3 py-2 sm:px-5 sm:py-2 text-white text-xs sm:text-sm shadow-md"
          style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF9F43)', fontFamily: "'Baloo 2', cursive" }}>
          ✨ Enroll
        </button>
      </div>
    </nav>
  )
}

// ─── Hero ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #EAF6FD 0%, #FFD6E0 50%, #E0D4F5 100%)' }}>

      {/* Drifting clouds - hidden on mobile */}
      <Cloud className="hidden md:block absolute w-48 opacity-90 animate-drift" style={{ top: '8%', animationDuration: '28s' }} />
      <Cloud className="hidden md:block absolute w-36 opacity-75 animate-drift2" style={{ top: '18%', animationDuration: '42s', animationDelay: '8s' }} />
      <Cloud className="hidden md:block absolute w-56 opacity-80 animate-drift" style={{ top: '4%', animationDuration: '34s', animationDelay: '14s' }} />

      {/* Sun - hidden on mobile */}
      <SmilingSun className="hidden md:block absolute w-24 h-24 animate-pulse-soft" style={{ top: '10%', right: '8%' }} />

      {/* Birds - hidden on mobile */}
      <Bird className="hidden md:block absolute w-10 animate-drift" style={{ top: '22%', animationDuration: '22s', animationDelay: '4s' }} />
      <Bird className="hidden md:block absolute w-8 animate-drift2" style={{ top: '28%', animationDuration: '30s', animationDelay: '12s' }} />

      {/* Stars - hidden on mobile */}
      <Star className="hidden md:block absolute w-8 animate-twinkle" style={{ top: '35%', left: '5%' }} color="#FFE066" />
      <Star className="hidden md:block absolute w-6 animate-twinkle delay-500" style={{ top: '15%', left: '30%' }} color="#FFB3C6" />
      <Star className="hidden md:block absolute w-5 animate-twinkle delay-1000" style={{ top: '50%', right: '20%' }} color="#C9B8E8" />

      {/* Balloons - hidden on mobile */}
      <Balloon color="#FF6B6B" className="hidden md:block absolute w-16 animate-float" style={{ top: '20%', left: '8%' }} />
      <Balloon color="#FFE066" className="hidden md:block absolute w-12 animate-float delay-700" style={{ top: '30%', left: '15%' }} />
      <Balloon color="#87CEEB" className="hidden md:block absolute w-14 animate-float delay-300" style={{ top: '15%', right: '25%' }} />
      <Balloon color="#A8E6CF" className="hidden md:block absolute w-10 animate-float delay-1000" style={{ top: '25%', right: '15%' }} />
      <Balloon color="#C9B8E8" className="hidden md:block absolute w-12 animate-float delay-500" style={{ top: '60%', left: '5%' }} />

      {/* Butterflies - hidden on mobile */}
      <Butterfly className="hidden md:block absolute w-16 animate-sway" style={{ top: '40%', left: '12%' }} />
      <Butterfly className="hidden md:block absolute w-12 animate-sway delay-1000" style={{ top: '55%', right: '10%' }} />
      <Butterfly className="hidden md:block absolute w-10 animate-sway delay-500" style={{ top: '30%', right: '30%' }} />

      {/* Kite - hidden on mobile */}
      <Kite className="hidden md:block absolute w-16 animate-float-slow" style={{ top: '20%', right: '40%' }} />

      {/* Paper airplane - hidden on mobile */}
      <PaperAirplane className="hidden md:block absolute w-20 animate-drift2" style={{ top: '45%', animationDuration: '18s', animationDelay: '6s' }} />

      {/* Rainbow behind text - hidden on mobile */}
      <Rainbow className="hidden md:block absolute w-full opacity-30" style={{ top: '20%', left: 0 }} />

      {/* Main content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:pt-28 sm:pb-32 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start gap-2 mb-3 sm:mb-4">
            <BuildingBlock letter="A" color="#FF6B6B" className="w-9 h-9 sm:w-10 sm:h-10 animate-pop-in" />
            <BuildingBlock letter="B" color="#FFB347" className="w-9 h-9 sm:w-10 sm:h-10 animate-pop-in delay-100" />
            <BuildingBlock letter="C" color="#FFE066" className="w-9 h-9 sm:w-10 sm:h-10 animate-pop-in delay-200" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-3 sm:mb-4"
            style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>
            Where Every{' '}
            <span style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF9F43, #FFE066)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Child's Magic
            </span>{' '}Begins ✨
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0" style={{ color: '#555', fontFamily: "'Nunito', sans-serif" }}>
            A joyful, nurturing space where little ones explore, create, laugh, and grow.
            Enroll your child in a world of imagination and wonder today!
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-2 sm:gap-4">
            <button className="btn-pill px-5 sm:px-8 py-2 sm:py-4 text-white text-sm sm:text-base md:text-lg shadow-xl"
              style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF9F43)' }}>
              🎈 Start the Journey
            </button>
            <button className="btn-pill px-5 sm:px-8 py-2 sm:py-4 text-sm sm:text-base md:text-lg shadow-md"
              style={{ background: 'white', color: '#FF6B6B', border: '2px solid #FFB3C6' }}>
              🎥 Watch Our Story
            </button>
          </div>
          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 mt-6 sm:mt-10">
            {[['500+','Happy Kids'],['20+','Caring Staff'],['15+','Years of Joy']].map(([num, label]) => (
              <div key={label} className="text-center min-w-[80px] sm:min-w-[90px]">
                <div className="text-lg sm:text-xl md:text-2xl font-bold" style={{ fontFamily: "'Baloo 2', cursive", color: '#FF6B6B' }}>{num}</div>
                <div className="text-[10px] sm:text-xs font-semibold" style={{ color: '#888', fontFamily: "'Nunito', sans-serif" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero illustration - hidden on small devices */}
        <div className="hidden lg:flex relative justify-center items-end h-auto">
          <TeddyBear className="w-32 h-32 absolute bottom-0 left-4 animate-float delay-300" />
          <Rabbit className="w-24 h-28 absolute bottom-0 right-4 animate-float delay-700" />
          {/* Playground scene */}
          <div className="relative w-full max-w-[18rem] sm:max-w-[22rem] h-64 sm:h-72 rounded-full shadow-2xl flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #C8F2E0 0%, #C8E9F8 50%, #E0D4F5 100%)' }}>
            <Rainbow className="absolute w-full opacity-60" style={{ top: '10%' }} />
            {/* Children stick figures */}
            <svg viewBox="0 0 200 180" className="w-full h-full" fill="none">
              {/* Child 1 - reading */}
              <circle cx="60" cy="60" r="16" fill="#FFB3C6" stroke="#FF8FAB" strokeWidth="2" />
              <circle cx="60" cy="60" r="10" fill="#FFDDE9" />
              <circle cx="56" cy="57" r="3" fill="#333" /><circle cx="64" cy="57" r="3" fill="#333" />
              <path d="M55 65 Q60 69 65 65" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <rect x="40" y="75" width="40" height="50" rx="8" fill="#87CEEB" />
              <rect x="42" y="90" width="36" height="32" rx="6" fill="#FFE066" />
              <text x="60" y="110" textAnchor="middle" fontSize="14" fill="#FF6B6B" fontFamily="Baloo 2">📖</text>
              {/* Child 2 - painting */}
              <circle cx="140" cy="55" r="16" fill="#C9B8E8" stroke="#9B7ED4" strokeWidth="2" />
              <circle cx="140" cy="55" r="10" fill="#E8DEFF" />
              <circle cx="136" cy="52" r="3" fill="#333" /><circle cx="144" cy="52" r="3" fill="#333" />
              <path d="M135 60 Q140 64 145 60" stroke="#9B7ED4" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <rect x="120" y="70" width="40" height="50" rx="8" fill="#A8E6CF" />
              <text x="140" y="105" textAnchor="middle" fontSize="18" fill="#FF6B6B" fontFamily="Baloo 2">🎨</text>
              {/* Slide */}
              <path d="M90 40 L90 140 L170 140" stroke="#FFB347" strokeWidth="8" strokeLinecap="round" fill="none" />
              <rect x="82" y="25" width="16" height="20" rx="4" fill="#FFB347" />
              {/* Child 3 on slide */}
              <circle cx="90" cy="90" r="12" fill="#FFE066" stroke="#FFB347" strokeWidth="1.5" />
              <circle cx="87" cy="87" r="2.5" fill="#333" /><circle cx="93" cy="87" r="2.5" fill="#333" />
              <path d="M86 93 Q90 97 94 93" stroke="#FF6B6B" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              {/* Grass */}
              <path d="M0 160 Q50 140 100 155 Q150 170 200 155 L200 180 L0 180 Z" fill="#A8E6CF" />
              <path d="M10 160 Q12 148 14 160" stroke="#7DC49A" strokeWidth="2" strokeLinecap="round" />
              <path d="M30 155 Q32 143 34 155" stroke="#7DC49A" strokeWidth="2" strokeLinecap="round" />
              <path d="M160 158 Q162 146 164 158" stroke="#7DC49A" strokeWidth="2" strokeLinecap="round" />
              <path d="M180 153 Q182 141 184 153" stroke="#7DC49A" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          {/* Crayons decoration */}
          <Crayon color="#FF6B6B" angle={-20} className="absolute w-8 top-4 right-2" />
          <Crayon color="#FFE066" angle={15} className="absolute w-7 top-8 left-2" />
          <Crayon color="#87CEEB" angle={-10} className="absolute w-6 bottom-8 right-0" />
        </div>
      </div>

      {/* Wave divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
          <path d="M0 40 Q180 0 360 40 Q540 80 720 40 Q900 0 1080 40 Q1260 80 1440 40 L1440 80 L0 80 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

// ─── Programs ────────────────────────────────────────────────────────────────

function Programs() {
  const programs = [
    { icon: '🌱', title: 'Tiny Sprouts', age: 'Ages 2–3', desc: 'A gentle introduction to learning through play, sensory exploration, and social discovery.', color: '#A8E6CF', bg: '#EAFAF4' },
    { icon: '⭐', title: 'Star Explorers', age: 'Ages 3–4', desc: 'Creative arts, storytelling, music, and early literacy in a nurturing group setting.', color: '#87CEEB', bg: '#EAF6FD' },
    { icon: '🚀', title: 'Little Rockets', age: 'Ages 4–5', desc: 'Math foundations, phonics, science experiments, and project-based adventures.', color: '#C9B8E8', bg: '#F3EEFF' },
    { icon: '🎓', title: 'Big Kids Club', age: 'Ages 5–6', desc: 'School-readiness program with reading, writing, math, and confidence-building activities.', color: '#FFB3C6', bg: '#FFF0F4' },
    { icon: '🎨', title: 'Art & Craft Studio', age: 'All Ages', desc: 'Painting, clay, collage, and more. A space for little artists to express themselves freely.', color: '#FFE066', bg: '#FFFBE6' },
    { icon: '🎵', title: 'Music & Movement', age: 'All Ages', desc: 'Dance, rhythm, instruments, and songs. Building coordination and joy through music.', color: '#FFB347', bg: '#FFF3E0' },
  ]

  return (
    <section id="programs" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative elements */}
      <Star className="absolute w-10 animate-twinkle" style={{ top: '10%', left: '3%' }} color="#FFE066" />
      <Star className="absolute w-7 animate-twinkle delay-500" style={{ top: '60%', right: '4%' }} color="#FFB3C6" />
      <Butterfly className="absolute w-14 animate-sway" style={{ top: '15%', right: '8%' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex justify-center gap-2 mb-3">
            <BuildingBlock letter="1" color="#FF6B6B" className="w-9 h-9" />
            <BuildingBlock letter="2" color="#FF9F43" className="w-9 h-9" />
            <BuildingBlock letter="3" color="#FFE066" className="w-9 h-9" />
          </div>
          <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>
            Our Magical Programs 🌈
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#666', fontFamily: "'Nunito', sans-serif" }}>
            Carefully designed programs for every stage of early childhood development
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {programs.map((p, i) => (
            <div key={i} className="card-hover rounded-3xl p-5 sm:p-7 cursor-pointer"
              style={{ background: p.bg, border: `2px solid ${p.color}40` }}>
              <div className="text-4xl mb-4">{p.icon}</div>
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-3"
                style={{ background: `${p.color}50`, color: '#555', fontFamily: "'Nunito', sans-serif" }}>
                {p.age}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666', fontFamily: "'Nunito', sans-serif" }}>{p.desc}</p>
              <div className="mt-4">
                <span className="text-sm font-bold" style={{ color: p.color === '#FFE066' ? '#CC9900' : p.color, fontFamily: "'Baloo 2', cursive" }}>
                  Learn more →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
          <path d="M0 0 Q360 80 720 30 Q1080 -20 1440 60 L1440 80 L0 80 Z" fill="#EAF6FD" />
        </svg>
      </div>
    </section>
  )
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────

function WhyUs() {
  const reasons = [
    { icon: '💛', title: 'Loving Teachers', desc: 'Our certified educators are passionate, nurturing, and trained in early childhood development.' },
    { icon: '🏡', title: 'Safe Environment', desc: 'Fully secured, child-proofed facilities with CCTV, secure entry, and strict safety protocols.' },
    { icon: '🌿', title: 'Nature Play', desc: 'Daily outdoor time in our garden for fresh air, exploration, and connection with nature.' },
    { icon: '🍎', title: 'Healthy Nutrition', desc: 'Chef-prepared organic snacks and meals that kids actually love — colorful, fun, and nutritious.' },
    { icon: '🧠', title: 'Holistic Growth', desc: 'Emotional intelligence, social skills, and cognitive development nurtured every day.' },
    { icon: '👨‍👩‍👧', title: 'Family Partnership', desc: 'Regular updates, parent workshops, and an open-door policy to keep families connected.' },
  ]
  return (
    <section className="relative py-20 overflow-hidden" style={{ background: '#EAF6FD' }}>
      <Cloud className="absolute w-40 opacity-60" style={{ top: '5%', left: '0' }} />
      <Cloud className="absolute w-32 opacity-50" style={{ top: '50%', right: '0' }} />
      <Kite className="absolute w-14 animate-float-slow" style={{ top: '10%', right: '12%' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>
            Why Families Love Us 💕
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#666', fontFamily: "'Nunito', sans-serif" }}>
            We believe every child deserves the best start in life
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="card-hover bg-white rounded-3xl p-5 sm:p-7 shadow-md">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-4"
                style={{ background: ['#FFD6E0','#C8E9F8','#C8F2E0','#FFF3AA','#E8DEFF','#FFE4CC'][i % 6] }}>
                {r.icon}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#666', fontFamily: "'Nunito', sans-serif" }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Activities ──────────────────────────────────────────────────────────────

function Activities() {
  const activities = [
    { emoji: '🎨', name: 'Painting', time: '9:00 AM', color: '#FFB3C6' },
    { emoji: '📚', name: 'Story Time', time: '10:30 AM', color: '#87CEEB' },
    { emoji: '🎵', name: 'Music & Dance', time: '11:00 AM', color: '#C9B8E8' },
    { emoji: '🌿', name: 'Garden Play', time: '11:30 AM', color: '#A8E6CF' },
    { emoji: '🧩', name: 'Puzzles', time: '2:00 PM', color: '#FFE066' },
    { emoji: '🖍️', name: 'Drawing', time: '3:00 PM', color: '#FFB347' },
    { emoji: '🏃', name: 'Sports Fun', time: '3:30 PM', color: '#FF6B6B' },
    { emoji: '🍪', name: 'Baking', time: '4:00 PM', color: '#FFD6E0' },
  ]

  return (
    <section id="activities" className="relative py-20 bg-white overflow-hidden">
      <Star className="absolute w-8 animate-twinkle" style={{ top: '8%', right: '5%' }} color="#FFE066" />
      <PaperAirplane className="absolute w-16 animate-float-slow" style={{ top: '20%', left: '5%' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>
            A Day of Adventures 🌟
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#666', fontFamily: "'Nunito', sans-serif" }}>
            Every day is packed with joyful activities that spark creativity and growth
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {activities.map((a, i) => (
            <div key={i} className="card-hover rounded-3xl p-5 text-center cursor-pointer"
              style={{ background: `${a.color}30`, border: `2px solid ${a.color}60` }}>
              <div className="text-4xl mb-3">{a.emoji}</div>
              <div className="font-bold text-base mb-1" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>{a.name}</div>
              <div className="text-xs font-semibold px-3 py-1 rounded-full inline-block"
                style={{ background: a.color, color: '#fff', fontFamily: "'Nunito', sans-serif" }}>
                {a.time}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
          <path d="M0 60 Q360 0 720 50 Q1080 100 1440 20 L1440 80 L0 80 Z" fill="#FFF0F4" />
        </svg>
      </div>
    </section>
  )
}

// ─── Gallery ─────────────────────────────────────────────────────────────────

function Gallery() {
  const photos = [
    { id: '1557939438-1e8d3a82d61f', caption: 'Painting adventures!', rotate: '-3deg' },
    { id: '1503454537195-1dcabb73ffb9', caption: 'Story time magic', rotate: '2deg' },
    { id: '1529390079861-591de354faf5', caption: 'Garden explorers', rotate: '-2deg' },
    { id: '1427504494785-3a9ca7044f45', caption: 'Music & movement', rotate: '3deg' },
    { id: '1519340241574-2cec6aef0c01', caption: 'Little scientists', rotate: '-1deg' },
    { id: '1540479859555-17af45c78602', caption: 'Playtime friends', rotate: '2.5deg' },
  ]

  return (
    <section id="gallery" className="relative py-20 overflow-hidden" style={{ background: '#FFF0F4' }}>
      <Butterfly className="absolute w-14 animate-sway" style={{ top: '10%', left: '4%' }} />
      <Balloon color="#FFE066" className="absolute w-12 animate-float delay-500" style={{ top: '20%', right: '5%' }} />
      <Star className="absolute w-7 animate-twinkle delay-300" style={{ bottom: '20%', left: '6%' }} color="#C9B8E8" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>
            Snapshots of Joy 📸
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: '#666', fontFamily: "'Nunito', sans-serif" }}>
            A peek into the magical moments that happen every day at Little Stars
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 place-items-center">
          {photos.map((p, i) => (
            <div key={i} className="polaroid w-full max-w-xs"
              style={{ transform: `rotate(${p.rotate})`, background: 'white', borderRadius: 8 }}>
              <img
                src={`https://images.unsplash.com/photo-${p.id}?w=400&h=300&fit=crop&auto=format`}
                alt={p.caption}
                className="w-full rounded-sm"
                style={{ height: 180, objectFit: 'cover' }}
              />
              <p className="text-center mt-2 text-sm font-bold" style={{ fontFamily: "'Baloo 2', cursive", color: '#555' }}>{p.caption}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="wave-divider">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" fill="none">
          <path d="M0 30 Q360 80 720 20 Q1080 -40 1440 50 L1440 80 L0 80 Z" fill="#E0D4F5" />
        </svg>
      </div>
    </section>
  )
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

function Testimonials() {
  const reviews = [
    { name: 'Sarah M.', child: 'Mom of Emma, 4', text: 'Little Stars completely transformed my shy daughter. She comes home every day bursting with excitement about her friends and everything she learned!', stars: 5 },
    { name: 'James & Lisa', child: 'Parents of Oliver, 3', text: 'The teachers here are absolutely incredible. They know every child individually and make each one feel so special and loved.', stars: 5 },
    { name: 'Priya K.', child: 'Mom of Arjun, 5', text: 'My son can already read simple books and loves math! The curriculum is amazing — challenging but always fun and age-appropriate.', stars: 5 },
  ]

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: '#E0D4F5' }}>
      <Cloud className="absolute w-36 opacity-50" style={{ top: '5%', right: '5%' }} />
      <Star className="absolute w-9 animate-twinkle" style={{ bottom: '15%', left: '8%' }} color="#FFE066" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-3" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>
            Happy Families 🌸
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="card-hover bg-white rounded-3xl p-7 shadow-md">
              <div className="flex mb-3">
                {'⭐'.repeat(r.stars).split('').map((s, j) => <span key={j} className="text-lg">{s}</span>)}
              </div>
              <p className="text-sm leading-relaxed mb-5 italic" style={{ color: '#555', fontFamily: "'Nunito', sans-serif" }}>
                "{r.text}"
              </p>
              <div>
                <div className="font-bold" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>{r.name}</div>
                <div className="text-xs" style={{ color: '#999', fontFamily: "'Nunito', sans-serif" }}>{r.child}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact / CTA ───────────────────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #EAF6FD, #FFD6E0)' }}>
      <Balloon color="#FFE066" className="absolute w-14 animate-float" style={{ top: '10%', left: '5%' }} />
      <Balloon color="#C9B8E8" className="absolute w-10 animate-float delay-500" style={{ top: '20%', right: '8%' }} />
      <Rainbow className="absolute w-full opacity-20" style={{ top: 0 }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <SmilingSun className="w-16 h-16 mx-auto mb-4" />
        <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Baloo 2', cursive", color: '#333' }}>
          Ready to Join Our Family? 🎉
        </h2>
        <p className="text-lg mb-8" style={{ color: '#555', fontFamily: "'Nunito', sans-serif" }}>
          Schedule a free tour and see the magic for yourself! Enrollment is open for the 2025–2026 year.
        </p>
        <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-4">
            <input placeholder="Parent's Name" className="w-full px-5 py-3 rounded-2xl border-2 text-sm outline-none focus:border-sky-300 transition-colors"
              style={{ borderColor: '#C8E9F8', fontFamily: "'Nunito', sans-serif" }} />
            <input placeholder="Child's Name & Age" className="w-full px-5 py-3 rounded-2xl border-2 text-sm outline-none focus:border-pink-300 transition-colors"
              style={{ borderColor: '#FFD6E0', fontFamily: "'Nunito', sans-serif" }} />
            <input placeholder="Email Address" type="email" className="w-full px-5 py-3 rounded-2xl border-2 text-sm outline-none focus:border-mint-300 transition-colors"
              style={{ borderColor: '#C8F2E0', fontFamily: "'Nunito', sans-serif" }} />
            <input placeholder="Phone Number" type="tel" className="w-full px-5 py-3 rounded-2xl border-2 text-sm outline-none focus:border-lavender-300 transition-colors"
              style={{ borderColor: '#E0D4F5', fontFamily: "'Nunito', sans-serif" }} />
          </div>
          <button className="btn-pill w-full py-4 text-white text-lg shadow-xl"
            style={{ background: 'linear-gradient(135deg, #FF6B6B, #FF9F43, #FFE066)', fontFamily: "'Baloo 2', cursive" }}>
            🌈 Book a Free Tour Today!
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-8">
          {[['📍','123 Sunshine Lane, Joyville'],['📞','(555) 123-4567'],['✉️','hello@littlestars.edu']].map(([icon, text]) => (
            <div key={text} className="text-center">
              <div className="text-2xl mb-1">{icon}</div>
              <div className="text-xs font-semibold" style={{ color: '#666', fontFamily: "'Nunito', sans-serif" }}>{text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: '#A8E6CF' }}>
      {/* Landscape */}
      <div className="relative">
        <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className="w-full" fill="none">
          {/* Sky gradient */}
          <rect width="1440" height="200" fill="#C8F2E0" />
          {/* Hills */}
          <ellipse cx="200" cy="200" rx="300" ry="120" fill="#7DC49A" />
          <ellipse cx="700" cy="200" rx="400" ry="100" fill="#5FB87A" />
          <ellipse cx="1200" cy="200" rx="280" ry="110" fill="#7DC49A" />
          {/* Rainbow */}
          <path d="M500 200 Q720 40 940 200" stroke="#FF6B6B" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M520 200 Q720 60 920 200" stroke="#FF9F43" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M540 200 Q720 80 900 200" stroke="#FFE066" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M560 200 Q720 100 880 200" stroke="#A8E6CF" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.7" />
          <path d="M580 200 Q720 120 860 200" stroke="#87CEEB" strokeWidth="10" strokeLinecap="round" fill="none" opacity="0.7" />
          {/* Clouds */}
          <ellipse cx="150" cy="60" rx="60" ry="22" fill="white" fillOpacity="0.9" />
          <ellipse cx="120" cy="52" rx="38" ry="28" fill="white" fillOpacity="0.9" />
          <ellipse cx="180" cy="48" rx="40" ry="30" fill="white" fillOpacity="0.9" />
          <ellipse cx="1250" cy="70" rx="55" ry="20" fill="white" fillOpacity="0.9" />
          <ellipse cx="1220" cy="58" rx="36" ry="26" fill="white" fillOpacity="0.9" />
          <ellipse cx="1280" cy="54" rx="38" ry="28" fill="white" fillOpacity="0.9" />
          {/* Trees */}
          <rect x="98" y="140" width="8" height="50" fill="#8B6347" />
          <ellipse cx="102" cy="128" rx="22" ry="28" fill="#4CAF50" />
          <ellipse cx="102" cy="118" rx="16" ry="20" fill="#66BB6A" />
          <rect x="348" y="135" width="8" height="55" fill="#8B6347" />
          <ellipse cx="352" cy="122" rx="24" ry="30" fill="#43A047" />
          <rect x="1050" y="140" width="8" height="50" fill="#8B6347" />
          <ellipse cx="1054" cy="128" rx="22" ry="28" fill="#4CAF50" />
          <rect x="1300" y="138" width="8" height="52" fill="#8B6347" />
          <ellipse cx="1304" cy="124" rx="24" ry="30" fill="#66BB6A" />
          {/* Flowers */}
          {[80,200,320,450,1000,1150,1350].map((x, i) => (
            <g key={i}>
              <line x1={x} y1="190" x2={x} y2="168" stroke="#66BB6A" strokeWidth="2" />
              <circle cx={x} cy="162" r="10" fill={['#FF6B6B','#FFB3C6','#FFE066','#C9B8E8','#87CEEB','#FFB347','#A8E6CF'][i]} />
              <circle cx={x} cy="162" r="4" fill="#FFE066" />
            </g>
          ))}
          {/* Sun */}
          <circle cx="80" cy="40" r="24" fill="#FFE066" />
          <circle cx="75" cy="34" r="3.5" fill="#333" /><circle cx="85" cy="34" r="3.5" fill="#333" />
          <path d="M74 44 Q80 50 86 44" stroke="#FF8C42" strokeWidth="2" fill="none" strokeLinecap="round" />
          {[0,45,90,135,180,225,270,315].map((deg, i) => (
            <line key={i} x1={80 + 26 * Math.cos(deg * Math.PI / 180)} y1={40 + 26 * Math.sin(deg * Math.PI / 180)}
              x2={80 + 34 * Math.cos(deg * Math.PI / 180)} y2={40 + 34 * Math.sin(deg * Math.PI / 180)}
              stroke="#FFB347" strokeWidth="2.5" strokeLinecap="round" />
          ))}
          {/* Butterfly */}
          <ellipse cx="430" cy="90" rx="18" ry="13" fill="#FFB3C6" fillOpacity="0.8" />
          <ellipse cx="430" cy="107" rx="12" ry="9" fill="#FFD6E0" fillOpacity="0.8" />
          <ellipse cx="462" cy="90" rx="18" ry="13" fill="#C9B8E8" fillOpacity="0.8" />
          <ellipse cx="462" cy="107" rx="12" ry="9" fill="#E0D4F5" fillOpacity="0.8" />
          <ellipse cx="446" cy="98" rx="2.5" ry="10" fill="#333" />
        </svg>
      </div>

      <div className="relative z-10 py-10 px-4 sm:px-6" style={{ background: '#5FB87A' }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-white">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <SmilingSun className="w-10 h-10" />
              <span className="text-xl font-bold" style={{ fontFamily: "'Baloo 2', cursive" }}>Little Stars</span>
            </div>
            <p className="text-sm opacity-80" style={{ fontFamily: "'Nunito', sans-serif" }}>
              Where every child's journey begins with joy, love, and wonder. 🌟
            </p>
          </div>
          <div>
            <h4 className="font-bold text-base mb-3" style={{ fontFamily: "'Baloo 2', cursive" }}>Quick Links</h4>
            {['About Us','Our Programs','Daily Activities','Photo Gallery','Contact Us'].map(l => (
              <div key={l} className="text-sm opacity-80 mb-1 cursor-pointer hover:opacity-100 transition-opacity"
                style={{ fontFamily: "'Nunito', sans-serif" }}>{l}</div>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-base mb-3" style={{ fontFamily: "'Baloo 2', cursive" }}>Programs</h4>
            {['Tiny Sprouts (2–3)','Star Explorers (3–4)','Little Rockets (4–5)','Big Kids Club (5–6)','Summer Camp'].map(l => (
              <div key={l} className="text-sm opacity-80 mb-1" style={{ fontFamily: "'Nunito', sans-serif" }}>{l}</div>
            ))}
          </div>
          <div>
            <h4 className="font-bold text-base mb-3" style={{ fontFamily: "'Baloo 2', cursive" }}>Hours</h4>
            <div className="text-sm opacity-80" style={{ fontFamily: "'Nunito', sans-serif" }}>
              <div className="mb-1">Mon–Fri: 7:30 AM – 6:00 PM</div>
              <div className="mb-1">Saturday: 8:00 AM – 1:00 PM</div>
              <div className="mb-4 opacity-60">Sunday: Closed</div>
            </div>
            <div className="flex gap-3">
              {['🎈','🌟','🎨','🎵'].map((e, i) => (
                <div key={i} className="w-9 h-9 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-lg cursor-pointer hover:bg-opacity-30 transition-all">
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.3)' }}>
          <p className="text-sm opacity-70 text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
            © 2025 Little Stars Kindergarten. Made with 💛 for little dreamers.
          </p>
          <div className="flex gap-4 text-sm opacity-70 text-white" style={{ fontFamily: "'Nunito', sans-serif" }}>
            <span className="cursor-pointer hover:opacity-100">Privacy Policy</span>
            <span className="cursor-pointer hover:opacity-100">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Floating Bubbles ─────────────────────────────────────────────────────────

function FloatingBubbles() {
  const bubbles = Array.from({ length: 12 }, (_, i) => ({
    size: 8 + Math.random() * 20,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 6 + Math.random() * 8,
    color: ['#87CEEB','#FFB3C6','#C9B8E8','#A8E6CF','#FFE066'][i % 5],
  }))
  return (
    <div className="fixed inset-0 pointer-events-none z-20 overflow-hidden">
      {bubbles.map((b, i) => (
        <div key={i} className="absolute rounded-full border-2 animate-float-up"
          style={{
            width: b.size, height: b.size,
            left: `${b.left}%`, bottom: '-20px',
            borderColor: b.color,
            background: `${b.color}30`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            animationIterationCount: 'infinite',
          }} />
      ))}
    </div>
  )
}

// ─── Sparkle Cursor ───────────────────────────────────────────────────────────

function SparkleCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [sparks, setSparks] = useState<{ id: number; x: number; y: number; color: string }[]>([])
  const idRef = useRef(0)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (Math.random() > 0.6) {
        const id = ++idRef.current
        const colors = ['#FFE066','#FFB3C6','#87CEEB','#C9B8E8','#A8E6CF','#FF6B6B']
        setSparks(s => [...s.slice(-15), { id, x: e.clientX, y: e.clientY, color: colors[Math.floor(Math.random() * colors.length)] }])
        setTimeout(() => setSparks(s => s.filter(sp => sp.id !== id)), 800)
      }
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      <div className="sparkle-cursor" style={{ left: pos.x, top: pos.y }} />
      {sparks.map(sp => (
        <div key={sp.id} style={{
          position: 'fixed', left: sp.x, top: sp.y, width: 8, height: 8,
          borderRadius: '50%', background: sp.color,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none', zIndex: 9998,
          animation: 'float 0.8s ease-out forwards',
          opacity: 0,
        }} />
      ))}
    </>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      {!loaded && <LoadingScreen onDone={() => setLoaded(true)} />}
      <SparkleCursor />
      <FloatingBubbles />
      <div style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.6s ease' }}>
        <Navbar />
        <Hero />
        <Programs />
        <WhyUs />
        <Activities />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
