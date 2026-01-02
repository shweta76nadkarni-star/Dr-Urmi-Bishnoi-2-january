import { memo } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "22+", label: "Years Experience" },
  { number: "3200+", label: "Patients Healed" },
  { number: "20+", label: "Certifications" },
  { number: "100%", label: "Confidentiality" },
];

const StatItem = memo(function StatItem({ 
  stat, 
  index 
}: { 
  stat: typeof stats[0]; 
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      data-testid={`stat-${index}`}
    >
      <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 font-heading">
        {stat.number}
      </div>
      <div className="text-white/80 text-xs sm:text-sm md:text-base font-medium tracking-wide uppercase">
        {stat.label}
      </div>
    </motion.div>
  );
});

const Stats = memo(function Stats() {
  return (
    <section className="py-12 sm:py-16 bg-primary text-white" data-testid="section-stats">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
});

export default Stats;
