import { Users, Award, Globe, Heart } from 'lucide-react';
import about from '../assets/about.png';
import team1 from '../assets/team-1.jpg';
import team2 from '../assets/team-2.jpg';
import team3 from '../assets/team-3.jpg';

const About = () => {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Shopiy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're passionate about bringing you the latest fashion trends at affordable prices. 
            Our mission is to make quality clothing accessible to everyone, everywhere.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2025, Shopiy started as a small family business with a simple vision: 
                to create an online shopping experience that combines quality, style, and affordability.
              </p>
              <p>
                What began as a passion project has grown into a trusted platform serving thousands 
                of customers worldwide. We carefully curate our collection to ensure every piece 
                meets our high standards for quality and style.
              </p>
              <p>
                Today, we continue to innovate and expand our offerings while staying true to our 
                core values of customer satisfaction, ethical business practices, and environmental responsibility.
              </p>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl h-96 flex items-center justify-center">
            <img src={about} className='w-full h-full object-cover rounded ' alt="about us" />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Quality First</h3>
              <p className="text-muted-foreground">
                We never compromise on quality. Every product is carefully selected and tested.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Customer Focused</h3>
              <p className="text-muted-foreground">
                Your satisfaction is our priority. We're here to help every step of the way.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Globe className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Sustainable</h3>
              <p className="text-muted-foreground">
                We're committed to environmentally responsible practices and ethical sourcing.
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously improve our platform and services to serve you better.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-primary-foreground/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-primary-foreground/80">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-primary-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Vishnu NV', role: 'CEO & Founder', image:team1 },
              { name: 'Sidharth NV', role: 'Head of Design', image: team2 },
              { name: 'Anagha Ev', role: 'Customer Success', image: team3 }
            ].map((member, index) => (
              <div key={index} className="bg-shop-card rounded-lg p-6 shadow-sm">
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;