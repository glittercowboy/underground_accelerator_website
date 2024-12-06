import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-6 bg-dark border-t border-primary/10">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
          <motion.a
            href="/privacy-policy"
            whileHover={{ opacity: 0.8 }}
            className="text-off-white/60 hover:text-primary text-sm transition-colors"
          >
            Privacy Policy
          </motion.a>
          <span className="hidden sm:inline text-off-white/40">|</span>
          <motion.a
            href="/terms"
            whileHover={{ opacity: 0.8 }}
            className="text-off-white/60 hover:text-primary text-sm transition-colors"
          >
            Terms & Conditions
          </motion.a>
        </div>
        <div className="text-center mt-4">
          <p className="text-off-white/40 text-sm">
            © {new Date().getFullYear()} Underground Accelerator. All rights reserved.
          </p>
          <a 
            href="mailto:hello@underground-accelerator.com"
            className="text-off-white/60 hover:text-primary text-sm transition-colors mt-2 inline-block"
          >
            hello@underground-accelerator.com
          </a>
        </div>
        <div className="flex justify-center mt-6">
          <img 
            src="/images/ua-logo.png" 
            alt="Underground Accelerator" 
            className="h-12 w-auto transition-transform hover:scale-105"
          />
        </div>
      </div>
    </footer>
  );
}; 