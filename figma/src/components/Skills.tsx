import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Smartphone, Code2, Database, Zap, Palette, 
  Shield, Cloud, GitBranch, Layers, Box 
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Mobile Development',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'Flutter', level: 98 },
      { name: 'Dart', level: 98 },
      { name: 'iOS Development', level: 85 },
      { name: 'Android Development', level: 90 }
    ]
  },
  {
    title: 'State Management',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Bloc/Cubit', level: 95 },
      { name: 'Riverpod', level: 92 },
      { name: 'Provider', level: 90 },
      { name: 'GetX', level: 85 }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: Database,
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Firebase', level: 93 },
      { name: 'REST API', level: 95 },
      { name: 'GraphQL', level: 88 },
      { name: 'Supabase', level: 85 }
    ]
  },
  {
    title: 'Architecture & Design',
    icon: Box,
    color: 'from-orange-500 to-red-500',
    skills: [
      { name: 'Clean Architecture', level: 94 },
      { name: 'SOLID Principles', level: 92 },
      { name: 'Design Patterns', level: 90 },
      { name: 'UI/UX Design', level: 88 }
    ]
  }
];

const tools = [
  { name: 'Git & GitHub', icon: GitBranch },
  { name: 'CI/CD', icon: Zap },
  { name: 'Cloud Services', icon: Cloud },
  { name: 'Security', icon: Shield },
  { name: 'Testing', icon: Code2 },
  { name: 'Design Tools', icon: Palette }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

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
              <Code2 className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Teknik Yetenekler</span>
            </motion.div>
            
            <h2 className="mb-4 text-white">Uzmanlık Alanlarım</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Modern teknolojiler ve best practices ile geliştirdiğim beceriler
            </p>
          </div>

          {/* Skill Categories */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity`} />

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <category.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">{skill.name}</span>
                          <motion.span 
                            className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        <div className="relative w-full bg-white/5 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut" 
                            }}
                          >
                            <motion.div
                              className="absolute inset-0 bg-white/30"
                              animate={{
                                x: ['-100%', '100%']
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "linear"
                              }}
                            />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-center mb-8 text-white">Araçlar & Teknolojiler</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: '0 20px 40px rgba(168, 85, 247, 0.3)'
                  }}
                  className="group relative"
                >
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="flex flex-col items-center gap-3"
                    >
                      <tool.icon className="w-8 h-8 text-purple-400 group-hover:text-pink-400 transition-colors" />
                      <span className="text-gray-400 text-sm group-hover:text-white transition-colors">
                        {tool.name}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
