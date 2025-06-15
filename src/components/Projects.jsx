import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import bant from "../assets/projects/bant.png";
import aerotech from "../assets/projects/aerotech.png";
import kodak from "../assets/projects/kodak.png";
import lawfi from "../assets/projects/lawfi.png";
import ilara from "../assets/projects/ilara.png";

const Projects = () => {
  const projects = [
    {
      title: "Ilara Health",
      description:
        "Ilara Health provides accessible diagnostics to 500 million underserved individuals across Africa.\n\n• Built a comprehensive admin panel with multi-organization management, patient oversight, health trend dashboards, and urgent alerts.\n• Developed a centralized HMIS for hospitals and clinics, including modules for appointments, patient records, inventory/POS, billing, and multi-branch management.\n• Worked on Inventory micro service to maintain inventory of medicines and to provide backend API's for pharmacy application.",
      image: ilara,
      technologies: [
        "Java",
        "Spring Boot",
        "Adonis",
        "TypeScript",
        "Prisma",
        "React",
        "Node",
        "PostgreSQL",
        "GCP",
        "Keycloak",
      ],
      live: "https://ilarahealth.com",
    },
    {
      title: "LawFi",
      description:
        "A platform offering short-term instalment plans for financing attorney retainers and legal fees.\n\n• Developed and optimized the entire application as full stack engineer.\n• Developed the application using serverless backend architecture using AWS lambda function and frontend was designed using react.",
      image: lawfi,
      technologies: [
        "Node.js",
        "Serverless",
        "AWS Lambda",
        "React",
        "PostgreSQL",
        "S3",
        "CloudFront",
        "TypeScript",
      ],
      live: "https://lawfi.com",
    },
    {
      title: "Kodak Moments",
      description:
        "Started as a backend developer, later contributed to front-end development as well. Kodak Moments provides a self-service solution to print photos with the Kodak Picture Kiosk.",
      image: kodak,
      technologies: [
        "Node.js",
        "Docker",
        "Next.js",
        "TypeScript",
        "SignalR",
        "React",
      ],
      live: "https://www.kodakmoments.com/",
    },
    {
      title: "BANT Practitioner Search",
      description:
        "BANT Practitioner Search is a platform for finding BANT-registered nutritionists for personalized nutritional therapy consultations or non-clinical roles such as workshops, talks, writing, or industry/academic work. The platform enables users to:\n- Search and connect with over 2,500 evidence-based nutrition professionals.\n- Book one-to-one consultations for personalized nutrition and lifestyle medicine advice.\n- Find professionals for non-clinical roles, including workshops, talks, and writing.\n- Access information about BANT's evidence-based guidelines and resources.\n\nAs a full stack developer, I contributed to:\n- Building robust search and filtering features for practitioners.\n- Implementing secure user authentication and member profile management.\n- Integrating content and resources about nutrition science and wellbeing.\n- Ensuring a seamless, responsive user experience across devices.",
      image: bant,
      technologies: ["React", "Node.js", "PostgreSQL", "Next.js", "Cloudflare"],
      live: "https://practitioner-search.bant.org.uk/",
    },
    {
      title: "Aerotech FMS Pvt Ltd",
      description:
        "Aerotech FMS, an India-based trip support company, manages worldwide logistics for private, commercial, cargo, and VIP flights.\n\n• Collaborated with stakeholders to gather requirements and ensure successful project execution.\n• Managed end-to-end software development, from architecture design to deployment.\n• Lead junior developers to translate requirements to the product.\n• Optimized system performance and scalability, ensuring seamless operations for global flight logistics.",
      image: aerotech,
      technologies: ["React", "NestJS", "PostgreSQL", "AWS EC2", "AWS RDS"],
    },
  ];

  return (
    <section
      id="projects"
      className="section-padding bg-tertiary relative overflow-hidden"
    >
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
                  <div
                    className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300 flex items-center justify-center gap-4"
                  >
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
