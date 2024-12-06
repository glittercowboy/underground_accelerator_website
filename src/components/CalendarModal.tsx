import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface CalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
  calendarUrl: string;
}

export const CalendarModal = ({ isOpen, onClose, calendarUrl }: CalendarModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Load the script when modal opens
      const script = document.createElement('script');
      script.src = 'https://link.underground-accelerator.com/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);

      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';

      return () => {
        // Cleanup script when modal closes
        document.body.removeChild(script);
        // Restore body scrolling
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          {/* Modal Container with Scrolling */}
          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center p-4">
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="w-full max-w-[90rem] relative"
              >
                <div className="relative bg-dark-lighter rounded-lg shadow-xl">
                  {/* Header */}
                  <div className="p-4 border-b border-primary/20 flex justify-between items-center">
                    <h3 className="text-xl font-semibold gradient-text text-center w-full">Schedule a Call</h3>
                    <button
                      onClick={onClose}
                      className="text-off-white/60 hover:text-primary transition-colors absolute right-4"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  {/* Calendar Container */}
                  <div className="w-full bg-dark-lighter">
                    <iframe
                      src={calendarUrl}
                      style={{ 
                        width: '100%',
                        height: '420px',
                        border: 'none',
                        display: 'block'
                      }}
                      scrolling="no"
                      title="Scheduling Calendar"
                      id="ubLdkpbX3jVzogwQamzH_1733453987575"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}; 