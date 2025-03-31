import { motion } from 'framer-motion';
import { Users, Heart, Map } from 'lucide-react';

function HeritagePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
        A Rich Heritage
      </h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20 mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80"
            alt="Heritage"
            className="rounded-lg shadow-2xl mb-8 hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-2xl font-semibold mb-4">Roots and Wings</h3>
          <p className="text-gray-100 leading-relaxed">
            A tapestry of traditions, values, and stories passed down through generations. Our family's journey spans across regions, cultures, and time, weaving together a rich narrative of perseverance, wisdom, and love.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <Users className="w-12 h-12 mb-4 text-blue-300" />
            <h3 className="text-xl font-semibold mb-3">Family Legacy</h3>
            <p className="text-gray-100">Generations of wisdom and traditions that shape who we are today.</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <Heart className="w-12 h-12 mb-4 text-pink-300" fill="currentColor" />
            <h3 className="text-xl font-semibold mb-3">Cultural Values</h3>
            <p className="text-gray-100">The core principles and beliefs that guide our path forward.</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <Map className="w-12 h-12 mb-4 text-green-300" />
            <h3 className="text-xl font-semibold mb-3">Family Journey</h3>
            <p className="text-gray-100">The remarkable stories of our ancestors and their inspiring journeys.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeritagePage;