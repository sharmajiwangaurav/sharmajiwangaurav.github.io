import { motion } from 'framer-motion';
import { BookOpen, Award, Briefcase } from 'lucide-react';

function EconomicsPage() {
  const achievements = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Distinguished scholar in Economics with groundbreaking research in behavioral economics.",
      color: "text-blue-300"
    },
    {
      icon: Award,
      title: "Research Impact",
      description: "Published influential papers on economic policy and market behavior.",
      color: "text-yellow-300"
    },
    {
      icon: Briefcase,
      title: "Professional Journey",
      description: "From theoretical frameworks to practical applications in the real world.",
      color: "text-green-300"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="container mx-auto px-4 py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-300 to-purple-300">
        The Economics Journey
      </h2>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-white/10 backdrop-blur-lg p-8 rounded-lg border border-white/20 mb-12"
        >
          <h3 className="text-2xl font-semibold mb-4">The Path to Economics</h3>
          <p className="text-gray-100 leading-relaxed">
            A journey that began with curiosity about how markets shape our world has evolved into a passionate pursuit of economic understanding and innovation. Through years of study and research, Aakriti has developed unique insights into behavioral economics and market dynamics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-lg border border-white/20"
              >
                <Icon className={`w-12 h-12 mb-4 ${achievement.color}`} />
                <h3 className="text-xl font-semibold mb-3">{achievement.title}</h3>
                <p className="text-gray-100">{achievement.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default EconomicsPage;