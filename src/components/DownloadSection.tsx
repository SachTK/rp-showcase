
import { Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const documents = [
  {
    title: "Research Paper",
    description: "Complete research paper on ML for vegetable price prediction",
    type: "PDF",
    size: "2.4 MB",
    date: "Apr 15, 2024",
    link: "#"
  },
  {
    title: "Dataset Documentation",
    description: "Documentation of data sources and preprocessing methods",
    type: "PDF",
    size: "1.8 MB",
    date: "Mar 22, 2024",
    link: "#"
  },
  {
    title: "Model Parameters",
    description: "Technical specifications of machine learning models used",
    type: "XLSX",
    size: "756 KB",
    date: "Feb 10, 2024",
    link: "#"
  },
  {
    title: "Presentation Slides",
    description: "Slides summarizing research findings and methodology",
    type: "PPTX",
    size: "5.2 MB",
    date: "Apr 02, 2024",
    link: "#"
  }
];

const DownloadSection = () => {
  const handleDownload = (title: string) => {
    toast.success(`Downloading ${title}`);
    // In a real application, this would be a proper download link
  };
  
  return (
    <section id="downloads" className="py-16">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-2">
          <Download size={28} className="text-research-green" />
          <h2 className="section-title">Downloadable Documents</h2>
        </div>
        <p className="section-subtitle">Access our research materials and resources</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{doc.title}</CardTitle>
                  <Badge variant="outline" className="bg-research-blue/10 text-research-blue">
                    {doc.type}
                  </Badge>
                </div>
                <CardDescription>{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Size: {doc.size}</span>
                  <span>Updated: {doc.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-research-blue hover:bg-research-darkBlue"
                  onClick={() => handleDownload(doc.title)}
                >
                  <Download size={16} className="mr-2" />
                  Download
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
