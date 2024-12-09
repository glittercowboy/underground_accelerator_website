import { motion } from 'framer-motion';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';

export const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="min-h-screen sm:h-[calc(100vh-4rem)] flex items-center justify-center bg-dark relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center sm:transform sm:translate-y-12 transform translate-y-12"
        >
          <h1 className="heading-xl mb-6">
            <span className="gradient-text">Transform Your Expertise</span>
            <br />
            Into Premium Education
          </h1>
          <div className="text-xl sm:text-2xl text-off-white/80 mb-12 space-y-2">
            <p>For accomplished underground dance music artists with 1M+ listeners</p>
            <p>Create sustainable revenue while deepening fan connections</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-primary to-secondary text-dark px-8 py-4 rounded-lg text-lg font-semibold transition-all"
          >
            Let's Talk
          </motion.button>
        </motion.div>
      </div>
      
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent portal-gradient-vertical" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-primary/5 to-transparent portal-gradient" />
      {/* Additional portal effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_50%,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent portal-gradient-offset" />

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calendarUrl="https://link.underground-accelerator.com/widget/booking/ubLdkpbX3jVzogwQamzH"
      />

      {/* Load the required script */}
      {isModalOpen && (
        <script src="https://link.underground-accelerator.com/js/form_embed.js" type="text/javascript" />
      )}
    </section>
  );
}; 