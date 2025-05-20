import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-secondary mb-4 font-mono"
          >
            Hi, my name is
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-4 gradient-text"
          >
            Mateen Kiani
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-textSecondary mb-6"
          >
            Full Stack Developer
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-textSecondary max-w-2xl mb-8 text-lg"
          >
            A passionate Full Stack Developer with 3+ years of experience in MERN stack development 
            and 1 year in blockchain application development. Specializing in building scalable web 
            applications and blockchain solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a 
              href="https://www.fiverr.com/s/VYZdg1x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-secondary text-secondary font-semibold rounded-lg 
                       hover:bg-secondary/10 transition-all duration-300 
                       hover:shadow-lg hover:shadow-secondary/20"
            >
              Hire Me
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-primary to-transparent"></div>
    </section>
  );
};

export default Hero; 