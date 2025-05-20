import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import {  SiFiverr } from 'react-icons/si';


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
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <p className="text-textSecondary mb-8">
                I'm currently available for freelance work and full-time positions. 
                Feel free to reach out if you have any questions or opportunities.
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-textSecondary ${link.color} transition-colors`}
                  >
                    <link.icon className="w-6 h-6" />
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-textSecondary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-textSecondary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-textSecondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 bg-tertiary border border-textSecondary/20 rounded-lg focus:outline-none focus:border-secondary"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 