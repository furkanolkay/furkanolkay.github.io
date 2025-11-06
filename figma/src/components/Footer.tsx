import { Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub', color: 'hover:text-purple-400' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', color: 'hover:text-blue-400' },
  { icon: Mail, href: 'mailto:your@email.com', label: 'Email', color: 'hover:text-pink-400' }
];

const quickLinks = [
  { name: 'Hakkımda', href: '#about' },
  { name: 'Projeler', href: '#projects' },
  { name: 'İletişim', href: '#contact' }
];

export function Footer() {
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
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
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
            <h3 className="mb-4 text-white">Hızlı Erişim</h3>
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
            <h3 className="mb-4 text-white">İletişim</h3>
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
