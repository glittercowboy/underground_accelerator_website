import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CaseStudy() {
  const ref = useRef(null);
  const inView = useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-20 bg-dark">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <h2 className="heading-lg mb-8 text-center">
            <span className="gradient-text">Success Story:</span>
            <br />
            TÂCHES Teaches
          </h2>
          
          <p className="text-xl text-off-white/80 mb-16 text-center">
            See how we helped TÂCHES transform their expertise into a thriving educational community
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">The Challenge</h3>
              <p className="text-off-white/80">
                TÂCHES wanted to share their production expertise and build deeper connections with their audience, 
                but needed a way to do it without compromising their artistic focus.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Our Solution</h3>
              <p className="text-off-white/80">
                We built a complete educational platform that automated the technical aspects, 
                allowing TÂCHES to focus purely on sharing their knowledge and mentoring students.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 bg-dark-lighter rounded-lg border border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Results</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  metric: "Recurring Revenue",
                  description: "Predictable monthly income from the educational platform"
                },
                {
                  metric: "Deeper Connections",
                  description: "Meaningful interactions with dedicated students"
                },
                {
                  metric: "Artistic Focus",
                  description: "Maintained creative output while teaching"
                }
              ].map((result, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-xl font-bold mb-2 gradient-text">{result.metric}</h4>
                  <p className="text-off-white/80">{result.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
