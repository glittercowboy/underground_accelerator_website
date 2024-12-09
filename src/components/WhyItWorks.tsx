import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ArtIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 9H9.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15 9H15.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const AuthenticityIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EarningsIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 1V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const WhyItWorks = () => {
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

  const benefits = [
    {
      title: ["Effortless", "Implementation"],
      description: "Complete technical setup and management. Just 2-4 hours of your time per week for content and mentoring.",
      icon: ArtIcon,
    },
    {
      title: ["Brand", "Enhancement"],
      description: "Elevate your position from artist to industry mentor. Build deeper, more meaningful connections with your audience.",
      icon: AuthenticityIcon,
    },
    {
      title: ["Sustainable", "Growth"],
      description: "Create predictable monthly recurring revenue while maintaining your artistic focus and integrity.",
      icon: EarningsIcon,
    },
  ];

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
            <span className="gradient-text">Beyond Just Teaching</span>
            <br />
            A Complete Partnership
          </h2>
          
          <p className="text-xl text-off-white/80 mb-16 text-center">
            We handle all technical aspects, allowing you to focus solely on sharing your knowledge and mentoring your community.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <div className="text-primary mb-4 flex justify-center">
                  <benefit.icon />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-primary h-[4rem] flex flex-col justify-center text-center">
                  {benefit.title.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </h3>
                <p className="text-off-white/80 text-center">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-16 text-xl text-center text-off-white/80"
          >
            Your vision deserves a system that scales <span className="text-off-white/80">- </span>
            <span className="text-primary font-semibold">
              let's build your automated revenue engine.
            </span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}; 