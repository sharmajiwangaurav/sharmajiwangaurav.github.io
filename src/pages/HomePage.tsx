import { motion } from 'framer-motion';
import { Heart, Cake, Star } from 'lucide-react';

function HomePage() {
  const currentDate = new Date();
  const birthday = new Date(2024, 3, 3); // April 3rd, 2024
  const timeUntilBirthday = birthday.getTime() - currentDate.getTime();
  const daysUntilBirthday = Math.ceil(timeUntilBirthday / (1000 * 60 * 60 * 24));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
            Happy Birthday Aakriti!
          </h2>
          {daysUntilBirthday > 0 ? (
            <p className="text-2xl text-pink-200 mb-4">
              {daysUntilBirthday} days until your special day! 🎉
            </p>
          ) : (
            <p className="text-2xl text-pink-200 mb-4">
              Today is your special day! 🎉
            </p>
          )}
        </motion.div>

        <motion.div variants={itemVariants}>
          <img 
            src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
            alt="Celebration"
            className="rounded-lg shadow-2xl mb-12 hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <Cake className="w-12 h-12 mx-auto mb-4 text-pink-300" />
            <h3 className="text-xl font-semibold mb-3">Creative Soul</h3>
            <p className="text-pink-100">Your creativity lights up every room you enter.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <Heart className="w-12 h-12 mx-auto mb-4 text-pink-300" fill="currentColor" />
            <h3 className="text-xl font-semibold mb-3">Kind Heart</h3>
            <p className="text-pink-100">Your kindness makes the world a better place.</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
          >
            <Star className="w-12 h-12 mx-auto mb-4 text-pink-300" fill="currentColor" />
            <h3 className="text-xl font-semibold mb-3">Bright Star</h3>
            <p className="text-pink-100">Your presence brings joy to everyone around you.</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </main>
  );
}

export default HomePage;