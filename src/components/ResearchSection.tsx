import React from 'react';
import { BookOpen, Lightbulb, Search, Target, Settings, Wrench } from 'lucide-react';

interface ResearchSectionProps {
  id: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
  icon?: 'book-open' | 'lightbulb' | 'search' | 'target' | 'settings' | 'wrench';
  className?: string;
}

const iconComponents = {
  'book-open': BookOpen,
  'lightbulb': Lightbulb,
  'search': Search,
  'target': Target,
  'settings': Settings,
  'wrench': Wrench
};

const ResearchSection: React.FC<ResearchSectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  content, 
  icon, 
  className = ""
}) => {
  const IconComponent = icon ? iconComponents[icon] : null;

  return (
    <section id={id} className={`py-16 ${className}`}>
      <div className="section-container">
        <div className="flex items-center gap-3 mb-2">
          {IconComponent && (
            <IconComponent 
              size={28} 
              className="text-research-green" 
            />
          )}
          <h2 className="section-title">{title}</h2>
        </div>
        <p className="section-subtitle">{subtitle}</p>
        <div className="mt-8">
          {content}
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
