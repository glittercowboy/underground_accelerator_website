import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { CalendarModal } from './CalendarModal';

const CheckIcon = () => (
  <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export const Pricing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="min-h-screen bg-dark">
      {/* Header with Logo */}
      <div className="pt-32 pb-16 bg-dark-lighter border-b border-primary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-lg mb-4">
              <span className="gradient-text">Transparent, Growth-Focused Pricing</span>
            </h1>
            <p className="text-2xl text-off-white/80 mt-6">
              You Keep Your Profits. We Grow New Revenue.
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
            {/* Intro */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-off-white/80 text-xl">
                Most managers take a percentage of everything you make, regardless of whether they're responsible for growing your income. That's not how we work. We only take a percentage of what you make through the systems we set up—income you wouldn't have had without us. This ensures you're only paying for measurable results, not empty promises.
              </p>
            </div>

            {/* Pricing Tiers */}
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {/* Setup Fee */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-lighter p-8 rounded-lg border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-4">1. Setup Fee</h3>
                <div className="text-3xl font-bold mb-6 gradient-text">$5,000</div>
                <p className="text-off-white/80 mb-6">The first month is all about building your growth engine.</p>
                <ul className="space-y-4">
                  {[
                    "Custom-designed systems and automations",
                    "Complete community setup",
                    "Personalized marketing guidance",
                    "Advanced tools integration",
                    "Multiple strategy calls"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-off-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Monthly Support */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-lighter p-8 rounded-lg border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-4">2. Ongoing Support</h3>
                <div className="text-3xl font-bold mb-6 gradient-text">$1,000/mo</div>
                <p className="text-off-white/80 mb-6">Continuous guidance and optimization for your systems.</p>
                <ul className="space-y-4">
                  {[
                    "Bi-weekly 30-minute check-ins",
                    "Hands-on campaign support",
                    "Proactive troubleshooting",
                    "Strategic growth advice",
                    "Expert guidance access"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-off-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Revenue Share */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-dark-lighter p-8 rounded-lg border border-primary/20"
              >
                <h3 className="text-2xl font-bold mb-4">3. Revenue Share</h3>
                <div className="text-3xl font-bold mb-6 gradient-text">10%</div>
                <p className="text-off-white/80 mb-6">Capped at $5,000 per month, only on new revenue we generate.</p>
                <ul className="space-y-4">
                  {[
                    "Community memberships",
                    "Paid events and experiences",
                    "Automation-generated income",
                    "Monthly cap protection",
                    "Performance-based pricing"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckIcon />
                      <span className="text-off-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
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
                Ready to <span className="gradient-text">Scale Your Success?</span>
              </h2>
              <p className="text-xl text-off-white/80 mb-8 max-w-2xl mx-auto">
                Your fans are ready. Your income potential is untapped. Let's build a system that scales your success and deepens your creative freedom.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-primary to-secondary text-dark px-12 py-4 rounded-lg text-lg font-semibold transition-all"
              >
                Book Your Introductory Call
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