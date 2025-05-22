import { Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import dasuni from "@/assets/dn.jpg";
import jeewaka from "@/assets/jp.jpeg";
import gihan from "@/assets/gihan.png";
import thilini from "@/assets/thilini.jpeg";
import lakshan from "@/assets/lakshan.jpeg";
import sachini from "@/assets/sachini.jpeg";
const teamMembers = [
  {
    name: "Prof. Dasuni Nawinna",
    role: "Supervisor",
    dept: "Faculty of Computing | Computer Systems Engineering",
    bio: "Sri Lanka Institute of Information Technology",
    image: dasuni,
    linkedin: "https://www.linkedin.com/in/dasuni-nawinna-48a4907/",
    email: "dasuni.n@sliit.lk",
  },
  {
    name: "Mr. Jeewaka Perera",
    role: "Co-Supervisor",
    bio: "Sri Lanka Institute of Information Technology",
    dept: "Faculty of Computing | Computer Science",
    image: jeewaka,
    linkedin: "https://www.linkedin.com/in/jeewakaperera/",
    email: "jeewaka.p@sliit.lk",
  },
  {
    name: "Gihan Kuruppu",
    role: "Group Leader",
    bio: "Sri Lanka Institute of Information Technology",
    dept: "Computer Science & Software Engineering",
    image: gihan,
    linkedin: "https://www.linkedin.com/in/gihan-sudeepa/",
    email: "gihansudeeparandimal@gmail.com",
  },
  {
    name: "Sachini Kandambige",
    role: "Group Member",
    bio: "Sri Lanka Institute of Information Technology",
    dept: "Computer Science & Software Engineering",
    image: sachini,
    linkedin: "https://www.linkedin.com/in/sachini-kandambige/",
    email: "sachinitkandambige29@gmail.com",
  },
  {
    name: "Thilini Perera",
    role: "Group Member",
    bio: "Sri Lanka Institute of Information Technology",
    dept: "Computer Science & Software Engineering",
    image: thilini,
    linkedin: "https://www.linkedin.com/in/thilini-perera-b280721b4/",
    email: "thperera2000@gmail.com",
  },
  {
    name: "Tharindu Lakshan",
    role: "Group Member",
    bio: "Sri Lanka Institute of Information Technology",
    dept: "Computer Science & Software Engineering",
    image: lakshan,
    linkedin: "https://www.linkedin.com/in/tharindu-lakshan-9551561ab/",
    email: "ntharindulakshancooray@gmail.com",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-white to-gray-50"
    >
      <div className="section-container">
        <div className="flex items-center gap-3 mb-2">
          <Users size={28} className="text-research-green" />
          <h2 className="section-title">About Us</h2>
        </div>
        <p className="section-subtitle">
          Meet our interdisciplinary research team
        </p>

        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="hover:shadow-md transition-shadow text-start"
              >
                <CardHeader className="pb-2">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-full w-full rounded-none">
                      <AvatarImage src={member.image} />
                      <AvatarFallback className="bg-research-blue/10 text-research-blue text-lg">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
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
                  <p className="text-research-gray text-sm">{member.dept}</p>
                </CardContent>
                <CardContent className="flex justify-between mt-4 ">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-research-blue hover:text-research-green transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    rel="noopener noreferrer"
                    className="text-research-blue hover:text-research-green transition-colors"
                  >
                    Email
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
