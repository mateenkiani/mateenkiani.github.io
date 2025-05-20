import { motion } from 'framer-motion';

const About = () => {
  const achievements = [
    { title: "Stack Overflow", description: "Top 4% with 600k+ people reached" },
    { title: "Fiverr", description: "Level 1 Seller" },
    { title: "GitHub", description: "30+ stars on public repositories" },
    { title: "Active Users", description: "300,000+ monthly users on side project" },
  ];

  const skills = [
    "React", "Node.js", "Express", "MongoDB", "TypeScript",
    "Next.js", "Redux", "Blockchain", "Web3", "Solidity",
    "Spring Boot", "Java", "REST APIs", "Git", "Docker"
  ];

  return (
    <section id="about" className="section-padding bg-tertiary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-textSecondary mb-6 text-lg leading-relaxed">
                I am a passionate Full Stack Developer with more than 3 years of experience in MERN stack 
                development and 1 year experience in blockchain application development. I have completed 
                several projects in MERN stack, Nextjs and blockchain, including some NFT marketplaces.
              </p>
              <p className="text-textSecondary mb-6 text-lg leading-relaxed">
                Currently working at Tekrowe as a Full Stack Developer, specializing in healthcare projects 
                using React, TypeScript, Node.js, and Spring Boot. I collaborate with cross-functional teams 
                to ensure seamless integration of design, functionality, and user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4 text-secondary">Achievements</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-primary/50 backdrop-blur-sm p-4 rounded-lg border border-secondary/20 
                             hover:border-secondary/40 transition-all duration-300 card-hover"
                  >
                    <h4 className="text-secondary font-semibold">{achievement.title}</h4>
                    <p className="text-textSecondary text-sm">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-secondary">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-primary/50 backdrop-blur-sm text-secondary rounded-full text-sm
                             border border-secondary/20 hover:border-secondary/40 transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 