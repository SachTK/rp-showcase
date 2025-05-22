
import { Calendar } from 'lucide-react';
import { Card } from "@/components/ui/card";

const timelineData = [
  {
    date: 'January 2023',
    title: 'Research Initiation',
    description: 'Project proposal and initial literature review completed.'
  },
  {
    date: 'March 2023',
    title: 'Data Collection',
    description: 'Gathered historical vegetable price data and identified relevant market factors.'
  },
  {
    date: 'May 2023',
    title: 'Model Development',
    description: 'Designed and implemented various machine learning models for price prediction.'
  },
  {
    date: 'August 2023',
    title: 'Initial Testing',
    description: 'Conducted preliminary testing and validation of prediction models.'
  },
  {
    date: 'October 2023',
    title: 'Model Refinement',
    description: 'Refined models based on test results and incorporated additional features.'
  },
  {
    date: 'December 2023',
    title: 'Final Validation',
    description: 'Completed comprehensive model validation and prepared final documentation.'
  },
  {
    date: 'February 2024',
    title: 'Deployment',
    description: 'Deployed prediction system and began real-world application testing.'
  }
];

const TimelineSection = () => {
  return (
    <section id="timeline" className="bg-gray-50 py-16">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-2">
          <Calendar size={28} className="text-research-green" />
          <h2 className="section-title">Project Timeline</h2>
        </div>
        <p className="section-subtitle">Key milestones in our research journey</p>
        
        <div className="relative mt-12">
          {/* Timeline line */}
          <div className="absolute h-full w-1 bg-research-green/20 left-0 md:left-1/2 transform md:-translate-x-1/2"></div>
          
          {/* Timeline events */}
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-research-green border-4 border-white"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-8 md:ml-0' : 'md:pl-12 ml-8 md:ml-auto'}`}>
                  <Card className="p-5 hover:shadow-lg transition-shadow">
                    <h3 className="font-bold text-lg text-research-darkBlue">{item.title}</h3>
                    <p className="text-sm text-research-green font-medium mb-2">{item.date}</p>
                    <p className="text-research-gray">{item.description}</p>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
