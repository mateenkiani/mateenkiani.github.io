import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary mb-4">Hi, my name is</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Mateen Kiani
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-textSecondary mb-6">
            Full Stack Developer
          </h2>
          <p className="text-textSecondary max-w-2xl mb-8">
            A passionate Full Stack Developer with 3+ years of experience in MERN stack development 
            and 1 year in blockchain application development. Specializing in building scalable web 
            applications and blockchain solutions.
          </p>
          <div className="flex items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a 
              href="https://www.fiverr.com/s/VYZdg1x" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 border border-secondary text-secondary font-semibold rounded-lg hover:bg-secondary/10 transition-all duration-300"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 