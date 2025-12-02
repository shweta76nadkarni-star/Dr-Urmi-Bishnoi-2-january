import { motion } from "framer-motion";

const stats = [
  { number: "15+", label: "Years Experience" },
  { number: "3200+", label: "Patients Healed" },
  { number: "20+", label: "Certifications" },
  { number: "100%", label: "Confidentiality" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 font-heading">{stat.number}</div>
              <div className="text-white/80 text-sm md:text-base font-medium tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
