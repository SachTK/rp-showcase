import { Download } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const documents = [
  {
    title: "Project Proposal",
    type: "PPTX",
    date: "Apr 15, 2024",
    link: "https://docs.google.com/presentation/d/1nRSubPk_CAtbKzR_EIcuM7U8sZSH1R0w/edit?usp=drive_link&ouid=104171797698287476585&rtpof=true&sd=true",
  },
  {
    title: "Progress Presentation I",
    type: "PPTX",
    date: "Mar 22, 2024",
    link: "https://drive.google.com/drive/folders/1h5Vk7qa2_wbRDkBpdlQtodSd0eBtp-YN",
  },
  {
    title: "Progress Presentation II",
    type: "PPTX",
    date: "Feb 10, 2024",
    link: "https://drive.google.com/drive/folders/1JgCJPV7fzJybQB_p4irnVm5L3WzEg5fS",
  },
  {
    title: "Final Presentation",
    type: "PPTX",
    date: "Apr 02, 2024",
    link: "https://drive.google.com/drive/folders/1eDlx9k_5mppAJlHnkad553TY2NrQvR02",
  },
];

const PresentationDownloadSection = () => {

  return (
    <section id="downloads" className="">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-2">
          <Download size={28} className="text-research-green" />
          <h2 className="section-title"> Presentations</h2>
        </div>
        <p className="section-subtitle">
         Please find all presentations related this project below.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {documents.map((doc, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{doc.title}</CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-research-blue/10 text-research-blue"
                  >
                    {doc.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Submitted on: {doc.date}</span>
                </div>
              </CardContent>
              <CardFooter>
                <div className="w-full">
                  <div className="flex flex-row justify-between w-full ">
                    <span>

                    Group
                    </span>
                    <a href={doc.link} target="_blank"  className="hover:text-research-blue text-research-green hover:underline">
                      Download
                    </a>
                  </div>
              
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationDownloadSection;
