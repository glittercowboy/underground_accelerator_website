import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';

const ArrowIcon = () => (
  <svg className="w-5 h-5 ml-2 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const DispellingMyth = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  return (
    <section className="py-20 bg-dark">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg mb-8 text-center">
            Sharing Knowledge Doesn't Mean
            <span className="gradient-text"> Compromising Art</span>
          </h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-dark-lighter p-8 md:p-12 rounded-2xl border border-primary/10"
          >
            <p className="text-xl text-off-white/80 mb-8">
              The truth is, you don't need to choose between being an artist and being an educator. The most respected artists today are the ones who share their expertise and build educational communities that create real value for their audience.
            </p>
            
            <p className="text-xl text-off-white/80">
              We give you the systems, strategies, and tools to do exactly that. You've already mastered your craft. Now it's time to share that knowledge in a way that benefits both you and your community.
            </p>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <h2 className="heading-lg mb-8">
              Your Knowledge is Valuable.
              <span className="gradient-text"> Ready to Share It?</span>
            </h2>
            
            <p className="text-xl text-off-white/80 mb-12">
              You don't need to rely solely on music releases or touring to make an impact. With our educational community platform, you'll:
            </p>

            <div className="space-y-4 mb-12">
              {[
                "Create lasting value by sharing your expertise through structured educational content.",
                "Build a thriving community of learners who value your knowledge and experience.",
                "Maintain creative freedom while helping others grow in their artistic journey.",
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <span className="text-success">✓</span>
                  <p className="text-off-white/80">{item}</p>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-primary to-secondary text-dark px-12 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center"
            >
              Let's Talk
              <ArrowIcon />
            </motion.button>
            
            <p className="mt-6 text-off-white/60">
              We'll handle the complexity. You handle the creativity.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calendarUrl="https://link.underground-accelerator.com/widget/booking/ubLdkpbX3jVzogwQamzH"
      />
    </section>
  );
}; 