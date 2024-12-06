import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const Terms = () => {
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

      {/* Header */}
      <div className="pt-32 pb-16 bg-dark-lighter border-b border-primary/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="heading-lg mb-4">
              <span className="gradient-text">Terms and Conditions</span>
            </h1>
            <p className="text-off-white/60">Effective Date: 5 December 2024</p>
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
          <div className="max-w-4xl mx-auto prose prose-invert prose-primary">
            <p className="text-lg text-off-white/80">
              These Terms and Conditions ("Terms") govern your use of the services provided by Underground Accelerator ("Company," "we," "us," or "our"). By engaging our services, you agree to these Terms. If you do not agree, you may not use our services.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 gradient-text">1. Services Provided</h2>
            <p className="text-off-white/80">We provide the following services:</p>
            <ul className="list-disc pl-6 space-y-2 text-off-white/80">
              <li>Done-for-you automation systems</li>
              <li>Strategy calls</li>
              <li>Setup of recurring revenue systems</li>
              <li>Website design</li>
              <li>Funnel design</li>
              <li>Custom integrations and automations to help clients scale their business</li>
            </ul>
            <p className="text-off-white/80">Services may include one-time setup fees, ongoing support, and a revenue-sharing agreement as outlined in Section 3.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6 gradient-text">2. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2 text-off-white/80">
              <li><span className="text-primary">Setup Fees:</span> All setup fees are payable via Stripe or PayPal.</li>
              <li><span className="text-primary">Revenue Sharing:</span> We charge a percentage of the income generated through our systems (e.g., 10% of community revenue).</li>
              <li><span className="text-primary">Money-Back Guarantee:</span> A 30-day money-back guarantee is available. However, if a refund is issued, you immediately lose access to all systems, automations, and software we created for you.</li>
              <li><span className="text-primary">Cancellation:</span> You may cancel at any time, but access to systems and tools will terminate upon cancellation.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-6 gradient-text">3. Revenue Sharing</h2>
            <p className="text-off-white/80">
              You agree to pay us a percentage of the monthly revenue generated from the systems and automations we set up for you. This revenue-sharing agreement will be detailed in a separate agreement provided at the time of onboarding.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 gradient-text">4. Scope of Work</h2>
            <p className="text-off-white/80">We guarantee:</p>
            <ul className="list-disc pl-6 space-y-2 text-off-white/80">
              <li>A fully functioning community setup</li>
              <li>Necessary tech back-end infrastructure</li>
              <li>Support required to run your systems effectively</li>
            </ul>
            <p className="text-off-white/80 mt-4">
              <span className="text-primary">Disclaimer:</span> Results may vary depending on your level of engagement, creativity, and commitment. We do not guarantee income, as this depends on your willingness to promote and support the systems we create.
            </p>

            {/* Continue with remaining sections... */}

            <div className="mt-12 p-6 bg-dark-lighter rounded-lg border border-primary/10 text-center">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Us</h2>
              <p className="text-off-white/80">If you have questions about these Terms, please contact us at:</p>
              <div className="mt-4 space-y-2 text-off-white/80">
                <p>Underground Accelerator</p>
                <p>8869 Lookout Mountain, Los Angeles CA 90046 USA</p>
                <p><a href="mailto:hello@underground-accelerator.com" className="text-primary hover:opacity-80 transition-opacity">hello@underground-accelerator.com</a></p>
                <p>+1 213 932 8949</p>
              </div>
            </div>

            <p className="mt-8 text-off-white/60 text-sm text-center">
              These Terms and Conditions outline the expectations, responsibilities, and limitations for both parties. By engaging our services, you agree to these terms in full.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 