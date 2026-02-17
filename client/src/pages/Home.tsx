import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { Navbar } from "@/components/Navbar";
import { ContactForm } from "@/components/ContactForm";
import { 
  Trophy, 
  Target, 
  Brain, 
  Dumbbell, 
  Users, 
  Zap, 
  Star,
  CheckCircle2,
  ChevronRight,
  Clock,
  Calendar,
  X
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  desc: string;
  img: string;
  duration: string;
  sessions: string;
  features: string[];
  ideal: string;
}

const services: Service[] = [
  {
    title: "1-on-1 Personal Training",
    desc: "In-person coaching sessions focusing on form, intensity, and immediate feedback.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60",
    duration: "60 min sessions",
    sessions: "2-4x per week",
    features: ["Custom workout programming", "Real-time form correction", "Progress tracking", "Nutrition guidance"],
    ideal: "Those who prefer hands-on coaching and accountability"
  },
  {
    title: "Online Coaching",
    desc: "Complete programming, nutrition guidance, and weekly check-ins delivered via app.",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=60",
    duration: "Monthly program",
    sessions: "Weekly check-ins",
    features: ["App-based workouts", "Video tutorials", "Macro tracking", "Direct messaging support"],
    ideal: "Busy professionals who need flexibility"
  },
  {
    title: "Transformation Challenge",
    desc: "12-week intensive program designed for rapid but sustainable body recomposition.",
    img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop&q=60",
    duration: "12 weeks",
    sessions: "5x per week training",
    features: ["Complete meal plans", "Progress photos", "Community support", "Before/after documentation"],
    ideal: "Those ready for a complete lifestyle overhaul"
  },
  {
    title: "Muscle Building",
    desc: "Hypertrophy focused training blocks designed to maximize lean muscle growth.",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60",
    duration: "8-12 week blocks",
    sessions: "4-5x per week",
    features: ["Progressive overload programming", "Muscle-specific training", "Recovery protocols", "Supplement guidance"],
    ideal: "Those looking to build size and strength"
  },
  {
    title: "Fat Loss Protocol",
    desc: "Metabolic conditioning and nutrition strategies to shed fat while preserving muscle.",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60",
    duration: "8-16 weeks",
    sessions: "4x per week + cardio",
    features: ["HIIT & strength combo", "Calorie cycling", "Metabolic testing", "Body composition tracking"],
    ideal: "Those wanting to lean out sustainably"
  },
  {
    title: "Habit Coaching",
    desc: "Lifestyle optimization focusing on sleep, stress, and nutrition behaviors.",
    img: "/images/habit-coaching.jpg",
    duration: "Ongoing",
    sessions: "Bi-weekly calls",
    features: ["Sleep optimization", "Stress management", "Mindful eating", "Daily habit tracking"],
    ideal: "Those struggling with consistency"
  }
];

export default function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Gym interior dark moody */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-white pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-6">
              <span className="text-primary-foreground font-semibold tracking-wide text-sm uppercase">Elite Personal Training</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              Transform Your Body.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-200">
                Elevate Your Life.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
              Stop guessing at the gym. Get a personalized roadmap to build muscle, shred fat, and create sustainable habits that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="contact" smooth={true} offset={-80}>
                <button className="btn-primary w-full sm:w-auto">
                  Start Your Journey
                </button>
              </Link>
              <Link to="services" smooth={true} offset={-80}>
                <button className="px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/20 hover:bg-white/10 transition-all w-full sm:w-auto backdrop-blur-sm">
                  View Programs
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Banner */}
      <div className="bg-foreground text-white py-12 relative z-20 -mt-2">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary font-display mb-1">500+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Clients Transformed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary font-display mb-1">10+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary font-display mb-1">5</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Certifications</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary font-display mb-1">100%</div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">Commitment</div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            {...fadeInUp}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl -rotate-3 z-0" />
            {/* Trainer portrait */}
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop&q=60" 
              alt="Trainer portrait" 
              className="relative z-10 rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block max-w-xs">
              <p className="font-display font-bold text-lg mb-2">"Discipline is the bridge between goals and accomplishment."</p>
              <div className="flex items-center gap-2">
                <div className="h-1 w-10 bg-primary rounded-full"></div>
                <span className="text-sm text-muted-foreground font-semibold">Coach Alex</span>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeInUp}>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">About Me</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">More Than Just Reps & Sets</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I’m Alex, a certified personal trainer with a passion for helping high-achievers optimize their health. I don't believe in cookie-cutter plans or quick fixes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              My approach blends evidence-based training protocols with lifestyle coaching. Whether you're a busy executive or a competitive athlete, I build systems that fit your life, not the other way around.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Trophy className="w-5 h-5" />
                </div>
                <span className="font-semibold">NASM Certified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="font-semibold">Nutrition Specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Target className="w-5 h-5" />
                </div>
                <span className="font-semibold">Goal Oriented</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 text-primary rounded-lg">
                  <Users className="w-5 h-5" />
                </div>
                <span className="font-semibold">Community Focus</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">My Philosophy</span>
            <h2 className="text-4xl font-display font-bold mt-2">The 3 Pillars of Performance</h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Sustainable Fitness",
                desc: "We build habits that stick. No crash diets or unsustainable workout schedules. Consistency beats intensity every time."
              },
              {
                icon: <Target className="w-8 h-8 text-primary" />,
                title: "Personalized Plans",
                desc: "Your body is unique. Your plan should be too. Every workout and meal guide is tailored to your specific physiology."
              },
              {
                icon: <Brain className="w-8 h-8 text-primary" />,
                title: "Mindset First",
                desc: "Physical transformation starts in the mind. We work on mental resilience as much as physical strength."
              }
            ].map((card, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                className="bg-white p-8 rounded-2xl shadow-lg border border-border/50 hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-muted-foreground">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-xl">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Services</span>
            <h2 className="text-4xl font-display font-bold mt-2">Training Programs</h2>
            <p className="text-muted-foreground mt-4 text-lg">Choose the path that fits your lifestyle and goals.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedService(service)}
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer shadow-lg"
              data-testid={`card-service-${idx}`}
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors z-10" />
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-white/80 line-clamp-2 mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {service.desc}
                </p>
                <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  Learn More <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="max-w-2xl overflow-hidden p-0">
            {selectedService && (
              <>
                <div className="relative h-56">
                  <img 
                    src={selectedService.img} 
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-display font-bold text-white">
                        {selectedService.title}
                      </DialogTitle>
                    </DialogHeader>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-6">{selectedService.desc}</p>
                  
                  <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{selectedService.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{selectedService.sessions}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedService.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/50 rounded-xl mb-6">
                    <p className="text-sm">
                      <span className="font-semibold">Ideal for: </span>
                      {selectedService.ideal}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <Link to="contact" smooth={true} offset={-80} className="flex-1">
                      <Button 
                        className="w-full" 
                        onClick={() => setSelectedService(null)}
                        data-testid="button-book-program"
                      >
                        Book Free Consultation
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedService(null)}
                      data-testid="button-close-modal"
                    >
                      Close
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </section>

      {/* Testimonials */}
      <section id="results" className="py-24 bg-foreground text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Success Stories</span>
              <h2 className="text-4xl font-display font-bold mt-2">Real Results</h2>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 text-primary fill-primary" />)}
              <span className="ml-2 font-bold">5.0 Average Rating</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                role: "Marketing Director",
                quote: "I lost 15lbs in 3 months but more importantly, I learned how to eat without feeling restricted. Alex changed my relationship with food forever.",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=60"
              },
              {
                name: "David K.",
                role: "Software Engineer",
                quote: "The online coaching program was exactly what I needed. The app is easy to use and the workouts are challenging but manageable with my busy schedule.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=60"
              },
              {
                name: "Jessica R.",
                role: "New Mom",
                quote: "Getting back into shape after pregnancy felt impossible. Alex created a safe, effective plan that helped me regain my strength and confidence.",
                image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=60"
              }
            ].map((review, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10"
              >
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-primary fill-primary" />)}
                </div>
                <p className="text-lg text-gray-300 mb-6 italic">"{review.quote}"</p>
                <div className="flex items-center gap-4">
                  <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-bold">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-primary font-bold tracking-wider uppercase text-sm">Start Today</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6">Ready to Transform?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Book a free consultation call to discuss your goals and see if we're a good fit. No pressure, just a conversation about your potential.
            </p>
            
            <div className="space-y-6">
              {[
                "Personalized Training Roadmap",
                "Nutrition & Macro Guidance",
                "Lifestyle & Habit Assessment",
                "100% Confidential"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-1 bg-primary/20 rounded-full">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-lg">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-secondary/50 rounded-2xl border border-border">
              <h4 className="font-bold mb-2">Have a quick question?</h4>
              <p className="text-muted-foreground mb-4">Email me directly at alex@fitalex.com or use the form.</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl -z-10 blur-xl" />
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-border py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-primary rounded-md">
              <Dumbbell className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold font-display tracking-tight">
              FIT<span className="text-primary">ALEX</span>
            </span>
          </div>
          <div className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FitAlex Training. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">YouTube</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
