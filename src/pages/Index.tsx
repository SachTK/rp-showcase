import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ResearchSection from '@/components/ResearchSection';
import TimelineSection from '@/components/TimelineSection';
import DownloadSection from '@/components/DownloadSection';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <HeroSection />
      
      <ResearchSection 
        id="literature"
        title="Literature Review"
        subtitle="Exploring existing research and approaches"
        icon="book-open"
        className="bg-white"
        content={
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-research-darkBlue">Previous ML Approaches</h3>
                <p>
                  Existing literature shows that various machine learning techniques have been applied to agricultural price prediction. Time series models like ARIMA have been traditionally employed, while more recent studies explore neural networks. Wang et al. (2022) achieved 87% accuracy using LSTM networks for tomato price predictions, while Kumar & Singh (2021) utilized ensemble methods combining Random Forest and XGBoost for onion price forecasting with 82% accuracy.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-research-darkBlue">Market Factors</h3>
                <p>
                  Research by Patel & Gupta (2023) identified key market factors affecting vegetable prices including seasonal variations, weather patterns, transportation costs, and international market trends. Their study highlighted the importance of incorporating multi-dimensional data sources to improve prediction accuracy. Our research builds on these findings by integrating additional factors such as social media sentiment analysis and regional economic indicators.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-research-darkBlue">Research Gaps</h3>
                <p>
                  Despite significant progress, most existing studies focus on limited geographical regions or specific vegetables. Comprehensive models that can adapt across diverse agricultural environments remain underdeveloped. Additionally, few studies have successfully integrated real-time data streams with historical patterns, presenting an opportunity for innovation in predictive analytics for vegetable pricing.
                </p>
              </CardContent>
            </Card>
          </div>
        }
      />
      
      <ResearchSection 
        id="problems"
        title="Research Problems"
        subtitle="Key challenges we're addressing"
        icon="lightbulb"
        className="bg-gray-50"
        content={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M16 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path><path d="M11 13v3a1 1 0 0 0 1 1h3"></path></svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Market Volatility</h3>
                <p className="text-research-gray">
                  Extreme price fluctuations in vegetable markets make it difficult for farmers to plan crops and manage finances effectively.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500"><path d="m20 6-8-4-8 4 8 4 8-4Z"></path><path d="M18 10 20 9v8"></path><path d="M4 14v-4l8 4 4-1.5"></path><path d="M12 22v-4"></path><path d="M12 14v-4"></path></svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Prediction Complexity</h3>
                <p className="text-research-gray">
                  Multiple interconnected factors affect vegetable prices, creating complex patterns that traditional forecasting methods cannot adequately capture.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M21 6H3"></path><path d="M10 12H3"></path><path d="M10 18H3"></path><path d="m16 12 5 3-5 3v-6Z"></path></svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Data Integration</h3>
                <p className="text-research-gray">
                  Combining diverse data sources such as weather patterns, market supply chains, and consumer trends into cohesive prediction models.
                </p>
              </CardContent>
            </Card>
          </div>
        }
      />
      
      <ResearchSection 
        id="gaps"
        title="Research Gaps"
        subtitle="Areas where current research falls short"
        icon="search"
        className="bg-white"
        content={
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-bold mb-3 text-research-darkBlue">Technical Gaps</h3>
                <ul className="space-y-4 list-disc pl-5">
                  <li>
                    <span className="font-medium">Limited Model Adaptability:</span> Current models struggle to adapt across different vegetable types and regional markets.
                  </li>
                  <li>
                    <span className="font-medium">Temporal Granularity:</span> Most models provide monthly or weekly predictions, lacking the daily price forecasts needed by market participants.
                  </li>
                  <li>
                    <span className="font-medium">Feature Integration:</span> Insufficient integration of social media trends, news sentiment, and global market dynamics into prediction models.
                  </li>
                  <li>
                    <span className="font-medium">Real-time Processing:</span> Few systems can process streaming data to update predictions as new information becomes available.
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-bold mb-3 text-research-darkBlue">Practical Gaps</h3>
                <ul className="space-y-4 list-disc pl-5">
                  <li>
                    <span className="font-medium">Accessibility:</span> Limited development of user-friendly tools that make predictions accessible to farmers and small-scale distributors.
                  </li>
                  <li>
                    <span className="font-medium">Localization:</span> Insufficient focus on adapting models to local market conditions and regional agricultural practices.
                  </li>
                  <li>
                    <span className="font-medium">Implementation Guidance:</span> Lack of practical frameworks for stakeholders to implement prediction insights into business decision-making.
                  </li>
                  <li>
                    <span className="font-medium">Model Interpretability:</span> Advanced ML models often function as "black boxes," limiting trust and adoption among agricultural stakeholders.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        }
      />
      
      <ResearchSection 
        id="objectives"
        title="Research Objectives"
        subtitle="What we aim to accomplish"
        icon="target"
        className="bg-gray-50"
        content={
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-research-darkBlue text-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Primary Objective</h3>
                  <p className="text-gray-200">
                    To develop a comprehensive machine learning framework capable of predicting vegetable prices with at least 95% accuracy across multiple market conditions, providing actionable insights for agricultural stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-green">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Model Development</h4>
                  <p className="text-sm text-research-gray">Create advanced ML models that integrate multiple data sources for improved prediction accuracy.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-blue">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Factor Analysis</h4>
                  <p className="text-sm text-research-gray">Identify and quantify the key factors influencing vegetable price fluctuations in various markets.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-green">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Tool Development</h4>
                  <p className="text-sm text-research-gray">Design accessible prediction tools for farmers, distributors, and policymakers.</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-blue">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Market Impact</h4>
                  <p className="text-sm text-research-gray">Evaluate how price predictions can stabilize agricultural markets and benefit the supply chain.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        }
      />
      
      <ResearchSection 
        id="methodologies"
        title="Research Methodology"
        subtitle="Our approach to solving the problem"
        icon="settings"
        className="bg-white"
        content={
          <Tabs defaultValue="data" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="data">Data Collection</TabsTrigger>
              <TabsTrigger value="preprocessing">Data Preprocessing</TabsTrigger>
              <TabsTrigger value="models">Model Development</TabsTrigger>
              <TabsTrigger value="validation">Validation</TabsTrigger>
            </TabsList>
            <TabsContent value="data" className="p-4 border rounded-md mt-2 bg-gray-50">
              <h3 className="font-bold text-lg mb-3">Data Collection Methodology</h3>
              <ul className="space-y-2 list-disc pl-5">
                <li>Historical price data from 15 major vegetable markets spanning 5 years</li>
                <li>Weather data including temperature, rainfall, and humidity from meteorological departments</li>
                <li>Supply chain metrics including transportation costs and fuel prices</li>
                <li>Seasonal production outputs from agricultural ministries</li>
                <li>Social media sentiment analysis regarding market trends and consumer preferences</li>
                <li>Economic indicators such as inflation rates and consumer price indices</li>
              </ul>
            </TabsContent>
            <TabsContent value="preprocessing" className="p-4 border rounded-md mt-2 bg-gray-50">
              <h3 className="font-bold text-lg mb-3">Data Preprocessing Pipeline</h3>
              <ol className="space-y-2 list-decimal pl-5">
                <li><span className="font-medium">Data Cleaning:</span> Removing outliers and handling missing values using statistical methods</li>
                <li><span className="font-medium">Feature Engineering:</span> Creating derived features from raw data, such as price momentum and seasonal indices</li>
                <li><span className="font-medium">Normalization:</span> Standardizing features to ensure algorithm convergence</li>
                <li><span className="font-medium">Temporal Alignment:</span> Synchronizing data from different sources based on timestamp</li>
                <li><span className="font-medium">Dimensionality Reduction:</span> Using PCA to identify key input variables</li>
                <li><span className="font-medium">Data Augmentation:</span> Generating synthetic data for rare market conditions</li>
              </ol>
            </TabsContent>
            <TabsContent value="models" className="p-4 border rounded-md mt-2 bg-gray-50">
              <h3 className="font-bold text-lg mb-3">Model Development Approach</h3>
              <p className="mb-4">We employed a multi-model approach to capture different aspects of price dynamics:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-research-blue">Time Series Models</h4>
                  <ul className="pl-5 list-disc text-sm">
                    <li>LSTM Networks for sequence prediction</li>
                    <li>Prophet for handling seasonal patterns</li>
                    <li>ARIMA variants for baseline comparison</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-research-blue">Ensemble Methods</h4>
                  <ul className="pl-5 list-disc text-sm">
                    <li>Gradient Boosting Machines</li>
                    <li>Random Forest Regressor</li>
                    <li>Stacked ensemble of specialized models</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-research-blue">Deep Learning</h4>
                  <ul className="pl-5 list-disc text-sm">
                    <li>Transformer models for multi-variate analysis</li>
                    <li>Convolutional Neural Networks for pattern recognition</li>
                    <li>Attention mechanisms for feature importance</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded shadow-sm">
                  <h4 className="font-medium text-research-blue">Hybrid Approaches</h4>
                  <ul className="pl-5 list-disc text-sm">
                    <li>Combining statistical models with deep learning</li>
                    <li>Market-specific model selection framework</li>
                    <li>Multi-task learning for related vegetables</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="validation" className="p-4 border rounded-md mt-2 bg-gray-50">
              <h3 className="font-bold text-lg mb-3">Validation and Evaluation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-research-darkBlue">Validation Approach</h4>
                  <ul className="pl-5 list-disc">
                    <li>Time-based cross-validation to simulate real-world prediction scenarios</li>
                    <li>Out-of-sample testing on most recent market data</li>
                    <li>Market-specific validation to ensure generalizability</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-research-darkBlue">Evaluation Metrics</h4>
                  <ul className="pl-5 list-disc">
                    <li>Mean Absolute Percentage Error (MAPE) for accuracy measurement</li>
                    <li>Root Mean Squared Error (RMSE) for error magnitude</li>
                    <li>Direction Accuracy to assess trend prediction capability</li>
                    <li>Economic impact metrics to measure practical benefits</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-research-darkBlue">Expert Validation</h4>
                  <p>Model outputs are reviewed by a panel of agricultural economists and market experts to ensure practical relevance.</p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        }
      />
      
      <ResearchSection 
        id="tools"
        title="Research Tools"
        subtitle="Technologies and frameworks powering our research"
        icon="wrench"
        className="bg-gray-50"
        content={
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" className="h-16" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Python</h3>
                <p className="text-research-gray text-center">
                  Primary programming language for data processing and model development with extensive library support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png" alt="Scikit-Learn" className="h-16" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Scikit-Learn</h3>
                <p className="text-research-gray text-center">
                  Machine learning library for traditional algorithms and preprocessing techniques.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1915px-Tensorflow_logo.svg.png" alt="TensorFlow" className="h-16" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">TensorFlow</h3>
                <p className="text-research-gray text-center">
                  Deep learning framework for building advanced neural network models.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Matplotlib_icon.svg/1200px-Matplotlib_icon.svg.png" alt="Matplotlib" className="h-16" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Matplotlib & Seaborn</h3>
                <p className="text-research-gray text-center">
                  Data visualization libraries for creating insightful plots and diagrams.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/2560px-Pandas_logo.svg.png" alt="Pandas" className="h-16" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Pandas</h3>
                <p className="text-research-gray text-center">
                  Data manipulation library for cleaning, transforming, and analyzing datasets.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="mb-4 flex justify-center">
                  <img src="https://www.gstatic.com/devrel-devsite/prod/v2f6fb26758063dcd0759cd6bc21d0462f84919d0bb11d95742e537c40f75bd89/cloud/images/favicons/onecloud/apple-icon.png" alt="Google Cloud" className="h-16" />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Cloud Computing</h3>
                <p className="text-research-gray text-center">
                  Cloud platforms for scalable computation, data storage, and model deployment.
                </p>
              </CardContent>
            </Card>
          </div>
        }
      />
      
      <TimelineSection />
      
      <DownloadSection />
      
      <AboutSection />
      
      <Footer />
    </div>
  );
};

export default Index;
