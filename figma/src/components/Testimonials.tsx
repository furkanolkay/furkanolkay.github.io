import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import { Avatar, AvatarFallback } from './ui/avatar';

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

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            
            <h2 className="mb-4 text-white">Neler Söylüyorlar</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
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
                    <Avatar className="w-12 h-12 border-2 border-purple-500/50">
                      <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
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
