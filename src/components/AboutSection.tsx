
import { Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Dr. Priya Sharma",
    role: "Principal Investigator",
    bio: "Expert in machine learning applications in agricultural economics with over 10 years of research experience.",
    image: ""
  },
  {
    name: "Raj Kumar",
    role: "Data Scientist",
    bio: "Specializes in predictive modeling and time-series analysis for agricultural data.",
    image: ""
  },
  {
    name: "Anita Patel",
    role: "Agricultural Economist",
    bio: "Focuses on market dynamics and economic factors affecting vegetable prices in regional markets.",
    image: ""
  },
  {
    name: "Dr. Michael Lee",
    role: "ML Engineer",
    bio: "Designs and implements custom machine learning algorithms for complex prediction scenarios.",
    image: ""
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-2">
          <Users size={28} className="text-research-green" />
          <h2 className="section-title">About Us</h2>
        </div>
        <p className="section-subtitle">Meet our interdisciplinary research team</p>
        
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow text-center">
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={member.image} />
                      <AvatarFallback className="bg-research-blue/10 text-research-blue text-lg">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-research-green font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-research-gray text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold text-research-darkBlue mb-4">Our Mission</h3>
            <p className="max-w-3xl mx-auto text-research-gray">
              Our research team is dedicated to bridging the gap between machine learning technology 
              and agricultural economics. By developing innovative predictive models for vegetable prices, 
              we aim to empower farmers, distributors, and policymakers with data-driven insights 
              that promote market stability and sustainable agricultural practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
