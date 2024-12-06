import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Callout = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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

  const requirements = [
    "Learn CRM systems, fan data collection, and segmentation.",
    "Master coding and backend development for integrations.",
    "Build automated email funnels, payment systems, and subscription platforms.",
    "Run AI workflows for fan engagement and behavior tracking.",
    "Design community growth strategies and track analytics.",
  ];

  const benefits = [
    "Keep creating music.",
    "Show up for your fans in ways only you can.",
    "Make more money than you ever thought possible—without lifting a finger on the backend.",
  ];

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="container relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg mb-12 text-center">
            What Would It Take to Do This
            <span className="gradient-text"> Without Us?</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left column - Requirements */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                To set up what we do for you, you'd need to:
              </h3>
              {requirements.map((req, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-red-500">✕</span>
                  <p className="text-gray-300">{req}</p>
                </div>
              ))}
            </motion.div>

            {/* Right column - Benefits */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold mb-6 text-primary">
                You don't have to do any of this. With us, you can:
              </h3>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <span className="text-secondary">✓</span>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-30" />
    </section>
  );
}; 