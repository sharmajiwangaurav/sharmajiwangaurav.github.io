import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

function CitiesPage() {
  const cities = [
    {
      name: "Delhi",
      description: "Where the journey began, amidst the bustling streets and rich culture of India's capital.",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
      years: "Early Years"
    },
    {
      name: "Mumbai",
      description: "The city of dreams that shaped perspectives and opened new horizons.",
      image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=80",
      years: "College Years"
    },
    {
      name: "London",
      description: "Where economics and culture blend perfectly, creating unforgettable memories.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      years: "Graduate Studies"
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
        A Journey Through Cities
      </h2>
      
      <div className="max-w-4xl mx-auto space-y-16">
        {cities.map((city, index) => (
          <motion.div
            key={city.name}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <div className="w-full md:w-1/2">
              <img
                src={city.image}
                alt={city.name}
                className="rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="text-pink-300" />
                <h3 className="text-2xl font-semibold">{city.name}</h3>
              </div>
              <p className="text-pink-200 font-medium">{city.years}</p>
              <p className="text-gray-100">{city.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default CitiesPage;