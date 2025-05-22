import { Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const timelineData = [
  {
    date: " Mar 2024",
    title: "Brainstorming Workshop",
    description:
      "Initial session for idea generation and forming project themes among students.",
  },
  {
    date: "Apr 2024",
    title: "Group Registration",
    description:
      "Formal registration of project groups with supervisor allocation.",
  },
  {
    date: "May 2024",
    title: "Topic Assessment Form (TAF)",
    description:
      "Submission of the project topic for review and initial feedback.",
  },
  {
    date: "Aug 2024",
    title: "Proposal Report (Draft)",
    description:
      "First draft of the project proposal submitted for preliminary evaluation.",
  },
  {
    date: "July 2024",
    title: "Proposal Presentation",
    description:
      "Group presentation of the proposed solution and research plan.",
  },
  {
    date: "Aug 2024",
    title: "Proposal Report (Final)",
    description: "Final version of the project proposal submitted for marking.",
  },
  {
    date: " Dec 2024",
    title: "Progress Presentation I",
    description:
      "Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
  },
  {
    date: "Dec 2024",
    title: "Checklist I -Git repository ",
    description:
      "Verification of compliance and milestone completion through checklist submission.",
  },
  {
    date: "Mar 2025",
    title: "Research Paper",
    description:
      "Submission of the academic research paper based on project findings and methodologies.",
  },
  {
    date: "Apr 2025",
    title: "Final Report",
    description:
      "Final Report evaluates the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
  },
  {
    date: "Mar 2025",
    title: "Progress Presentation II",
    description:
      "Progress Presentation II reviews the 90% completion status demonstration of the project. Along with a Poster presentation which describes the project as a whole.",
  },
  {
    date: " Mar 2025",
    title: "Checklist II - UI/UX Demo Video",
    description:
      "Final checklist confirming delivery of required project artifacts and milestones.",
  },
  {
    date: "May 2025",
    title: "Final Presentation & VIVA",
    description:
      "Viva is held individually to assess each members contribution to the project.",
  },
  {
    date: "Jun 2025",
    title: "Project Website",
    description:
      "The Website helps to promote our research project and reveals all details related to the project.",
  },
  {
    date: "Jun 2025",
    title: "Research Logbook",
    description:
      "Submission of the detailed logbook documenting project progress and individual contributions.",
  },
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="bg-gray-50 py-16">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Calendar size={28} className="text-research-green" />
          <h2 className="section-title">Project Timeline</h2>
        </div>
        <p className="section-subtitle">
          Key milestones in our research journey
        </p>

        <div className="relative mt-12">
          {/* Animated SVG Line */}
          <motion.svg
            className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full"
            width="4"
            height="100%"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <motion.line
              x1="2"
              y1="0"
              x2="2"
              y2="100%"
              stroke="rgba(34,197,94,0.2)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </motion.svg>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Animated Dot */}
                <motion.div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-research-green border-4 border-white z-10"
                  animate={{ scale: [1, 1.4, 1] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />

                {/* Card Content */}
                <div
                  className={`md:w-1/2 ${
                    index % 2 === 0
                      ? "md:pr-12 ml-8 md:ml-0"
                      : "md:pl-12 ml-8 md:ml-auto"
                  }`}
                >
                  <Card className="p-5 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-lg text-research-darkBlue">
                      {item.title}
                    </h3>
                    <p className="text-sm text-research-green font-medium mb-2">
                      {item.date}
                    </p>
                    <p className="text-research-gray">{item.description}</p>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
