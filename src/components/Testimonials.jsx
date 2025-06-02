import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Triplenmusic",
      country: "United Kingdom",
      rating: 4.7,
      timeAgo: "10 months ago",
      price: "US$600-US$800",
      duration: "4 weeks",
      comment: "Paid a good price and got what I needed"
    },
    {
      name: "flor7387",
      country: "United States",
      rating: 5,
      timeAgo: "2 years ago",
      comment: "This is my third order. Great experience, communication, and overall customer service. I highly recommend."
    },
    {
      name: "muhammadumai883",
      country: "United Arab Emirates",
      rating: 5,
      timeAgo: "2 years ago",
      comment: "It was complex typescript job which required development and deployment both, this guy did both with end to end solution. once you explain the requirements he translate and get the job completed. I will hire him again."
    },
    {
      name: "jenindra",
      country: "India",
      rating: 5,
      timeAgo: "2 years ago",
      comment: "great experience thanks again for responsive communication..."
    },
    {
      name: "jenindra",
      country: "India",
      rating: 5,
      timeAgo: "2 years ago",
      comment: "very much talented developer i see thank you for. good job"
    },
    {
      name: "omar63497",
      country: "United Kingdom",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "Provided a really quick and professional service"
    },
    {
      name: "flor7387",
      country: "United States",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "Great service. This is my second time working with him. Did an excellent job on my request. Clear communication and timely completion. Highly recommend."
    },
    {
      name: "byainvb",
      country: "Israel",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "easy and the communication was good!"
    },
    {
      name: "flor7387",
      country: "United States",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "Great service. He asked a lot of questions to understand the project well. Completed the project within time frame and went above and beyond with my request. I recommend his service."
    },
    {
      name: "dbaker54",
      country: "United States",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "AWESOME job"
    },
    {
      name: "realmohaaa",
      country: "Hungary",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "Great help"
    },
    {
      name: "raf808",
      country: "United States",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "Did exactly what I asked for. Helped when I needed it and even provided revisions."
    },
    {
      name: "alexhassan620",
      country: "United States",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "Mateen was great to work with, good communication and great product execution."
    },
    {
      name: "hubofdesigners",
      country: "Pakistan",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "Mateen Exceeds my expectations. surely gonna comeback for more. Thanks Mate"
    },
    {
      name: "maniaclaughter",
      country: "India",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "He is very cooperative and hardworking. I will for sure work with him again"
    },
    {
      name: "nancydison2",
      country: "United States",
      rating: 5,
      timeAgo: "3 years ago",
      comment: "This Seller is AMAZING!!! Was very helpful and very efficient. I slowed down the process due to my busy schedule and he assisted me as best he could and was very understanding I will be definitely do more business with him in the future."
    }
  ];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title gradient-text">Client Testimonials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-tertiary/80 backdrop-blur-md p-6 rounded-lg shadow-xl hover:shadow-2xl 
                         transition-all duration-300 card-hover relative overflow-hidden
                         before:absolute before:inset-0 before:bg-gradient-to-r before:from-secondary/10 
                         before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity
                         hover:bg-tertiary/90 hover:-translate-y-1 bg-white/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center
                                shadow-[0_0_15px_rgba(0,0,0,0.1)] hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] 
                                transition-all duration-300 border border-black/20">
                    <span className="text-xl font-semibold text-secondary">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-secondary">{testimonial.name}</h3>
                    <p className="text-sm text-textSecondary">{testimonial.country}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(testimonial.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-sm text-textSecondary ml-2">{testimonial.timeAgo}</span>
                </div>
                
                <p className="text-textSecondary mb-4">{testimonial.comment}</p>
                
                {testimonial.price && (
                  <div className="flex justify-between text-sm text-textSecondary">
                    <span>{testimonial.price}</span>
                    <span>{testimonial.duration}</span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 