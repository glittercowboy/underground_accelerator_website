import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';
import { Link } from 'react-router-dom';

const ArrowIcon = () => (
  <svg className="w-5 h-5 ml-2 inline-block" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const Investment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-dark">
      {/* Header with Logo */}
      <div className="absolute top-8 w-full z-50">
        <div className="container">
          <div className="flex justify-center">
            <Link to="/">
              <motion.img 
                src="/images/ua-logo.png" 
                alt="Underground Accelerator" 
                className="h-16 w-auto hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="pt-32 pb-16 bg-dark-lighter border-b border-primary/10 relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-lg mb-4">
              <span className="text-off-white">Transform Your Fan Base Into </span>
              <span className="gradient-text">Predictable Income</span>
            </h1>
            <p className="text-2xl text-off-white/80 mt-6">
              A Premium, Done-For-You Service That Generates Measurable Growth
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="container"
        >
          <div className="max-w-4xl mx-auto">
            {/* Value Proposition */}
            <div className="prose prose-invert prose-lg max-w-none text-center">
              <p className="text-xl text-off-white/80">
                An investment in your career that pays for itself through new, recurring revenue streams. We build custom systems that turn your existing fan base into predictable monthly income.
              </p>
            </div>

            {/* What You Get */}
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {/* Systems & Automation */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-lighter p-8 rounded-lg border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-center">Custom Systems</h3>
                <ul className="space-y-4">
                  {[
                    "Done-for-you automation setup",
                    "Complete community platform",
                    "Advanced integration tools",
                    "Monetization strategies",
                    "Growth-focused systems"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-primary">✓</span>
                      <span className="text-off-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Ongoing Support */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-lighter p-8 rounded-lg border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-center">Expert Support</h3>
                <ul className="space-y-4">
                  {[
                    "Regular strategy sessions",
                    "Campaign optimization",
                    "Technical assistance",
                    "Growth consulting",
                    "Ongoing optimization",
                    "Priority support access"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-primary">✓</span>
                      <span className="text-off-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Results */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-lighter p-8 rounded-lg border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-4 text-center">Real Results</h3>
                <ul className="space-y-4">
                  {[
                    "Sustainable revenue streams",
                    "Predictable income",
                    "Deeper fan engagement",
                    "Scalable growth",
                    "Measurable ROI",
                    "Data-driven insights"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-primary">✓</span>
                      <span className="text-off-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Success Stories */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Proven Results</h2>
              <div className="bg-dark-lighter p-8 rounded-lg border border-primary/20 text-center">
                <p className="text-2xl text-off-white/80 mb-6">
                  Our clients generate <span className="text-primary font-bold">$10,000+/month</span> in new revenue within 90 days
                </p>
                <p className="text-lg text-off-white/60">
                  This is income they wouldn't have had without our systems, strategies, and support.
                </p>
              </div>
            </div>

            {/* Why Different Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-8 gradient-text text-center">Why This Isn't Just Another Manager Percentage</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "You Keep Your Core Income",
                    description: "Unlike traditional managers, we don't touch the revenue you already earn from streams, merch, or touring. Your existing income streams remain 100% yours, allowing you to maintain complete control over your current business model and future growth."
                  },
                  {
                    title: "Growth-Focused, Not Passive",
                    description: "We're not here to sit back and collect a cut. Our team actively builds, optimizes, and grows your revenue streams through innovative systems and strategies. We succeed only when you succeed, driving us to continuously improve and expand your income."
                  },
                  {
                    title: "Measurable Results",
                    description: "All revenue we generate for you is tracked and verified through our sophisticated systems, providing complete transparency. You'll always know exactly what we've contributed, with detailed analytics and reporting to show your growth over time."
                  },
                  {
                    title: "Aligned Incentives",
                    description: "The more money we make you, the more we earn. This ensures our focus is always on delivering maximum results. Our success is directly tied to your growth, creating a true partnership where both parties are motivated to achieve exceptional outcomes."
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-dark-lighter p-6 rounded-lg border border-primary/20">
                    <h3 className="text-xl font-bold mb-3 text-primary text-center">{item.title}</h3>
                    <p className="text-off-white/80 text-center">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to <span className="gradient-text">Transform Your Career?</span>
              </h2>
              <p className="text-xl text-off-white/80 mb-8 max-w-2xl mx-auto">
                Let's talk about your vision and see if this is the right fit for you. Together, we'll uncover the untapped revenue potential in your career.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-primary to-secondary text-dark px-12 py-4 rounded-lg text-lg font-semibold transition-all inline-flex items-center"
              >
                Book Your Free Strategy Call
                <ArrowIcon />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Calendar Modal */}
      <CalendarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        calendarUrl="https://link.underground-accelerator.com/widget/booking/ubLdkpbX3jVzogwQamzH"
      />
    </div>
  );
}; 