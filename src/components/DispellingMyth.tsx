import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
            Big Success Doesn't Mean
            <span className="gradient-text"> Selling Out</span>
          </h2>
          
          <motion.div 
            variants={itemVariants}
            className="bg-dark-lighter p-8 md:p-12 rounded-2xl border border-primary/10"
          >
            <p className="text-xl text-off-white/80 mb-8">
              The truth is, you don't need a radio hit or to chase pop stardom to achieve massive success. The artists thriving today are the ones who focus on building real, lasting connections with their fans - and monetizing those relationships in meaningful ways.
            </p>
            
            <p className="text-xl text-off-white/80">
              We give you the systems, strategies, and tools to do exactly that. You've already grown the fan base. Now it's time to unlock its full potential.
            </p>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <h2 className="heading-lg mb-8">
              Your Fans Are Ready.
              <span className="gradient-text"> Are You?</span>
            </h2>
            
            <p className="text-xl text-off-white/80 mb-12">
              You don't need a commercial hit, endless touring, or to sell out your vision to make life-changing money. With us, you'll:
            </p>

            <div className="space-y-4 mb-12">
              {[
                "Earn more by leveraging the fan base you've already built into sustainable income.",
                "Work smarter with cutting-edge systems that maximize your revenue and fanbase.",
                "Reclaim your freedom to focus on creating while our systems drive your growth.",
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
    </section>
  );
}; 