import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Heart, Cake, Star, Github, Map, GraduationCap, Dog, Users, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import CitiesPage from './pages/CitiesPage';
import EconomicsPage from './pages/EconomicsPage';
import PetsPage from './pages/PetsPage';
import HeritageePage from './pages/HeritagePage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Heart, label: 'Home' },
    { path: '/cities', icon: Map, label: 'Journey' },
    { path: '/economics', icon: GraduationCap, label: 'Economics' },
    { path: '/pets', icon: Dog, label: 'Pets' },
    { path: '/heritage', icon: Users, label: 'Heritage' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 text-white">
      <header className="container mx-auto px-4 py-8">
        <nav className="flex justify-between items-center">
          <motion.h1 
            className="text-2xl font-bold flex items-center gap-2"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            <Heart className="text-pink-300" fill="currentColor" />
            Aakriti's Space
          </motion.h1>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <motion.div
            className="hidden md:flex items-center gap-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            {navItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center gap-2 hover:text-pink-200 transition-colors ${
                  location.pathname === path ? 'text-pink-200' : ''
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-200 transition-colors"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                className="fixed inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 z-40 md:hidden"
              >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                  {navItems.map(({ path, icon: Icon, label }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-2 text-xl ${
                        location.pathname === path ? 'text-pink-200' : ''
                      }`}
                    >
                      <Icon size={24} />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cities" element={<CitiesPage />} />
          <Route path="/economics" element={<EconomicsPage />} />
          <Route path="/pets" element={<PetsPage />} />
          <Route path="/heritage" element={<HeritageePage />} />
        </Routes>
      </AnimatePresence>

      <footer className="container mx-auto px-4 py-8 mt-16 text-center text-pink-200">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Made with ❤️ for Aakriti's {new Date().getFullYear()} Birthday
        </motion.p>
      </footer>
    </div>
  );
}

export default App;