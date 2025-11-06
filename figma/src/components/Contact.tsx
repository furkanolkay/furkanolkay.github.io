import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin, Phone, Send, MessageSquare } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
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
            
            <h2 className="mb-4 text-white">Birlikte Çalışalım</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                <h3 className="text-white mb-6">İletişim Bilgileri</h3>
                
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
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ad Soyad"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-white">
                    Email Adresiniz
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ornek@email.com"
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-white">
                    Mesajınız
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Projeniz hakkında detayları paylaşın..."
                    rows={6}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-purple-500/50 transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  variant="gradient"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Mesaj Gönder
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
