import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Badge } from './ui/badge';

const experiences = [
  {
    title: 'Senior Flutter Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Şu an',
    description: 'Enterprise seviye mobil uygulamalar geliştirme, takım liderliği ve mimari kararların alınması. Clean Architecture ve SOLID prensipleri ile proje yönetimi.',
    technologies: ['Flutter', 'Bloc', 'Firebase', 'GraphQL', 'CI/CD']
  },
  {
    title: 'Flutter Developer',
    company: 'StartupHub',
    period: '2020 - 2022',
    description: 'E-ticaret ve fintech uygulamalarının geliştirilmesi. REST API entegrasyonları, state management implementasyonu ve performans optimizasyonu.',
    technologies: ['Flutter', 'Provider', 'REST API', 'Stripe', 'SQLite']
  },
  {
    title: 'Mobile App Developer',
    company: 'Digital Solutions',
    period: '2019 - 2020',
    description: 'Çeşitli sektörlerden müşteriler için özel mobil uygulama çözümleri geliştirme. UI/UX tasarım implementasyonu ve kullanıcı deneyimi iyileştirmeleri.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps', 'Push Notifications']
  }
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-4"
            >
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Kariyer Yolculuğum</span>
            </motion.div>
            
            <h2 className="mb-4 text-white">Deneyimlerim</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              5+ yıllık profesyonel Flutter development deneyimim
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative pl-24"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-6 top-6 w-5 h-5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-slate-900"
                    whileHover={{ scale: 1.5 }}
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(168, 85, 247, 0.4)',
                        '0 0 0 20px rgba(168, 85, 247, 0)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  <motion.div
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3)'
                    }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all group"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full">
                        <Calendar className="w-4 h-4 text-purple-400" />
                        <span className="text-purple-300 text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                          transition={{ delay: index * 0.2 + i * 0.05 }}
                        >
                          <Badge variant="gradient">
                            {tech}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
