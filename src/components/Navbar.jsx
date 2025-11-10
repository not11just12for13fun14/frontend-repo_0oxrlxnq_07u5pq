import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-md bg-white/60 border-b border-black/5' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-sm bg-gradient-to-br from-red-500 to-rose-600" />
          <span className="font-semibold tracking-tight text-gray-900">Dominate Growth</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#solutions" className="hover:text-gray-900 transition-colors">Solutions</a>
          <a href="#results" className="hover:text-gray-900 transition-colors">Results</a>
          <a href="#process" className="hover:text-gray-900 transition-colors">Process</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-medium hover:bg-black transition-colors"
          >
            Get a growth plan
          </a>
        </div>
      </nav>
    </header>
  );
}
