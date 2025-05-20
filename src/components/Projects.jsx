import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "NFT Marketplace",
      description: "A decentralized NFT marketplace built with Next.js, Solidity, and Web3.js. Features include minting, buying, selling, and auctioning NFTs.",
      image: "/nft-marketplace.jpg",
      technologies: ["Next.js", "Solidity", "Web3.js", "Ethereum", "IPFS"],
      github: "https://github.com/yourusername/nft-marketplace",
      live: "https://nft-marketplace-demo.com"
    },
    {
      title: "Healthcare Management System",
      description: "A comprehensive healthcare management system built with React, TypeScript, and Spring Boot. Features include patient management, appointment scheduling, and medical records.",
      image: "/healthcare-system.jpg",
      technologies: ["React", "TypeScript", "Spring Boot", "Java", "PostgreSQL"],
      github: "https://github.com/yourusername/healthcare-system",
      live: "https://healthcare-system-demo.com"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with Shopify integration, built using Next.js and Node.js. Includes features like product management, cart functionality, and payment processing.",
      image: "/ecommerce-platform.jpg",
      technologies: ["Next.js", "Node.js", "MongoDB", "Shopify API", "Stripe"],
      github: "https://github.com/yourusername/ecommerce-platform",
      live: "https://ecommerce-platform-demo.com"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-tertiary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary/50 backdrop-blur-sm rounded-lg overflow-hidden border border-secondary/20 
                         hover:border-secondary/40 transition-all duration-300 card-hover"
              >
                <div className="relative h-48 group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors transform hover:scale-110"
                    >
                      <FaGithub className="w-8 h-8" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors transform hover:scale-110"
                    >
                      <FaExternalLinkAlt className="w-8 h-8" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary mb-4 text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-tertiary/50 backdrop-blur-sm text-secondary rounded-full text-sm
                                 border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 