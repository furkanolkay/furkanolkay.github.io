import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, ChevronDown, Sparkles, Download } from 'lucide-react';
import { Button } from './ui/button';
import { useRef } from 'react';

export function Hero() {
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

                <h1 className="mb-6 text-white">
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
                  <Button
                    onClick={() => scrollToSection('projects')}
                    size="lg"
                    variant="gradient"
                  >
                    <Sparkles className="w-5 h-5 mr-2" />
                    Projelerimi İncele
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-purple-500/50 bg-purple-500/10 hover:bg-purple-500/20 text-white backdrop-blur-sm hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    CV İndir
                  </Button>
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
                          <div className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-1">
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
