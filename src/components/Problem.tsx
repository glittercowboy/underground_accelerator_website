import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Problem = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
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
            <span className="gradient-text">"Millions of listeners,</span>
            <br />
            but where's the money?"
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 text-center">
            Even with 1,000,000+ monthly listeners, most artists are stuck in a cycle that's not working.
          </p>

          <div className="space-y-6">
            {[
              "Chained to constant touring and releases just to stay afloat.",
              "Missing the real value of their fan base, leaving money on the table.",
              "Paying huge percentages to managers and middlemen who don't deliver results.",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-4 bg-dark/50 p-6 rounded-lg"
              >
                <span className="text-primary text-2xl">•</span>
                <p className="text-lg text-gray-200">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-12 text-xl text-center text-gray-300"
          >
            The truth is, the traditional music industry isn't set up for your success.
            <br />
            <span className="text-primary font-semibold">
              But what if you didn't need to rely on the old ways anymore?
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}; 