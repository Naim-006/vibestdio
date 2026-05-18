import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toPng } from 'html-to-image';
import { Palette as PaletteIcon, Type, Smartphone, Box, CheckCircle2, Heart, Search, Bell, Settings, User, MessageCircle, Home, Layout, CreditCard, ChevronRight, Menu, Plus, Sparkles, ExternalLink, Moon, Download, X, Loader2, Lock } from 'lucide-react';
import { PALETTES, FONTS, ThemeState, Palette } from './types';

// --- Sub-components for Mock Screen ---

const ScreenProfile = ({ theme }: { theme: ThemeState }) => (
  <div className="flex flex-col gap-6 p-6 h-full">
    <div className="flex items-center justify-between">
      <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme.palette.surface, color: theme.palette.text }}>
        <Menu size={20} />
      </div>
      <div className="w-10 h-10 rounded-full overflow-hidden border-2" style={{ borderColor: theme.palette.primary }}>
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80" alt="Avatar" className="w-full h-full object-cover" />
      </div>
    </div>

    <div className="flex flex-col items-center text-center">
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 p-1" style={{ borderColor: theme.palette.primary }}>
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80" alt="Avatar" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-4 border-white flex items-center justify-center text-white" style={{ backgroundColor: theme.palette.primary }}>
          <Plus size={14} />
        </div>
      </div>
      <h2 className="text-xl font-black tracking-tight" style={{ color: theme.palette.text }}>Alex Rivers</h2>
      <p className="text-xs font-semibold opacity-60 uppercase tracking-widest mt-1" style={{ color: theme.palette.text }}>Creative Director</p>
    </div>

    <div className="grid grid-cols-3 gap-3">
      {[ { l: 'Works', v: '12' }, { l: 'Following', v: '482' }, { l: 'Fans', v: '1.2k' } ].map((s, i) => (
        <div key={i} className="text-center p-3 rounded-3xl" style={{ backgroundColor: theme.palette.surface }}>
          <div className="text-lg font-black" style={{ color: theme.palette.primary }}>{s.v}</div>
          <div className="text-[8px] font-bold uppercase tracking-widest opacity-40" style={{ color: theme.palette.text }}>{s.l}</div>
        </div>
      ))}
    </div>

    <div className="space-y-2 mt-2">
      {[ { i: CheckCircle2, t: 'Privacy & Security' }, { i: CreditCard, t: 'Billing History' }, { i: Settings, t: 'App Settings' } ].map((item, i) => (
        <div key={i} className="flex items-center justify-between p-4 rounded-3xl" style={{ backgroundColor: theme.palette.surface }}>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme.palette.primary + '10', color: theme.palette.primary }}>
              <item.i size={18} />
            </div>
            <span className="text-sm font-bold" style={{ color: theme.palette.text }}>{item.t}</span>
          </div>
          <ChevronRight size={16} style={{ color: theme.palette.text, opacity: 0.2 }} />
        </div>
      ))}
    </div>
  </div>
);

const ScreenDashboard = ({ theme }: { theme: ThemeState }) => (
  <div className="flex flex-col gap-6 p-6 h-full">
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-black tracking-tighter" style={{ color: theme.palette.text }}>Overview</h1>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40" style={{ color: theme.palette.text }}>Real-time Assets</p>
      </div>
      <div className="w-10 h-10 rounded-2xl flex items-center justify-center relative shadow-sm" style={{ backgroundColor: theme.palette.surface, color: theme.palette.text }}>
        <Bell size={20} />
      </div>
    </div>

    <div className="p-6 rounded-[2.5rem] relative overflow-hidden shadow-2xl" style={{ backgroundColor: theme.palette.primary }}>
      <div className="relative z-10">
        <p className="text-white/60 text-[10px] font-black uppercase tracking-widest mb-1">Asset Value</p>
        <h1 className="text-3xl font-black text-white">$420,950.00</h1>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white/20 overflow-hidden backdrop-blur-md">
                <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black text-white">LIVE</div>
        </div>
      </div>
      <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-white/10 blur-[60px]"></div>
    </div>

    <div className="flex-1 min-h-0 overflow-y-auto pr-1 scrollbar-none">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xs font-black uppercase tracking-widest opacity-80" style={{ color: theme.palette.text }}>Recent Activity</h3>
        <span className="text-[10px] font-black underline" style={{ color: theme.palette.primary }}>View All</span>
      </div>
      <div className="space-y-2">
        {[
          { t: 'Cloud Architecture', a: '-$899', c: 'Infrastructure', d: '2 hours ago' },
          { t: 'UI Kit Premium', a: '-$149', c: 'Design Assets', d: 'Yesterday' },
          { t: 'Stripe Payout', a: '+$12,400', c: 'Revenue', d: 'May 16' },
        ].map((tr, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-3xl" style={{ backgroundColor: theme.palette.surface }}>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-2xl flex items-center justify-center font-black text-xs" style={{ backgroundColor: theme.palette.primary + '10', color: theme.palette.primary }}>
                {tr.t[0]}
              </div>
              <div>
                <div className="text-sm font-black tracking-tight" style={{ color: theme.palette.text }}>{tr.t}</div>
                <div className="text-[9px] font-bold opacity-40 uppercase" style={{ color: theme.palette.text }}>{tr.c}</div>
              </div>
            </div>
            <div className={`font-black text-xs ${tr.a.startsWith('+') ? 'text-emerald-500' : ''}`} style={{ color: tr.a.startsWith('+') ? undefined : theme.palette.text }}>{tr.a}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ScreenChat = ({ theme }: { theme: ThemeState }) => (
  <div className="flex flex-col h-full overflow-hidden">
    <div className="p-6 flex items-center gap-4 border-b border-black/5">
      <div className="w-12 h-12 rounded-2xl overflow-hidden relative border-2 border-white/10">
        <img src="https://i.pravatar.cc/100?img=11" alt="avatar" className="w-full h-full object-cover" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full"></div>
      </div>
      <div className="flex-1">
        <div className="font-black text-sm tracking-tight" style={{ color: theme.palette.text }}>Sarah Jenkins</div>
        <div className="text-[10px] font-bold opacity-40 uppercase tracking-widest" style={{ color: theme.palette.text }}>Product Lead</div>
      </div>
      <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: theme.palette.surface, color: theme.palette.text }}>
        <Settings size={18} />
      </div>
    </div>

    <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto scrollbar-none">
      <div className="flex flex-col items-center">
        <span className="px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em]" style={{ backgroundColor: theme.palette.surface, color: theme.palette.text, opacity: 0.4 }}>SECURE SESSION</span>
      </div>

      <div className="flex gap-3 max-w-[85%]">
        <div className="p-5 rounded-[2rem] rounded-tl-none font-medium shadow-sm leading-relaxed" style={{ backgroundColor: theme.palette.surface, color: theme.palette.text }}>
          The new obsidian interface concept is testing really well with the core users. 🌑
        </div>
      </div>

      <div className="flex gap-3 max-w-[85%] ml-auto text-right">
        <div className="p-5 rounded-[2rem] rounded-tr-none font-bold text-white shadow-xl shadow-indigo-500/20 leading-relaxed" style={{ backgroundColor: theme.palette.primary }}>
          Incredible. Let's move to the high-fidelity mockups immediately. 🚀
        </div>
      </div>
    </div>

    <div className="p-6 flex items-center gap-3">
      <div className="flex-1 h-16 rounded-[1.5rem] flex items-center px-6" style={{ backgroundColor: theme.palette.surface }}>
        <span className="text-xs font-bold opacity-30" style={{ color: theme.palette.text }}>Encrypt message...</span>
      </div>
      <div className="w-16 h-16 rounded-[1.5rem] flex items-center justify-center text-white shadow-lg active:scale-95 transition-all" style={{ backgroundColor: theme.palette.primary }}>
        <Plus size={24} />
      </div>
    </div>
  </div>
);

// --- Main App ---

export default function App() {
  const [isDark, setIsDark] = React.useState(false);
  const [isDeviceDark, setIsDeviceDark] = React.useState(false);
  const [theme, setTheme] = React.useState<ThemeState>({
    palette: PALETTES[0],
    font: FONTS[0],
    borderRadius: 32,
    spacing: 'balanced',
    vibe: 'premium'
  });

  const [customPalettes, setCustomPalettes] = React.useState<Palette[]>([]);
  const [activeScreen, setActiveScreen] = React.useState<'profile' | 'dashboard' | 'chat'>('dashboard');
  const [isExporting, setIsExporting] = React.useState(false);
  const [showCodeModal, setShowCodeModal] = React.useState(false);
  const [verificationCode, setVerificationCode] = React.useState('');
  const [codeError, setCodeError] = React.useState(false);
  const screenshotRef = React.useRef<HTMLDivElement>(null);
  const showcaseRef = React.useRef<HTMLDivElement>(null);

  const startExportProcess = async () => {
    setIsExporting(true);
    setShowCodeModal(false);
    // Wait for the showcase layout to mount
    setTimeout(async () => {
      if (showcaseRef.current) {
        try {
          // Explicitly set width and height for reliable capture
          const dataUrl = await toPng(showcaseRef.current, {
            quality: 1,
            pixelRatio: 2,
            width: 1200,
            height: 675,
            backgroundColor: isDark ? '#000' : '#fff',
            style: {
              transform: 'scale(1)', // Ensure no scaling during capture
              margin: '0',
              padding: '0'
            }
          });
          const link = document.createElement('a');
          link.download = `canvas-studio-export-${Date.now()}.png`;
          link.href = dataUrl;
          link.click();
        } catch (err) {
          console.error('Export failed', err);
          alert('Export failed. Please try again.');
        } finally {
          setIsExporting(false);
          setVerificationCode('');
        }
      }
    }, 1500); // Increased timeout to ensure full mount
  };

  const handleExportClick = () => {
    setShowCodeModal(true);
    setVerificationCode('');
    setCodeError(false);
  };

  const verifyAndExport = () => {
    if (verificationCode.toLowerCase() === 'nxt402') {
      startExportProcess();
    } else {
      setCodeError(true);
      setTimeout(() => setCodeError(false), 2000);
    }
  };

  // Vibe logic for the preview
  const getVibeStyles = () => {
    switch(theme.vibe) {
      case 'minimal':
        return {
          shadow: 'shadow-sm',
          border: 'border border-slate-200/50',
          animation: { duration: 0.8, ease: [0.1, 0, 0, 1] },
          radius: 'rounded-none'
        };
      case 'playful':
        return {
          shadow: 'shadow-[0_20px_50px_rgba(0,0,0,0.15)]',
          border: 'border-0',
          animation: { type: "spring", stiffness: 300, damping: 20 },
          radius: 'rounded-[3rem]'
        };
      case 'brutal':
        return {
          shadow: isDark ? 'shadow-[12px_12px_0_0_rgba(255,255,255,0.1)]' : 'shadow-[12px_12px_0_0_rgba(0,0,0,1)]',
          border: 'border-4 border-black dark:border-white',
          animation: { duration: 0.2, ease: "linear" },
          radius: 'rounded-none'
        };
      case 'premium':
      default:
        return {
          shadow: 'shadow-3xl shadow-black/30',
          border: 'border border-white/10 dark:border-white/5',
          animation: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
          radius: 'rounded-[2.5rem]'
        };
    }
  };

  const vibe = getVibeStyles();

  React.useEffect(() => {
    if (theme.font.importUrl) {
      const link = document.createElement('link');
      link.href = theme.font.importUrl;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
      return () => { try { document.head.removeChild(link); } catch(e) {} };
    }
  }, [theme.font]);

  return (
    <div className={`flex flex-col min-h-screen overflow-x-hidden font-sans selection:bg-indigo-500/30 transition-colors duration-500 ${isDark ? 'bg-[#0a0a0c] text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
      {/* Premium Navigation Header */}
      <nav className={`fixed top-0 left-0 right-0 h-16 md:h-24 backdrop-blur-2xl border-b z-[100] px-4 md:px-12 flex items-center justify-between shadow-sm transition-colors duration-500 ${isDark ? 'bg-black/80 border-white/5' : 'bg-white/80 border-slate-200'}`}>
        <div className="flex items-center gap-3 md:gap-5">
          <div className="w-9 h-9 md:w-12 md:h-12 bg-indigo-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-[0_8px_30px_rgba(79,70,229,0.3)]">
            <Box size={20} className="md:w-[26px] md:h-[26px]" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <h1 className={`text-lg md:text-2xl font-black tracking-tighter leading-none ${isDark ? 'text-white' : 'text-slate-900'}`}>Canvas <span className="text-indigo-600">Studio</span></h1>
            <div className="flex items-center gap-1.5 mt-0.5 md:mt-2">
              <span className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>NextByte iT</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-8">
          <a
            href="https://nextbyte-it.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group hidden sm:flex flex-col items-end hover:opacity-80 transition-all mr-2 md:mr-4"
          >
            <span className={`text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-0.5 md:mb-1 group-hover:text-indigo-600 transition-colors ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Strategic Partner</span>
            <div className="flex items-center gap-2 md:gap-3">
              <span className={`text-[10px] md:text-xs font-black transition-colors ${isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'}`}>NEXTBYTE IT</span>
            </div>
          </a>
          <button 
            onClick={() => setIsDark(!isDark)}
            className={`w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center transition-all ${isDark ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {isDark ? <Sparkles size={16} className="md:w-5 md:h-5" /> : <Moon size={16} className="md:w-5 md:h-5" />}
          </button>

          <button 
            onClick={handleExportClick}
            className={`px-3 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.15em] transition-all shadow-xl active:scale-95 flex items-center gap-1.5 md:gap-2 ${isDark ? 'bg-indigo-600 text-white hover:bg-white hover:text-black shadow-indigo-500/10' : 'bg-slate-900 text-white hover:bg-indigo-600 shadow-slate-200'}`}
          >
            <Download size={12} className="md:w-3.5 md:h-3.5" />
            <span>Export</span>
          </button>
        </div>
      </nav>

      {/* Main Experience Layout */}
      <main className="flex-1 mt-16 md:mt-24 p-4 md:p-8 lg:p-12 lg:grid lg:grid-cols-12 lg:gap-12 max-w-[1920px] mx-auto w-full">
           {/* left: System Controls */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 mb-8 lg:mb-0 order-2 lg:order-1">
          
          {/* Palette Foundry Tile */}
          <div className={`border rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 flex flex-col min-h-0 lg:min-h-[500px] overflow-hidden shadow-xl transition-colors duration-500 ${isDark ? 'bg-[#121216] border-white/5 shadow-black/50' : 'bg-white border-slate-200 shadow-slate-200/50'}`}>
            <div className="flex items-center justify-between mb-6 md:mb-8">
              <h3 className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] italic ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Shared Themes</h3>
              <PaletteIcon size={18} className={isDark ? 'text-slate-600' : 'text-slate-300'} />
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 pr-3 scrollbar-none">
              {customPalettes.length > 0 && (
                <div className="mb-10 space-y-2">
                  <div className="text-[9px] font-black text-indigo-500/60 mb-4 tracking-[0.2em]">MY CUSTOM THEMES</div>
                  {customPalettes.map(p => (
                    <button
                      key={p.id}
                      onClick={() => setTheme({ ...theme, palette: p })}
                      className={`w-full group rounded-[2rem] transition-all duration-500 border-2 overflow-hidden ${theme.palette.id === p.id ? 'border-indigo-500' : isDark ? 'bg-white/5 border-transparent hover:border-white/10' : 'bg-slate-50 border-transparent hover:border-slate-200'}`}
                    >
                      <div className="flex flex-col">
                        <div className="flex h-3">
                          <div className="flex-1 h-full" style={{ backgroundColor: p.primary }} />
                          <div className="flex-1 h-full" style={{ backgroundColor: p.secondary }} />
                          <div className="flex-1 h-full" style={{ backgroundColor: p.accent }} />
                          <div className="flex-1 h-full" style={{ backgroundColor: p.background }} />
                        </div>
                        <div className="flex items-center justify-between p-4">
                          <span className={`text-[11px] font-black tracking-tight ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>{p.name}</span>
                          {theme.palette.id === p.id && <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,1)]" />}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <div className={`text-[9px] font-black mb-4 tracking-[0.2em] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>STANDARD THEMES</div>
              <div className="grid grid-cols-1 gap-3">
                {PALETTES.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setTheme({ ...theme, palette: p })}
                    className={`w-full group rounded-[1.8rem] transition-all duration-500 border-2 overflow-hidden ${theme.palette.id === p.id ? 'border-indigo-500 ring-2 ring-indigo-500/20' : isDark ? 'bg-white/5 border-transparent hover:bg-white/10' : 'bg-transparent border-transparent hover:bg-slate-100 hover:border-slate-200'}`}
                  >
                    <div className="flex flex-col">
                      <div className="flex h-2.5">
                        <div className="flex-1 h-full" style={{ backgroundColor: p.primary }} />
                        <div className="flex-1 h-full" style={{ backgroundColor: p.secondary }} />
                        <div className="flex-1 h-full" style={{ backgroundColor: p.accent }} />
                        <div className="flex-1 h-full" style={{ backgroundColor: p.background }} />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4">
                        <span className={`text-[10px] font-black uppercase tracking-wider ${theme.palette.id === p.id ? (isDark ? 'text-white' : 'text-slate-900') : (isDark ? 'text-slate-500 group-hover:text-slate-300' : 'text-slate-500 group-hover:text-slate-700')}`}>{p.name}</span>
                        <div className="flex gap-1">
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.primary }} />
                          <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p.accent }} />
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* center: Device Preview Experience */}
        <div className="col-span-12 lg:col-span-6 flex flex-col items-center justify-center min-h-[700px] lg:min-h-0 relative py-8 lg:py-0 order-1 lg:order-2">
          {/* Experience Switcher */}
          <div className={`mb-8 md:mb-16 border backdrop-blur-3xl p-1.5 md:p-2 rounded-full flex gap-1 md:gap-2 shadow-2xl z-50 transition-all duration-500 ${isDark ? 'bg-white/5 border-white/5 shadow-black/40' : 'bg-white/60 border-slate-200 shadow-slate-200/50'}`}>
            {[
              { id: 'dashboard', icon: Layout, label: 'Overview' },
              { id: 'chat', icon: MessageCircle, label: 'Messages' },
              { id: 'profile', icon: User, label: 'Profile' }
            ].map((screen) => (
              <button
                key={screen.id}
                onClick={() => setActiveScreen(screen.id as any)}
                className={`flex items-center gap-2 md:gap-3 px-4 md:px-8 py-2.5 md:py-3.5 rounded-full transition-all duration-500 font-black text-[10px] uppercase tracking-widest ${activeScreen === screen.id ? (isDark ? 'bg-indigo-600 text-white shadow-indigo-500/20 shadow-xl' : 'bg-slate-900 text-white shadow-xl md:scale-105') : (isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-900')}`}
              >
                <screen.icon size={12} className="md:w-[14px] md:h-[14px]" strokeWidth={2.5} />
                <span className="hidden sm:inline">{screen.label}</span>
                <span className="sm:hidden text-[8px]">{screen.label === 'Overview' ? 'HUB' : screen.label[0]}</span>
              </button>
            ))}
          </div>

          {/* Premium Device Frame - Refined Scaling for Mobile */}
          <div ref={screenshotRef} className="relative group flex items-center justify-center w-full max-w-[450px] scale-[0.8] sm:scale-[0.9] md:scale-100 origin-center transition-transform duration-500">
             {/* Floating Glow - Dynamic based on primary color */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full blur-[140px] opacity-20 pointer-events-none -z-10 rounded-full transition-all duration-1000" style={{ backgroundColor: theme.palette.primary }}></div>

            <div className={`w-[325px] md:w-[375px] h-[660px] md:h-[760px] rounded-[5rem] p-[10px] md:p-[14px] border-[12px] md:border-[16px] relative overflow-hidden ring-1 ring-inset transition-all duration-500 ${isDark ? 'bg-zinc-900 border-zinc-800 ring-white/10' : 'bg-slate-900 border-slate-800 ring-white/20'} ${vibe.shadow}`}>
              <div 
                className={`w-full h-full overflow-hidden flex flex-col transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] relative ${theme.vibe === 'brutal' ? 'rounded-none' : 'rounded-[3.5rem] md:rounded-[3.8rem]'} ${vibe.border}`} 
                style={{ 
                  backgroundColor: isDeviceDark ? '#0F172A' : theme.palette.background, 
                  color: isDeviceDark ? '#F1F5F9' : theme.palette.text,
                  fontFamily: theme.font.family,
                  borderRadius: theme.vibe === 'minimal' ? '0px' : theme.vibe === 'brutal' ? '0px' : `${theme.borderRadius}px`
                }}
              >
                {/* Content Area with Dynamic Island Clearance */}
                <div className="flex-1 w-full pt-12 md:pt-14 overflow-hidden flex flex-col relative">
                  {/* Internal Device Theme Toggle */}
                  <button 
                    onClick={() => setIsDeviceDark(!isDeviceDark)}
                    className="absolute top-4 right-6 w-10 h-10 rounded-full flex items-center justify-center z-[110] transition-all bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/10"
                    style={{ color: isDeviceDark ? '#FFD700' : theme.palette.primary }}
                  >
                    {isDeviceDark ? <Sparkles size={16} /> : <Moon size={16} />}
                  </button>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeScreen}
                      initial={{ opacity: 0, scale: theme.vibe === 'playful' ? 0.9 : 1, y: 15 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: theme.vibe === 'playful' ? 1.1 : 1.05, y: -15 }}
                      transition={vibe.animation}
                      className="flex-1 w-full"
                    >
                      {activeScreen === 'profile' && <ScreenProfile theme={{ ...theme, palette: { ...theme.palette, background: isDeviceDark ? '#0F172A' : '#FFFFFF', text: isDeviceDark ? '#F1F5F9' : '#0F172A', surface: isDeviceDark ? '#1E293B' : '#F8FAFC' } }} />}
                      {activeScreen === 'dashboard' && <ScreenDashboard theme={{ ...theme, palette: { ...theme.palette, background: isDeviceDark ? '#0F172A' : '#FFFFFF', text: isDeviceDark ? '#F1F5F9' : '#0F172A', surface: isDeviceDark ? '#1E293B' : '#F8FAFC' } }} />}
                      {activeScreen === 'chat' && <ScreenChat theme={{ ...theme, palette: { ...theme.palette, background: isDeviceDark ? '#0F172A' : '#FFFFFF', text: isDeviceDark ? '#F1F5F9' : '#0F172A', surface: isDeviceDark ? '#1E293B' : '#F8FAFC' } }} />}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* iPhone Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 md:w-32 h-6 md:h-7 bg-black rounded-full z-[100] flex items-center justify-between px-5 shadow-xl">
                   <div className="w-1 h-1 rounded-full bg-slate-800"></div>
                   <div className="flex gap-1.5 items-center">
                     <div className="w-2.5 h-1 bg-slate-800/40 rounded-full"></div>
                     <div className="w-0.5 h-2 bg-slate-800/40 rounded-full"></div>
                   </div>
                </div>

                {/* In-app Navigation Mock */}
                <div className="h-24 md:h-24 border-t px-8 pb-8 flex items-center justify-around pointer-events-none backdrop-blur-2xl shrink-0 relative" style={{ backgroundColor: (isDeviceDark ? '#1E293B' : '#F8FAFC') + 'CC', borderColor: (isDeviceDark ? '#334155' : '#E2E8F0') + '30' }}>
                   {[Home, Search, Bell, User].map((Icon, i) => (
                      <div key={i} className="flex flex-col items-center gap-1.5">
                         <Icon size={22} strokeWidth={2.5} style={{ color: i === 0 ? theme.palette.primary : (isDeviceDark ? '#94A3B8' : '#64748B'), opacity: i === 0 ? 1 : 0.4 }} />
                         {i === 0 && <motion.div layoutId="nav-dot" className="w-1 h-1 rounded-full" style={{ backgroundColor: theme.palette.primary }}></motion.div>}
                      </div>
                   ))}
                   {/* Device Bottom Indicator (Home Bar) */}
                   <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-28 h-1.5 bg-current opacity-20 rounded-full" style={{ color: isDeviceDark ? '#FFFFFF' : '#000000' }}></div>
                </div>
              </div>
              
              {/* Device Physical Indicators */}
              <div className="absolute top-32 -left-1 w-0.5 h-14 bg-white/10 rounded-r-md"></div>
              <div className="absolute top-52 -left-1 w-0.5 h-24 bg-white/10 rounded-r-md"></div>
              <div className="absolute top-44 -right-1 w-0.5 h-28 bg-white/10 rounded-l-md"></div>
            </div>
          </div>
        </div>

        {/* right: Visual Specs Controls */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6 order-3">
          
          {/* Typography Foundry Tile */}
          <div className={`border rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 shadow-xl transition-all duration-500 ${isDark ? 'bg-[#121216] border-white/5 shadow-black/50' : 'bg-white border-slate-200 shadow-slate-200/50'}`}>
            <div className="flex items-center justify-between mb-6 md:mb-8 font-black uppercase">
              <h3 className={`text-[9px] md:text-[10px] tracking-[0.2em] ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Typography</h3>
              <Type size={16} className={isDark ? 'text-slate-600' : 'text-slate-300'} />
            </div>
            <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-2 gap-3 md:gap-4">
              {FONTS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setTheme({ ...theme, font: f })}
                  className={`p-4 md:p-6 rounded-[1.8rem] md:rounded-[2.2rem] text-left transition-all duration-500 border-2 ${theme.font.id === f.id ? (isDark ? 'bg-indigo-600 border-indigo-500 text-white shadow-xl shadow-indigo-500/20' : 'bg-slate-900 border-slate-900 text-white shadow-xl scale-105') : (isDark ? 'bg-white/5 text-slate-500 border-transparent hover:border-white/10 hover:text-slate-300' : 'bg-slate-100/50 text-slate-500 border-transparent hover:border-slate-200')}`}
                >
                  <div className="text-2xl md:text-3xl font-black mb-1" style={{ fontFamily: f.family }}>Aa</div>
                  <div className="text-[8px] md:text-[9px] font-black truncate uppercase tracking-tighter opacity-60">{f.name}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Aesthetic Parameters Tile */}
          <div className={`flex-1 border rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 flex flex-col gap-8 md:gap-10 shadow-xl transition-all duration-500 ${isDark ? 'bg-[#121216] border-white/5 shadow-black/50' : 'bg-white border-slate-200 shadow-slate-200/50'}`}>
            <div>
              <h3 className={`text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-8 md:mb-10 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Design Settings</h3>
              
              <div className="space-y-10 md:space-y-12">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <label className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest italic ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Corner Rounding</label>
                    <span className={`text-[9px] md:text-[10px] font-mono font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>{theme.borderRadius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="48"
                    value={theme.borderRadius}
                    onChange={(e) => setTheme({ ...theme, borderRadius: parseInt(e.target.value) })}
                    className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                  />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <label className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest italic ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Color Palette</label>
                    <div className="flex gap-1.5">
                       {['primary', 'background', 'surface', 'text'].map(c => (
                         <div key={c} className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: (theme.palette as any)[c] }} />
                       ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { key: 'primary', label: 'Primary' },
                      { key: 'background', label: 'Canvas' },
                      { key: 'surface', label: 'Layer' },
                      { key: 'text', label: 'Ink' }
                    ].map((color) => (
                      <div key={color.key} className={`p-3 md:p-3.5 rounded-2xl flex flex-col gap-2 transition-all border ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-100 hover:border-slate-200'}`}>
                        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] opacity-40">{color.label}</span>
                        <div className="flex items-center gap-2 md:gap-3">
                          <input 
                            type="color" 
                            value={(theme.palette as any)[color.key]} 
                            onChange={(e) => setTheme({
                              ...theme,
                              palette: { ...theme.palette, [color.key]: e.target.value }
                            })}
                            className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-transparent border-none cursor-pointer p-0 overflow-hidden"
                          />
                          <span className="text-[8px] md:text-[10px] font-mono font-bold uppercase truncate opacity-60">{(theme.palette as any)[color.key]}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={`text-[9px] md:text-[10px] font-black uppercase mb-6 block tracking-widest italic ${isDark ? 'text-slate-500' : 'text-slate-500'}`}>Style Direction</label>
                  <div className="grid grid-cols-2 gap-2 md:gap-3">
                    {['minimal', 'playful', 'premium', 'brutal'].map((v) => (
                      <button
                        key={v}
                        onClick={() => setTheme({ ...theme, vibe: v as any })}
                        className={`px-3 py-3 md:py-4 rounded-xl md:rounded-[1.5rem] text-[9px] md:text-[10px] font-black uppercase tracking-[0.15em] transition-all border-2 ${theme.vibe === v ? 'bg-indigo-600 text-white border-indigo-600 shadow-xl' : (isDark ? 'bg-white/5 border-transparent text-slate-500 hover:border-white/10' : 'bg-slate-100/50 border-transparent text-slate-500 hover:border-slate-200')}`}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className={`mt-auto p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden group border transition-all duration-500 ${isDark ? 'bg-indigo-500/5 border-indigo-500/20 shadow-inner' : 'bg-indigo-50 border-indigo-100 shadow-sm'}`}>
               <div className="absolute top-0 right-0 p-4 opacity-5">
                  <CheckCircle2 size={50} className={isDark ? 'text-indigo-400' : 'text-indigo-900'} />
               </div>
              
            </div>
          </div>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className={`mt-12 px-6 py-12 md:px-12 md:py-16 border-t flex flex-col items-center gap-10 md:gap-12 transition-colors duration-500 ${isDark ? 'bg-black border-white/5' : 'bg-white border-slate-200'}`}>
         <div className="flex flex-col md:flex-row items-center gap-10 md:gap-24 lg:gap-32 w-full justify-center">
            <div className="flex flex-col items-center gap-1">
               <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Engine</span>
               <span className={`text-[10px] md:text-sm font-black text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Canvas Studio Workspace</span>
            </div>
            <div className="flex flex-col items-center gap-1">
               <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Network</span>
               <span className={`text-[10px] md:text-sm font-black text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Global High-Speed Architecture</span>
            </div>
            <div className="flex flex-col items-center gap-8 md:gap-12 md:flex-row">
               <div className="flex flex-col items-center md:items-start gap-1">
                  <span className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>Development</span>
                  <span className={`text-[10px] md:text-sm font-black text-center ${isDark ? 'text-white' : 'text-slate-900'}`}>Grade Synthesis System</span>
               </div>
               <div className="h-8 w-px bg-slate-200 dark:bg-white/10 hidden md:block"></div>
               <a 
                 href="https://nextbyte-it.netlify.app/"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="group flex items-center gap-4 transition-transform hover:scale-105"
               >
                 <div className="flex flex-col items-end">
                   <span className={`text-[8px] md:text-[11px] font-black uppercase tracking-[0.2em] ${isDark ? 'text-indigo-400/60' : 'text-indigo-600/60'}`}>Strategic Partner</span>
                   <span className={`text-sm md:text-lg font-black transition-colors ${isDark ? 'text-slate-400 group-hover:text-white' : 'text-slate-500 group-hover:text-slate-900'}`}>NEXTBYTE IT</span>
                 </div>
                 <div className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border-2 flex items-center justify-center transition-all ${isDark ? 'bg-white/5 border-white/10 text-slate-500 group-hover:text-indigo-400 group-hover:border-indigo-500/50' : 'bg-slate-50 border-slate-200 text-slate-400 group-hover:text-indigo-600 group-hover:border-indigo-600/50'}`}>
                   <ExternalLink size={18} className="w-5 h-5 md:w-6 md:h-6" />
                 </div>
               </a>
            </div>
         </div>
         <p className={`text-[8px] md:text-[10px] font-black uppercase tracking-[0.5em] mt-8 select-none ${isDark ? 'text-slate-800' : 'text-slate-200'}`}>Professional Design System — 2026</p>
      </footer>

      {/* Code Verification Modal */}
      <AnimatePresence>
        {showCodeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className={`w-full max-w-[400px] border rounded-[2.5rem] p-8 md:p-10 relative shadow-3xl ${isDark ? 'bg-zinc-950 border-white/10' : 'bg-white border-slate-200'}`}
            >
              <button 
                onClick={() => setShowCodeModal(false)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
                style={{ color: isDark ? '#fff' : '#000' }}
              >
                <X size={14} />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-3xl bg-indigo-600/10 flex items-center justify-center text-indigo-600 mb-6">
                  <Lock size={24} />
                </div>
                <h3 className={`text-xl font-black tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>Verify Authorization</h3>
                <p className="text-xs font-medium text-slate-500 mb-8 leading-relaxed">Please enter your professional access code to unlock the high-resolution design exporter.</p>
                
                <input 
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && verifyAndExport()}
                  placeholder="E.g. NXT000"
                  className={`w-full bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-5 text-center font-mono text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all ${codeError ? 'border-red-500 ring-2 ring-red-500/20 animate-shake' : ''}`}
                  autoFocus
                />
                
                {codeError && (
                  <motion.p 
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-4"
                  >
                    Invalid Access Code
                  </motion.p>
                )}

                <button 
                  onClick={verifyAndExport}
                  className="w-full mt-8 py-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-indigo-500/20 active:scale-95 transition-all"
                >
                  Confirm & Generate
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Export Showcase Modal Overlay */}
      <AnimatePresence>
        {isExporting && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-hidden"
          >
            <div className="absolute top-10 w-full flex flex-col items-center">
               <Loader2 className="animate-spin text-white/20 mb-4" size={32} />
               <h3 className="text-white text-[10px] font-black uppercase tracking-[0.4em] mb-4">Generating Presentation...</h3>
               <button 
                onClick={() => setIsExporting(false)}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-[9px] font-black text-white uppercase tracking-widest transition-all"
               >
                 Cancel Export
               </button>
            </div>

            <div 
              ref={showcaseRef}
              className={`fixed top-[-9999px] left-[-9999px] w-[1200px] h-[675px] flex items-center justify-center relative overflow-hidden transition-colors ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}
            >
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.palette.primary} 0%, transparent 70%)` }}></div>
              
              <div className="flex items-center justify-center gap-12 w-full p-20 scale-[0.65] md:scale-[0.8] lg:scale-100">
                {/* Tilted View */}
                <div className="hidden lg:block perspective-1000">
                  <div className="rotate-y-[25deg] rotate-x-[5deg] scale-90 translate-y-10 group-hover:rotate-y-[15deg] transition-all duration-1000">
                    <MockupDisplay theme={theme} activeScreen={activeScreen === 'dashboard' ? 'chat' : 'dashboard'} isDark={isDark} isDeviceDark={isDeviceDark} vibe={vibe} />
                  </div>
                </div>

                {/* Main Front View */}
                <div className="relative z-10 scale-110 drop-shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                    <MockupDisplay theme={theme} activeScreen={activeScreen} isDark={isDark} isDeviceDark={isDeviceDark} vibe={vibe} />
                </div>

                {/* Second Perspective */}
                <div className="hidden md:block perspective-1000">
                   <div className="-rotate-y-[25deg] rotate-x-[5deg] scale-90 translate-y-20 transition-all duration-1000">
                    <MockupDisplay theme={theme} activeScreen={activeScreen === 'profile' ? 'dashboard' : 'profile'} isDark={isDark} isDeviceDark={isDeviceDark} vibe={vibe} />
                   </div>
                </div>
              </div>

              {/* Showcase Branding Labels */}
              <div className="absolute bottom-12 left-12 flex flex-col gap-2">
                 <h2 className={`text-4xl font-black tracking-tighter ${isDark ? 'text-white' : 'text-black'}`}>Canvas <span className="text-indigo-600">Studio</span></h2>
                 <p className={`text-[9px] font-black uppercase tracking-[0.3em] opacity-40 ${isDark ? 'text-white' : 'text-black'}`}>Professional Showcase — MMXXVI</p>
              </div>

              <div className="absolute top-12 right-12 flex items-center gap-4">
                 <div className="flex flex-col items-end">
                    <span className={`text-[8px] font-black uppercase tracking-widest opacity-40 ${isDark ? 'text-white' : 'text-black'}`}>Architecture by</span>
                    <span className={`text-xs font-black ${isDark ? 'text-white' : 'text-black'}`}>NEXTBYTE IT</span>
                 </div>
                 <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
                    <Box size={24} />
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.2s ease-in-out 0s 2;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .rotate-y-15 { transform: rotateY(15deg); }
        .rotate-y-25 { transform: rotateY(25deg); }
        .-rotate-y-25 { transform: rotateY(-25deg); }
        .rotate-x-5 { transform: rotateX(5deg); }
      `}} />
    </div>
  );
}

// --- Display Helper for Showcase ---
const MockupDisplay = ({ theme, activeScreen, isDark, isDeviceDark, vibe }: any) => {
  return (
    <div className={`w-[280px] h-[580px] rounded-[3.5rem] p-[8px] border-[10px] relative overflow-hidden ring-1 ring-inset transition-all duration-500 ${isDark ? 'bg-zinc-900 border-zinc-800 ring-white/10' : 'bg-slate-900 border-slate-800 ring-white/20'} ${vibe.shadow}`}>
      <div 
        className={`w-full h-full overflow-hidden flex flex-col relative ${theme.vibe === 'brutal' ? 'rounded-none' : 'rounded-[2.8rem]'} ${vibe.border}`} 
        style={{ 
          backgroundColor: isDeviceDark ? '#0F172A' : (theme.vibe === 'minimal' ? '#fff' : theme.palette.background), 
          color: isDeviceDark ? '#F1F5F9' : theme.palette.text,
          fontFamily: theme.font.family,
          borderRadius: theme.vibe === 'minimal' ? '0px' : theme.vibe === 'brutal' ? '0px' : `${theme.borderRadius}px`
        }}
      >
        <div className="flex-1 w-full pt-10 overflow-hidden flex flex-col relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeScreen}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex-1 w-full"
              transition={{ duration: 0.2 }}
            >
              {activeScreen === 'profile' && <ScreenProfile theme={{ ...theme, palette: { ...theme.palette, background: isDeviceDark ? '#0F172A' : '#FFFFFF', text: isDeviceDark ? '#F1F5F9' : '#0F172A', surface: isDeviceDark ? '#1E293B' : '#F8FAFC' } }} />}
              {activeScreen === 'dashboard' && <ScreenDashboard theme={{ ...theme, palette: { ...theme.palette, background: isDeviceDark ? '#0F172A' : '#FFFFFF', text: isDeviceDark ? '#F1F5F9' : '#0F172A', surface: isDeviceDark ? '#1E293B' : '#F8FAFC' } }} />}
              {activeScreen === 'chat' && <ScreenChat theme={{ ...theme, palette: { ...theme.palette, background: isDeviceDark ? '#0F172A' : '#FFFFFF', text: isDeviceDark ? '#F1F5F9' : '#0F172A', surface: isDeviceDark ? '#1E293B' : '#F8FAFC' } }} />}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-full z-[100] flex items-center justify-between px-4 shadow-xl">
           <div className="w-0.5 h-0.5 rounded-full bg-slate-800"></div>
        </div>

        <div className="h-20 border-t px-6 pb-6 flex items-center justify-around backdrop-blur-2xl shrink-0 relative" style={{ backgroundColor: (isDeviceDark ? '#1E293B' : '#F8FAFC') + 'CC', borderColor: (isDeviceDark ? '#334155' : '#E2E8F0') + '30' }}>
           {[Home, Search, Bell, User].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                 <Icon size={18} strokeWidth={2.5} style={{ color: i === 0 ? theme.palette.primary : (isDeviceDark ? '#94A3B8' : '#64748B'), opacity: i === 0 ? 1 : 0.4 }} />
              </div>
           ))}
           <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-current opacity-20 rounded-full" style={{ color: isDeviceDark ? '#FFFFFF' : '#000000' }}></div>
        </div>
      </div>
    </div>
  );
};
