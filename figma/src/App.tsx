import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { 
  Github, Linkedin, Mail, ChevronDown, Sparkles, Download,
  Code2, Database, Zap, Palette, Shield, Cloud, GitBranch, Layers, Box,
  Smartphone, Award, Users, Star, Briefcase, Calendar, 
  ExternalLink, MessageSquare, MapPin, Phone, Send, Menu, X, Quote, Heart
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';
import { Toaster } from './components/ui/sonner';

// ========================
// HERO COMPONENT
// ========================
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(167, 139, 250, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)
            `
          }}
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full mb-6"
                  animate={{
                    boxShadow: [
                      '0 0 20px rgba(168, 85, 247, 0.2)',
                      '0 0 40px rgba(168, 85, 247, 0.4)',
                      '0 0 20px rgba(168, 85, 247, 0.2)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span className="text-purple-300">5+ Yıl Deneyimli Flutter Developer</span>
                </motion.div>

                <h1 className="mb-6 text-white text-5xl lg:text-6xl">
                  Mobil Uygulama
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Geliştirme Uzmanı
                  </span>
                </h1>

                <p className="mb-8 text-gray-300 text-xl leading-relaxed">
                  iOS ve Android için yüksek performanslı, kullanıcı dostu mobil uygulamalar 
                  geliştiriyorum. Flutter ile hayalinizdeki uygulamayı gerçeğe dönüştürüyorum.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <motion.button
                    onClick={() => scrollToSection('projects')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-10 py-4 text-base bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8),0_0_100px_rgba(236,72,153,0.6)]"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Sparkles className="w-5 h-5" />
                      Projelerimi İncele
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-200%', '200%']
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1
                      }}
                    />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-4 text-base border-2 border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 text-white backdrop-blur-sm rounded-xl hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Download className="w-5 h-5" />
                      CV İndir
                    </span>
                  </motion.button>
                </div>

                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                    { icon: Mail, href: 'mailto:your@email.com', label: 'Email' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1,
                        boxShadow: '0 0 20px rgba(168, 85, 247, 0.6)'
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all group"
                    >
                      <social.icon className="w-6 h-6 text-gray-300 group-hover:text-purple-400 transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Content - 3D Card Effect */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                className="relative"
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-3xl opacity-30" />
                
                {/* Main Card */}
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                  {/* Code Snippet Animation */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-4 text-gray-400 text-sm">main.dart</span>
                    </div>
                    
                    {[
                      { color: 'text-purple-400', text: 'class', width: '40%' },
                      { color: 'text-blue-400', text: 'FlutterApp', width: '60%' },
                      { color: 'text-pink-400', text: '@override', width: '50%' },
                      { color: 'text-green-400', text: 'Widget build()', width: '70%' },
                      { color: 'text-yellow-400', text: 'return MaterialApp', width: '80%' },
                      { color: 'text-purple-400', text: 'theme: ThemeData', width: '65%' },
                    ].map((line, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.1 }}
                        className={`${line.color} font-mono h-4 rounded`}
                        style={{ width: line.width }}
                      >
                        {line.text}
                      </motion.div>
                    ))}

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                      {[
                        { value: '50+', label: 'Projeler' },
                        { value: '5+', label: 'Yıl' },
                        { value: '98%', label: 'Memnuniyet' }
                      ].map((stat, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 1.5 + i * 0.1, type: 'spring' }}
                          className="text-center"
                        >
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1 text-2xl">
                            {stat.value}
                          </div>
                          <div className="text-gray-400 text-sm">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </motion.div>
    </section>
  );
}

// ========================
// STATS COMPONENT
// ========================
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

function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, value: 50, suffix: '+', label: 'Tamamlanan Proje', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, value: 40, suffix: '+', label: 'Mutlu Müşteri', color: 'from-purple-500 to-pink-500' },
    { icon: Award, value: 5, suffix: '+', label: 'Yıllık Deneyim', color: 'from-orange-500 to-red-500' },
    { icon: Star, value: 98, suffix: '%', label: 'Müşteri Memnuniyeti', color: 'from-green-500 to-emerald-500' }
  ];

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
                    className={`mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent text-4xl`}
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

// ========================
// EXPERIENCE COMPONENT
// ========================
function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            
            <h2 className="mb-4 text-white text-4xl">Deneyimlerim</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
                        <h3 className="text-white mb-2 group-hover:text-purple-400 transition-colors text-2xl">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 text-lg">{exp.company}</p>
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
                          whileHover={{ scale: 1.1 }}
                          className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                        >
                          {tech}
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

// ========================
// SKILLS COMPONENT
// ========================
function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            
            <h2 className="mb-4 text-white text-4xl">Uzmanlık Alanlarım</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
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
                    <h3 className="text-white text-2xl">{category.title}</h3>
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
            <h3 className="text-center mb-8 text-white text-3xl">Araçlar & Teknolojiler</h3>
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

// ========================
// PROJECTS COMPONENT (Continuing in next part...)
// ========================
function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'enterprise',
      description: 'Gerçek zamanlı ödeme entegrasyonu, ürün katalog yönetimi ve kullanıcı yönetim sistemi içeren kapsamlı e-ticaret uygulaması.',
      image: 'https://images.unsplash.com/photo-1758598304169-505a9c278dcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBtb2NrdXAlMjBzY3JlZW58ZW58MXx8fHwxNzYyMDk4MTI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Flutter', 'Bloc', 'Firebase', 'Stripe', 'GraphQL'],
      stats: { users: '50K+', rating: '4.8', downloads: '100K+' },
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Fitness & Health Tracker',
      category: 'lifestyle',
      description: 'AI destekli antrenman planları, kalori takibi, sosyal özellikler ve detaylı analytics içeren fitness uygulaması.',
      image: 'https://images.unsplash.com/photo-1676793894040-b6dd72276620?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB1aSUyMGRlc2lnbnxlbnwxfHx8fDE3NjIxODU4NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Flutter', 'Riverpod', 'HealthKit', 'Charts', 'ML Kit'],
      stats: { users: '30K+', rating: '4.9', downloads: '75K+' },
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Real Estate App',
      category: 'enterprise',
      description: '360° sanal tur, harita entegrasyonu, mortgage hesaplayıcı ve canlı chat özelliklerine sahip gayrimenkul uygulaması.',
      image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzYyMTc1NzIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Flutter', 'Google Maps', 'Firebase', 'WebRTC', 'AR Core'],
      stats: { users: '25K+', rating: '4.7', downloads: '60K+' },
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Social Media Dashboard',
      category: 'social',
      description: 'Real-time bildirimler, story özellikleri, mesajlaşma ve içerik yönetim sistemi içeren sosyal medya platformu.',
      image: 'https://images.unsplash.com/photo-1639493115941-b269818abfcd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdyYWRpZW50JTIwbWVzaHxlbnwxfHx8fDE3NjIwOTIwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Flutter', 'Bloc', 'Socket.io', 'CloudStorage', 'Push'],
      stats: { users: '80K+', rating: '4.6', downloads: '150K+' },
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Banking App',
      category: 'fintech',
      description: 'Güvenli ödeme işlemleri, QR kod ile para transferi, yatırım takibi ve detaylı finansal raporlama içeren banking uygulaması.',
      image: 'https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjIxMTM1ODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Flutter', 'Provider', 'Encryption', 'Biometric', 'REST API'],
      stats: { users: '100K+', rating: '4.9', downloads: '200K+' },
      github: 'https://github.com',
      demo: 'https://example.com'
    },
    {
      title: 'Food Delivery App',
      category: 'lifestyle',
      description: 'Gerçek zamanlı sipariş takibi, harita entegrasyonu, çoklu ödeme seçenekleri ve restoran yönetim paneli.',
      image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjIxNjQxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Flutter', 'Bloc', 'Google Maps', 'Firebase', 'Payment'],
      stats: { users: '60K+', rating: '4.8', downloads: '120K+' },
      github: 'https://github.com',
      demo: 'https://example.com'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tümü' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'fintech', label: 'Fintech' },
    { id: 'lifestyle', label: 'Lifestyle' },
    { id: 'social', label: 'Social' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(167,139,250,0.1),transparent_50%)]" />
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
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">Öne Çıkan İşlerim</span>
            </motion.div>
            
            <h2 className="mb-4 text-white text-4xl">Projelerim</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-lg">
              Son yıllarda geliştirdiğim yüksek performanslı mobil uygulamalar
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setSelectedCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-[0_0_30px_rgba(168,85,247,0.6)]'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {category.label}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-opacity" />

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      >
                        <Github className="w-5 h-5 text-white" />
                      </motion.a>
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 text-white" />
                      </motion.a>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-white/10">
                      <div className="text-center">
                        <div className="text-purple-400 text-sm mb-1">{project.stats.users}</div>
                        <div className="text-gray-500 text-xs">Kullanıcı</div>
                      </div>
                      <div className="text-center">
                        <div className="text-pink-400 text-sm mb-1">{project.stats.rating}</div>
                        <div className="text-gray-500 text-xs">Puan</div>
                      </div>
                      <div className="text-center">
                        <div className="text-blue-400 text-sm mb-1">{project.stats.downloads}</div>
                        <div className="text-gray-500 text-xs">İndirme</div>
                      </div>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <motion.span
                          key={tag}
                          whileHover={{ scale: 1.1 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 hover:from-purple-500/30 hover:to-pink-500/30 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all"
                        >
                          {tag}
                        </motion.span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1.5 bg-white/5 text-gray-400 border border-white/10 rounded-full text-sm">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ========================
// TESTIMONIALS COMPONENT
// ========================
function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: 'Ahmet Yılmaz',
      role: 'CEO, TechStartup',
      content: 'Projemizi zamanında ve beklentilerimizin üzerinde teslim etti. Flutter konusundaki uzmanlığı ve problem çözme becerisi gerçekten etkileyici. Kesinlikle tekrar çalışmak isteriz.',
      rating: 5,
      avatar: 'AY'
    },
    {
      name: 'Elif Demir',
      role: 'Product Manager, E-Commerce Co.',
      content: 'E-ticaret uygulamamızı geliştirirken gösterdiği profesyonellik ve detaylara gösterdiği özen mükemmeldi. Kullanıcı deneyimi odaklı yaklaşımı uygulamayı bir üst seviyeye taşıdı.',
      rating: 5,
      avatar: 'ED'
    },
    {
      name: 'Mehmet Kaya',
      role: 'CTO, FinTech Solutions',
      content: 'Karmaşık fintech uygulaması projemizde gösterdiği teknik yetkinlik ve güvenlik odaklı yaklaşım takdire şayan. Clean code ve best practices konusunda gerçek bir uzman.',
      rating: 5,
      avatar: 'MK'
    },
    {
      name: 'Zeynep Arslan',
      role: 'Founder, Health App',
      content: 'Sağlık ve fitness uygulamamızı geliştirirken kullanıcı geri bildirimlerini hızla değerlendirip implemente etti. İletişimi mükemmel ve sonuç odaklı bir profesyonel.',
      rating: 5,
      avatar: 'ZA'
    },
    {
      name: 'Can Öztürk',
      role: 'Director, Real Estate Tech',
      content: 'AR entegrasyonu ve karmaşık harita özellikleri içeren projemizde mükemmel bir iş çıkardı. Teknik zorlukları kolaylıkla aştı ve harika bir ürün ortaya çıkardı.',
      rating: 5,
      avatar: 'CÖ'
    },
    {
      name: 'Ayşe Şahin',
      role: 'Marketing Lead, Social Platform',
      content: 'Sosyal medya platformumuzun mobil versiyonunu geliştirirken gösterdiği yaratıcılık ve hız olağanüstüydü. Kullanıcı sayımız 3 katına çıktı. Harika bir deneyimdi!',
      rating: 5,
      avatar: 'AŞ'
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
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
              <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
              <span className="text-purple-300">Müşteri Görüşleri</span>
            </motion.div>
            
            <h2 className="mb-4 text-white text-4xl">Neler Söylüyorlar</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Birlikte çalıştığım müşterilerin deneyimleri
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: '0 20px 60px rgba(168, 85, 247, 0.3)'
                }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />

                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full hover:bg-white/10 transition-all">
                  {/* Quote Icon */}
                  <motion.div
                    className="absolute top-6 right-6 text-purple-500/20"
                    whileHover={{ scale: 1.2, rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Quote className="w-12 h-12" fill="currentColor" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="text-white mb-1">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ========================
// CONTACT COMPONENT
// ========================
function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.');
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your@email.com',
      href: 'mailto:your@email.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Telefon',
      value: '+90 (555) 123-4567',
      href: 'tel:+905551234567',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Lokasyon',
      value: 'İstanbul, Türkiye',
      href: '#',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.15) 0%, transparent 70%)`
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
              <MessageSquare className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300">İletişim</span>
            </motion.div>
            
            <h2 className="mb-4 text-white text-4xl">Birlikte Çalışalım</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Projeniz için benimle iletişime geçin. Her türlü sorunuz için buradayım!
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-white mb-6 text-2xl">İletişim Bilgileri</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.label}
                      href={info.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      whileHover={{ 
                        x: 8,
                        boxShadow: '0 10px 40px rgba(168, 85, 247, 0.3)'
                      }}
                      className="group flex items-start gap-4 p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/10 transition-all cursor-pointer"
                    >
                      <motion.div
                        className={`w-14 h-14 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-gray-400 mb-1">{info.label}</p>
                        <p className="text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6 }}
                className="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    className="w-3 h-3 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                  <span className="text-green-400">Yeni Projeler İçin Müsaitim</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Freelance projelere ve uzun dönemli işbirliklerine açığım.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-3xl blur-2xl opacity-0 group-hover:opacity-20 transition-opacity" />

              <form 
                onSubmit={handleSubmit} 
                className="relative space-y-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all"
              >
                <div>
                  <label htmlFor="name" className="block mb-2 text-white">
                    Adınız Soyadınız
                  </label>
                  <input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ad Soyad"
                    required
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/20 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-white">
                    Email Adresiniz
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ornek@email.com"
                    required
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/20 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-white">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Projeniz hakkında detayları paylaşın..."
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/20 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] outline-none transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-full px-10 py-4 text-base bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.6),0_0_60px_rgba(236,72,153,0.4)] hover:shadow-[0_0_50px_rgba(168,85,247,0.8),0_0_100px_rgba(236,72,153,0.6)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Send className="w-5 h-5" />
                    Mesaj Gönder
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.3 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{
                      x: ['-200%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ========================
// NAVIGATION COMPONENT
// ========================
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Deneyim', href: '#experience' },
    { name: 'Yetenekler', href: '#skills' },
    { name: 'Projeler', href: '#projects' },
    { name: 'Referanslar', href: '#testimonials' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Track active section
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-950/80 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-purple-500/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="cursor-pointer group"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Sparkles className="w-5 h-5 text-white" />
                </motion.div>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-xl">
                  Flutter Dev
                </span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative text-gray-300 hover:text-white transition-colors cursor-pointer group ${
                    activeSection === item.href.substring(1) ? 'text-white' : ''
                  }`}
                >
                  {item.name}
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    animate={{ 
                      scaleX: activeSection === item.href.substring(1) ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-lg shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_30px_rgba(168,85,247,0.7)] transition-all relative overflow-hidden group"
              >
                <span className="relative z-10">İletişime Geç</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-200%', '200%']
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 1
                  }}
                />
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              className="absolute inset-0 bg-slate-950/95 backdrop-blur-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            <div className="relative h-full flex flex-col items-center justify-center gap-8 p-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-2xl text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 hover:bg-clip-text transition-all cursor-pointer"
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.button
                onClick={() => scrollToSection('#contact')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white rounded-xl shadow-[0_0_30px_rgba(168,85,247,0.6)] text-lg"
              >
                İletişime Geç
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ========================
// FOOTER COMPONENT
// ========================
function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-purple-400' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Mail, href: 'mailto:your@email.com', label: 'Email', color: 'hover:text-pink-400' }
  ];

  const quickLinks = [
    { name: 'Deneyim', href: '#experience' },
    { name: 'Projeler', href: '#projects' },
    { name: 'İletişim', href: '#contact' }
  ];

  return (
    <footer className="relative bg-slate-950 text-white py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent text-xl">
                Flutter Developer
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              5+ yıllık deneyimle iOS ve Android için yüksek performanslı mobil uygulamalar geliştiriyorum.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-red-500 text-red-500" />
              </motion.div>
              <span>& Flutter</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="mb-4 text-white text-xl">Hızlı Erişim</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  whileHover={{ x: 5 }}
                  className="block text-gray-400 hover:text-purple-400 transition-colors cursor-pointer"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="mb-4 text-white text-xl">İletişim</h3>
            <div className="space-y-3 text-gray-400">
              <p>İstanbul, Türkiye</p>
              <p>your@email.com</p>
              <p>+90 (555) 123-4567</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} Tüm hakları saklıdır.
          </motion.p>

          <div className="flex gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.2,
                  y: -5,
                  boxShadow: '0 10px 30px rgba(168, 85, 247, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl ${social.color} transition-all group`}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ========================
// MAIN APP
// ========================
export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navigation />
      <Hero />
      <Stats />
      <Experience />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}
