import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
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
              <span className="gradient-text">Privacy Policy</span>
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
              At Underground Accelerator, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your data when you interact with our website, services, and platforms.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 gradient-text">1. Information We Collect</h2>
            <p>We may collect the following types of information:</p>

            <h3 className="text-xl font-semibold mt-8 mb-4">1.1 Information You Provide to Us</h3>
            <ul className="list-disc pl-6 space-y-2 text-off-white/80">
              <li><span className="text-primary">Contact Information:</span> Name, email address, phone number, and other information you submit via forms on our website (e.g., booking forms, contact forms).</li>
              <li><span className="text-primary">Artist Information:</span> Information specific to your professional activities, such as Spotify Artist URLs, Instagram URLs, or other relevant links.</li>
              <li><span className="text-primary">Payment Information:</span> Payment details processed through Stripe or PayPal.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">1.2 Automatically Collected Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-off-white/80">
              <li><span className="text-primary">Device and Usage Information:</span> IP address, browser type, device type, operating system, and information about your interactions with our website.</li>
              <li><span className="text-primary">Cookies and Tracking Technologies:</span> Information collected via cookies, pixels, or similar technologies to enhance user experience and analytics.</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">1.3 Information from Third Parties</h3>
            <p className="text-off-white/80">Publicly available data or data shared by platforms like Spotify or Instagram that you link to our services.</p>

            <h2 className="text-2xl font-bold mt-12 mb-6 gradient-text">2. How We Use Your Information</h2>
            <p className="text-off-white/80">We use the information collected for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 text-off-white/80">
              <li><span className="text-primary">Service Delivery:</span> To provide, manage, and improve our services, including scheduling calls, setting up accounts, or offering tailored solutions.</li>
              <li><span className="text-primary">Communication:</span> To contact you about your bookings, respond to inquiries, and provide updates about our services.</li>
              <li><span className="text-primary">Marketing:</span> To send newsletters, promotional materials, and retarget ads through platforms like Facebook Pixel or Google Ads (you can opt out at any time).</li>
              <li><span className="text-primary">Analytics:</span> To monitor website performance, usage trends, and improve the quality of our services.</li>
              <li><span className="text-primary">Compliance:</span> To comply with legal obligations, enforce our terms of service, and ensure security.</li>
            </ul>

            {/* Continue with remaining sections... */}
            
            <div className="mt-12 p-6 bg-dark-lighter rounded-lg border border-primary/10">
              <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Us</h2>
              <p className="text-off-white/80">If you have questions, concerns, or requests regarding this Privacy Policy, please contact us at:</p>
              <div className="mt-4 space-y-2 text-off-white/80">
                <p>Underground Accelerator</p>
                <p>8869 Lookout Mountain, Los Angeles CA 90046 USA</p>
                <p><a href="mailto:hello@underground-accelerator.com" className="text-primary hover:opacity-80 transition-opacity">hello@underground-accelerator.com</a></p>
                <p>+1 213 932 8949</p>
              </div>
            </div>

            <p className="mt-8 text-off-white/60 text-sm">
              This Privacy Policy outlines how we handle and protect your data. By using our website and services, you consent to the practices described herein.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}; 