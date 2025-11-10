import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Results from './components/Results';
import CTA from './components/CTA';

function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Dominate Growth. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900">Privacy</a>
          <a href="#" className="hover:text-gray-900">Terms</a>
          <a href="mailto:hello@dominategrowth.com" className="hover:text-gray-900">Contact</a>
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
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
