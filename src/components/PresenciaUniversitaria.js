import React from 'react';
import { motion } from 'framer-motion';

const PresenciaUniversitaria = () => {
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
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Presencia Universitaria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestro compromiso con la excelencia académica y la innovación
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="relative group overflow-hidden rounded-lg shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/presencia/presencia1.jpg"
                alt="Presencia Universitaria 1"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Innovación Académica</h3>
                <p className="text-sm">Comprometidos con la excelencia educativa</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="relative group overflow-hidden rounded-lg shadow-xl"
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="/images/presencia/presencia2.jpg"
                alt="Presencia Universitaria 2"
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-semibold mb-2">Desarrollo Profesional</h3>
                <p className="text-sm">Formando líderes del mañana</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PresenciaUniversitaria; 