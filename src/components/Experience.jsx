import { motion } from 'framer-motion';
import tekroweLogo from '../assets/tekrowe_logo.jpeg';
import reactiveLogo from '../assets/reactivespace_logo.jpeg';
import netliftLogo from '../assets/netlift_net_logo.jpeg';

const Experience = () => {
  const experiences = [
    {
      company: "Tekrowe Digital",
      position: "Full Stack Developer",
      period: "Oct 2022 - Present",
      location: "Islamabad, Pakistan",
      logo: tekroweLogo,
      description: [
        "Specializing in healthcare projects using React, TypeScript, Node.js, and Spring Boot",
        "Collaborating with cross-functional teams for seamless integration",
        "Contributing to agile development methodologies and code reviews",
        "Implementing high-quality standards in development processes"
      ],
      skills: ["Java", "Spring Boot", "docker", "AWS", "Kubernetes", "React", "TypeScript", "Node.js"]
    },
    {
      company: "Reactive Space",
      position: "Software Engineer",
      period: "Dec 2021 - Oct 2022",
      location: "Rawalpindi, Pakistan",
      logo: reactiveLogo,
      description: [
        "Built and maintained full-stack web applications using Next.js, Node.js, React, and MongoDB",
        "Designed and implemented robust data models using Mongoose",
        "Developed custom API middlewares and authentication workflows",
        "Integrated RESTful APIs with React frontend components",
        "Managed state effectively within React applications"
      ],
      skills: ["Next.js", "Node.js", "React", "MongoDB", "Mongoose"]
    },
    {
      company: "Netlift Technologies",
      position: "Full Stack Developer",
      period: "Mar 2021 - Dec 2021",
      location: "Islamabad, Pakistan",
      logo: netliftLogo,
      description: [
        "Worked on Shopify applications using Node.js and Next.js",
        "Integrated Google Drive API for file management",
        "Developed mongoose models, API routes, and handlers",
        "Implemented file permission management and download functionality"
      ],
      skills: ["Node.js", "Next.js", "Shopify", "Google Drive API", "MongoDB"]
    }
  ];

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary/80 backdrop-blur-md p-6 rounded-lg shadow-xl hover:shadow-2xl 
                         transition-all duration-300 card-hover relative overflow-hidden
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-secondary/10 
                         before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity
                         hover:bg-tertiary/90 hover:-translate-y-1 bg-white/20"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-white backdrop-blur-sm p-2 flex items-center justify-center
                                  shadow-lg hover:shadow-xl transition-all duration-300">
                      <img 
                        src={exp.logo} 
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-secondary">{exp.position}</h3>
                      <p className="text-textPrimary">{exp.company}</p>
                    </div>
                  </div>
                  <div className="text-textSecondary mt-2 md:mt-0">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-textSecondary mb-4 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-base">{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary/70 backdrop-blur-md text-secondary rounded-full text-sm
                               shadow-lg hover:shadow-xl hover:bg-primary/80 transition-all duration-300"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 