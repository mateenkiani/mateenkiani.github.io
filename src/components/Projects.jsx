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
    <section id="projects" className="section-padding bg-tertiary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/80 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors"
                    >
                      <FaGithub className="w-6 h-6" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary hover:text-white transition-colors"
                    >
                      <FaExternalLinkAlt className="w-6 h-6" />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-secondary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-textSecondary mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-tertiary text-secondary rounded-full text-sm"
                      >
                        {tech}
                      </span>
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