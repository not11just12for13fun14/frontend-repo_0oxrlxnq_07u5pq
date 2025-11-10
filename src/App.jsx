import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 bg-white/60 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Dominate Growth. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
          <a href="mailto:hello@dominategrowth.com" className="hover:text-gray-900 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ValueProps />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
