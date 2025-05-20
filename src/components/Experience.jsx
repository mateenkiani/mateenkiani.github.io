import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: "Tekrowe Digital",
      position: "Full Stack Developer",
      period: "Oct 2022 - Present",
      location: "Islamabad, Pakistan",
      description: [
        "Specializing in healthcare projects using React, TypeScript, Node.js, and Spring Boot",
        "Collaborating with cross-functional teams for seamless integration",
        "Contributing to agile development methodologies and code reviews",
        "Implementing high-quality standards in development processes"
      ],
      skills: ["Java", "Spring Boot", "React", "TypeScript", "Node.js"]
    },
    {
      company: "Reactive Space",
      position: "Software Engineer",
      period: "Dec 2021 - Oct 2022",
      location: "Rawalpindi, Pakistan",
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
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary p-6 rounded-lg"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-secondary">{exp.position}</h3>
                    <p className="text-textPrimary">{exp.company}</p>
                  </div>
                  <div className="text-textSecondary mt-2 md:mt-0">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-textSecondary mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i} className="mb-2">{item}</li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                    >
                      {skill}
                    </span>
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