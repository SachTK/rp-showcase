import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white via-green-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Smart Agricultural Platform For Sri Lankan Farmers
            </h1>
            <div className="text-lg md:text-xl text-research-gray mb-8 max-w-xl">
              <ul className="list-disc list-inside">
                <li>Vegetable Price Prediction and Market Analysis</li>
                <li>System friendly AI Chatbot</li>
                <li>Blockchain based Supply Chain Management</li>
                <li>Adaptive User Interface</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  document
                    .getElementById("problems")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                size="lg"
                className="bg-research-green hover:bg-research-lightGreen text-white"
              >
                Research Problems
              </Button>
              <Button
                onClick={() =>
                  document
                    .getElementById("downloads")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                size="lg"
                className="border-research-blue text-research-blue hover:bg-research-blue hover:text-white"
              >
                Download Research Paper
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-research-green/10 rounded-full"></div>
              <div className="relative z-10 bg-white p-6 rounded-lg shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                  alt="Vegetable Market Data Analysis"
                  className="w-full h-auto rounded-md"
                />
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-md">
                    <h4 className="font-bold text-research-darkBlue">96%</h4>
                    <p className="text-sm text-research-gray">
                      Prediction Accuracy
                    </p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-md">
                    <h4 className="font-bold text-research-green">10+</h4>
                    <p className="text-sm text-research-gray">
                      ML Models Tested
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-research-blue/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
