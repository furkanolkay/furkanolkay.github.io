import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Award, Users, Code2, Star } from 'lucide-react';

const stats = [
  { icon: Code2, value: 50, suffix: '+', label: 'Tamamlanan Proje', color: 'from-blue-500 to-cyan-500' },
  { icon: Users, value: 40, suffix: '+', label: 'Mutlu Müşteri', color: 'from-purple-500 to-pink-500' },
  { icon: Award, value: 5, suffix: '+', label: 'Yıllık Deneyim', color: 'from-orange-500 to-red-500' },
  { icon: Star, value: 98, suffix: '%', label: 'Müşteri Memnuniyeti', color: 'from-green-500 to-emerald-500' }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3)'
                }}
                className="relative group"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center">
                  <motion.div
                    className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  
                  <motion.h3 
                    className={`mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </motion.h3>
                  
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
