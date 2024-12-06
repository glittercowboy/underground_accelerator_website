import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="heading-xl mb-6">
            <span className="gradient-text">You Have the Fans.</span>
            <br />
            Now Let's Unlock the Money.
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-12">
            Done-for-you systems to turn your fan base into recurring revenue—no touring, no endless releases, no hassle.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary hover:bg-opacity-90 text-dark px-8 py-4 rounded-lg text-lg font-semibold transition-all"
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
    </section>
  );
}; 