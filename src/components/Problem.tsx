import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Problem = () => {
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
    <section className="py-20 bg-dark-lighter">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg mb-8 text-center">
            <span className="gradient-text">You've Mastered Your Craft</span>
            <br />
            Now Share That Mastery
          </h2>
          
          <p className="text-xl text-off-white/80 mb-12 text-center">
            As an accomplished artist, you've acquired invaluable knowledge that others would gladly pay to learn.
            The challenge? Building an educational platform while maintaining your artistic focus.
          </p>

          <div className="space-y-6">
            {[
              "Limited time to create and manage educational systems",
              "Need to maintain artistic integrity while teaching",
              "Complex technical requirements for course delivery",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 bg-dark/50 p-6 rounded-lg"
              >
                <span className="text-primary text-2xl">•</span>
                <p className="text-lg text-off-white/90">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-12 text-xl text-center text-off-white/80"
          >
            Your expertise is too valuable to keep to yourself.
            <br />
            <span className="text-primary font-semibold">
              Let us handle the technical side while you focus on sharing your knowledge.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}; 