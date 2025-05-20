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
    <section id="about" className="section-padding bg-tertiary">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-textSecondary mb-6">
                I am a passionate Full Stack Developer with more than 3 years of experience in MERN stack 
                development and 1 year experience in blockchain application development. I have completed 
                several projects in MERN stack, Nextjs and blockchain, including some NFT marketplaces.
              </p>
              <p className="text-textSecondary mb-6">
                Currently working at Tekrowe as a Full Stack Developer, specializing in healthcare projects 
                using React, TypeScript, Node.js, and Spring Boot. I collaborate with cross-functional teams 
                to ensure seamless integration of design, functionality, and user experience.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Achievements</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="bg-primary p-4 rounded-lg">
                    <h4 className="text-secondary font-semibold">{achievement.title}</h4>
                    <p className="text-textSecondary text-sm">{achievement.description}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 