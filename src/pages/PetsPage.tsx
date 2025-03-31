import { motion } from 'framer-motion';
import { Heart, Bone, Star } from 'lucide-react';

function PetsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
        Meet My Lhasa Apso
      </h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20 mb-12"
        >
          <img
            src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=800&q=80"
            alt="Lhasa Apso"
            className="rounded-lg shadow-2xl mb-8 hover:scale-105 transition-transform duration-300"
          />
          <h3 className="text-2xl font-semibold mb-4">My Furry Best Friend</h3>
          <p className="text-gray-100 leading-relaxed">
            A loyal companion with a heart of gold, my Lhasa Apso brings endless joy and laughter to every day. Originally bred as sentinel dogs for Buddhist monasteries, these intelligent and devoted pets make perfect companions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <Heart className="w-12 h-12 mb-4 text-pink-300" fill="currentColor" />
            <h3 className="text-xl font-semibold mb-3">Loving Nature</h3>
            <p className="text-gray-100">The most affectionate and caring companion anyone could ask for.</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <Bone className="w-12 h-12 mb-4 text-yellow-300" />
            <h3 className="text-xl font-semibold mb-3">Playful Spirit</h3>
            <p className="text-gray-100">Always ready for adventure and bringing smiles with playful antics.</p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <Star className="w-12 h-12 mb-4 text-purple-300" fill="currentColor" />
            <h3 className="text-xl font-semibold mb-3">Loyal Guardian</h3>
            <p className="text-gray-100">A true protector with the heart of a lion in a small package.</p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default PetsPage;