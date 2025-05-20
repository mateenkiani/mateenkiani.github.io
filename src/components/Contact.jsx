import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/yourusername",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://linkedin.com/in/yourusername",
      color: "hover:text-blue-400"
    },
    {
      name: "Stack Overflow",
      icon: FaStackOverflow,
      url: "https://stackoverflow.com/users/yourusername",
      color: "hover:text-orange-400"
    },
    {
      name: "Fiverr",
      icon: SiFiverr,
      url: "https://www.fiverr.com/s/VYZdg1x",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title gradient-text">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">Connect With Me</h3>
              <p className="text-textSecondary mb-8 text-lg leading-relaxed">
                I'm currently available for freelance work and full-time positions. 
                Feel free to reach out if you have any questions or opportunities.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-3 text-textSecondary ${link.color} transition-colors
                              p-3 rounded-lg hover:bg-primary/50 backdrop-blur-sm border border-secondary/20
                              hover:border-secondary/40`}
                  >
                    <link.icon className="w-6 h-6" />
                    <span>{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-textSecondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-primary/50 backdrop-blur-sm border border-secondary/20 
                             rounded-lg focus:outline-none focus:border-secondary transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-textSecondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-primary/50 backdrop-blur-sm border border-secondary/20 
                             rounded-lg focus:outline-none focus:border-secondary transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-textSecondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-primary/50 backdrop-blur-sm border border-secondary/20 
                             rounded-lg focus:outline-none focus:border-secondary transition-all duration-300"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 