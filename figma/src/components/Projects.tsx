import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

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

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState('all');

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
            
            <h2 className="mb-4 text-white">Projelerim</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
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
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
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
                    <h3 className="mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all">
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
                        <Badge 
                          key={tag}
                          variant="gradient"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 3 && (
                        <Badge className="bg-white/5 text-gray-400 border-white/10 hover:bg-white/10">
                          +{project.tags.length - 3}
                        </Badge>
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
