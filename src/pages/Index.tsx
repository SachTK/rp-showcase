import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResearchSection from "@/components/ResearchSection";
import TimelineSection from "@/components/TimelineSection";
import DownloadSection from "@/components/DownloadSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PresentationDownloadSection from "@/components/DownloadSection2";
import ContactUsSection from "@/components/ContactUsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />

      <HeroSection />

      <ResearchSection
        id="literature"
        title="Literature Survey"
        subtitle="Exploring existing research and approaches"
        icon="book-open"
        className="bg-white"
        content={
          <div className=" flex space-x-5 ">
            <div className="w-1/2 space-y-3">
              <p className="text-justify">
                To predict tomato prices, Amarender Gopal has put out a price
                forecasting technique [1]. This article takes seasonality and
                supply and demand into account. One training approach that has
                been employed is the Seasonal Autoregressive Integrated Moving
                Average (SARIMA) algorithm. This study shows that seasonality, a
                lack of cold storage, and refrigerated transportation facilities
                all contributed to significant price variations for tomatoes.
              </p>
              <p className="text-justify">
                An other paper describes the theory and building methods for
                predicting the price of vegetables using the BP neural network
                model, the RBF neural network model, the neural network model
                based on genetic algorithms, and an integrated prediction model
                based on the three models mentioned above. According to this
                study, the BP neural network model is the least accurate
                predictor. Compared to the genetic algorithm neural network
                model, the RBF neural network model was more accurate. The
                integrated prediction model’s results are most significant [2]
              </p>
              <p className="text-justify">
                The focus is on machine learning methods that use the support
                vector regression algorithm to forecast crop prices. Finding
                patterns in their training dataset, which is provided as one of
                the algorithm’s inputs, determines the crop’s price. The user
                provides the algorithm with the input values for the parameters
                (yield, rainfall, minimum support price, and wholesale price
                index). [3]
              </p>
              <p className="text-justify">
                Moreover, the integration of gamification has emerged as a
                powerful strategy to enhance user engagement across various
                sectors, including agriculture. By incorporating game elements
                such as points, badges, and leaderboards, gamification can
                motivate farmers to actively participate in data logging and
                other digital platforms. This increased participation can
                significantly improve the quality and quantity of data available
                for price prediction models, leading to more accurate and
                reliable forecasts [4][6]. However, many existing platforms tend
                to focus on either gamification or price prediction in
                isolation, without integrating the two into a comprehensive
                solution that addresses both effective data collection and
                accurate market forecasting [5][7]. Bridging this gap could lead
                to more innovative and user-friendly systems that not only
                predict prices but also engage farmers in meaningful ways,
                thereby providing better outcomes for the agricultural
                community.
              </p>
              <p className="text-justify">
                The significance of geriatrics in technology is covered in this
                paper. It talks about how important it is for elderly persons to
                be independent and how we need to make sure they can utilize
                technology just as effectively as other users. Since we observe
                a decline in cognitive capacity, something must be different for
                them. The clinical component of elderly persons’interactions
                with technology is the primary area of focus.
              </p>
            </div>

            <div className="w-1/2 space-y-3">
              <p className="text-justify">
                To sum up, effective technology development necessitates intense
                interdisciplinary collaboration to incorporate technologies into
                the current social service and health systems to accommodate
                older individuals’ daily needs.[8]
              </p>
              <p className="text-justify">
                The significance of technology and the internet for senior
                citizens is emphasized in the paper [4], along with the
                necessity of closing the technological interaction gap between
                geriatric age groups. According to the Romanian study,
                customized interventions may help close the digital divide among
                senior citizens. It concludes that, despite challenges brought
                on by cognitive decline, people between the ages of 60 and 75
                are using and understanding technology the best.[9]
              </p>
              <p className="text-justify">
                The demand for digital services and prompt UI-UX solutions is
                rising as online commerce keeps growing. The problem of handling
                the growing number of internet users worldwide is one that both
                agencies and internal teams must deal with. Since the COVID-19
                pandemic, the e-commerce industry has grown at an unparalleled
                rate. Using the User- Centered Design (UCD) methodology, this
                article focuses on a three-tiered user flow during the
                prototyping stage (launch screen, account creation, and home
                screen). The sample prototype’s test results show a high degree
                of user satisfaction, with the main menu page and overall UI/UX
                scoring the highest.[10]
              </p>

              <div>
                <h2 className="text-xl font-semibold mt-4">References</h2>
                <div>
                  <ul className="space-y-[4px] text-justify list-none text-[11px]">
                    <li>
                      [1] R. and A. A., “Price Forecasting of Tomatoes,”{" "}
                      <i>International Journal of Vegetable Science</i>, vol.
                      25, no. 2, pp. 176–184, 2019.
                    </li>
                    <li>
                      [2] L. C., W. J., S. L., Z. Q., Z. and S., “Prediction of
                      vegetable price based on neural network and genetic
                      algorithm,”{" "}
                      <i>
                        IFIP Advances in Information and Communication
                        Technology
                      </i>
                      , vol. 346 AICT, no. PART 3, pp. 672–681, 2011.
                    </li>
                    <li>
                      [3] R. Rohith, R. Vishnu, A. Kishore, and D.
                      Chakkarawarthi, “Crop Price Prediction and Forecasting
                      System using Supervised Machine Learning Algorithms,”{" "}
                      <i>
                        International Journal of Advanced Research in Computer
                        and Communication Engineering (IJARCCE)
                      </i>
                      , vol. 9, Mar. 2020, doi: 10.17148/IJARCCE.2020.9306.
                    </li>
                    <li>
                      [4] A. Kankanhalli, M. Taher, H. Cavusoglu, and S. H. Kim,
                      “Gamification: A new paradigm for online user engagement,”
                      in <i>Proc. 33rd Int. Conf. Inf. Syst. (ICIS)</i>,
                      Orlando, FL, USA, Dec. 2012, pp. 1–10.
                    </li>
                    <li>
                      [5] K.-W. Huang, M. P. Singh, and P. J. Teo, “Quantifying
                      the impact of badges on user engagement in online Q&amp;A
                      communities,” <i>Inf. Syst. Res.</i>, vol. 23, no. 3, pp.
                      613–625, 2012.
                    </li>
                    <li>
                      [6] K. Werbach and D. Hunter,{" "}
                      <i>
                        For the Win: How Game Thinking Can Revolutionize Your
                        Business
                      </i>
                      . Philadelphia, PA, USA: Wharton Digital Press, 2012.
                    </li>
                    <li>
                      [7] B. S. Frey and R. Jegen, “Motivation crowding theory:
                      A survey of empirical evidence,” <i>J. Econ. Surv.</i>,
                      vol. 15, no. 5, pp. 589–611, 2001.
                    </li>
                    <li>
                      [8] A. Pilotto, R. Boi, and J. Petermans, “Technology in
                      geriatrics,” <i>Age and Ageing</i>, vol. 47, pp. 771–774,
                      Mar. 2018.
                    </li>
                    <li>
                      [9] A. M. Herghelegiu, G. I. Prada, and R. M. Nacu,
                      “Computer and internet literacy in older age,” in{" "}
                      <i>2015 E-Health and Bioengineering Conference (EHB)</i>,
                      pp. 1–4, 2015.
                    </li>
                    <li>
                      [10] G. Goel, P. Tanwar, and S. Sharma, “UI-UX design
                      using user centred design (UCD) method,” in{" "}
                      <i>
                        2022 International Conference on Computer Communication
                        and Informatics (ICCCI)
                      </i>
                      , pp. 1–8, 2022.
                    </li>
                    <li>
                      [11] CropLook (online):{" "}
                      <a
                        href="https://doa.gov.lk/"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://doa.gov.lk/
                      </a>
                    </li>
                    <li>
                      [12] AgryProve (online):{" "}
                      <a
                        href="https://agriprove.io/"
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://agriprove.io/
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
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
                <h3 className="text-xl font-bold mb-3 text-research-darkBlue">
                  Technical Gaps
                </h3>
                <ul className="space-y-4 list-disc pl-5">
                  <li>
                    <span className="font-medium">Lack of Integration:</span>{" "}
                    Existing systems often isolate features such as price
                    prediction, gamification, or blockchain security without
                    unifying them into a cohesive platform.
                  </li>
                  <li>
                    <span className="font-medium">
                      Limited Real-time Capabilities:
                    </span>{" "}
                    Few platforms support real-time data processing and
                    prediction updates, especially in rural agricultural
                    settings with inconsistent connectivity.
                  </li>
                  <li>
                    <span className="font-medium">
                      Context-Aware AI Deficiency:
                    </span>{" "}
                    Current AI chatbot systems lack multilingual support and
                    contextual understanding tailored to local agricultural
                    practices.
                  </li>
                  <li>
                    <span className="font-medium">
                      Smart Contract Specialization:
                    </span>{" "}
                    Blockchain implementations often do not support
                    domain-specific contracts tailored for regulated seed
                    transactions and data protection compliance.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow h-full">
              <CardContent className="p-6 h-full">
                <h3 className="text-xl font-bold mb-3 text-research-darkBlue">
                  Practical Gaps
                </h3>
                <ul className="space-y-4 list-disc pl-5">
                  <li>
                    <span className="font-medium">User Accessibility:</span>{" "}
                    Most agricultural platforms neglect elderly and low-literacy
                    farmers, lacking adaptive interfaces and local language
                    support.
                  </li>
                  <li>
                    <span className="font-medium">
                      Data Contribution Incentives:
                    </span>{" "}
                    There is minimal use of gamification or rewards to motivate
                    farmer engagement and improve data quality.
                  </li>
                  <li>
                    <span className="font-medium">Regulatory Compliance:</span>{" "}
                    Few systems account for region-specific regulations such as
                    Sri Lanka's Personal Data Protection Act in their data
                    handling and blockchain strategies.
                  </li>
                  <li>
                    <span className="font-medium">
                      Localization and Inclusivity:
                    </span>{" "}
                    Agricultural advisory systems often lack features that
                    support regional dialects, cultural norms, and offline
                    usability needed in Sri Lankan rural settings.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        }
      />

      <ResearchSection
        id="problems"
        title="Research Problem & Solution"
        subtitle="Key challenges we're addressing"
        icon="lightbulb"
        className="bg-gray-50"
        content={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-500"
                    >
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                      <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                      <path d="M10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path d="M16 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path d="M11 13v3a1 1 0 0 0 1 1h3"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    Low Data Contribution & Engagement
                  </h3>
                  <p className="text-research-gray">
                    Farmers are not motivated to share cultivation data, leading
                    to poor data quality and unreliable predictions. Existing
                    systems lack gamified incentive mechanisms that reward
                    participation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-500"
                    >
                      <path d="m20 6-8-4-8 4 8 4 8-4Z"></path>
                      <path d="M18 10 20 9v8"></path>
                      <path d="M4 14v-4l8 4 4-1.5"></path>
                      <path d="M12 22v-4"></path>
                      <path d="M12 14v-4"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    Poor Digital Accessibility
                  </h3>
                  <p className="text-research-gray">
                    Elderly and rural farmers struggle to use existing platforms
                    due to non-adaptive interfaces that ignore age, literacy,
                    device type, and environmental context.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-500"
                    >
                      <path d="M21 6H3"></path>
                      <path d="M10 12H3"></path>
                      <path d="M10 18H3"></path>
                      <path d="m16 12 5 3-5 3v-6Z"></path>
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg mb-2">
                    Lack of Trust & Transparency
                  </h3>
                  <p className="text-research-gray">
                    Farmers often distrust platforms due to opaque processes.
                    Existing systems do not offer secure, traceable records for
                    seed transactions or data integrity, especially in
                    compliance with local laws.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-research-darkBlue">
                Proposed Solution
              </h3>
              <p className="text-research-gray text-justify">
                This research proposes a unified digital platform that
                integrates machine learning, blockchain, adaptive interfaces,
                and an AI-powered chatbot to address these challenges. A
                gamified reward system encourages farmers to contribute data
                consistently, which improves model accuracy for price
                predictions. The adaptive user interface ensures accessibility
                for elderly and low-literacy users by adjusting layouts, font
                sizes, and interaction modes in real time. Trust and
                transparency are achieved through blockchain-backed seed
                transaction records, ensuring data integrity and compliance with
                Sri Lanka's data protection laws. Finally, a multilingual
                RAG-based AI chatbot bridges the information gap by providing
                localized, real-time agricultural support, enhancing informed
                decision-making at the grassroots level.
              </p>
            </div>
          </>
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
              <Card className="bg-research-green text-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Primary Objective</h3>
                  <p className="text-gray-200">
                    To develop an integrated digital platform that enhances
                    agricultural decision-making in Sri Lanka by combining
                    machine learning-based vegetable price prediction,
                    blockchain-secured seed transactions, adaptive user
                    interfaces, and an AI-powered chatbot to support inclusive
                    and data-driven farming practices.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-green">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Smart Reward System</h4>
                  <p className="text-sm text-research-gray">
                    Enable farmers to log cultivation data and earn points,
                    encouraging consistent data sharing and improving model
                    performance.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-blue">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Price Prediction</h4>
                  <p className="text-sm text-research-gray">
                    Provide accurate, timely vegetable price forecasts based on
                    real-time environmental and market data.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-green">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Local Networking</h4>
                  <p className="text-sm text-research-gray">
                    Help farmers discover what others are planting nearby to
                    avoid market saturation and improve planning.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-blue">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Adaptive UI</h4>
                  <p className="text-sm text-research-gray">
                    Deliver personalized, senior-friendly interfaces that adjust
                    based on user preferences, behavior, and device conditions.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-green">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">AI Chatbot Support</h4>
                  <p className="text-sm text-research-gray">
                    Provide 24/7 multilingual assistance to farmers through a
                    RAG-based AI chatbot for crop advice and platform
                    navigation.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-md transition-shadow border-l-4 border-research-blue">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">Blockchain Security</h4>
                  <p className="text-sm text-research-gray">
                    Securely record seed transactions on a permissioned
                    blockchain, ensuring traceability and data integrity under
                    local laws.
                  </p>
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
          <>
            <div className=" flex space-x-5 pb-[50px]">
              <div className="w-1/2 space-y-3">
                <img
                  src="src\assets\system-overview.jpg"
                  alt="system diagram"
                  className="h6"
                />
                <p className="text-[12px] text-gray-400 text-center">
                  Fig 1: System Overview
                </p>
              </div>
              <div className="w-1/2 space-y-3 text-justify">
                <p>
                  The system initiates with the registration of farmers by a
                  designated farmer advisor during the annual farming meeting.
                  Each registered farmer is issued a unique QR code, which
                  becomes their digital identity within the platform. When
                  purchasing vegetable seeds, farmers scan this QR code at the
                  point of sale with seed sellers. This scanning process
                  automatically records critical transaction details, including
                  the type and quantity of seeds purchased along with the
                  buyer’s identity. This real-time tracking not only helps
                  monitor seed distribution but also ensures transparency and
                  traceability across the supply chain.
                </p>
                <p>
                  As farmers begin cultivating their crops, they are encouraged
                  to enter additional information into the system, such as seed
                  type, quantity used, and the geographical location of their
                  farmland. To motivate consistent data entry, the platform
                  incorporates a reward system where farmers earn points for
                  each contribution. These points can be redeemed for valuable
                  insights, such as real-time updates on what neighboring
                  farmers are planting, enabling better planning and reducing
                  the risk of overproduction. Additionally, as part of the
                  incentive mechanism, the system provides vegetable price
                  forecasts, which empower farmers to make more informed
                  decisions about crop selection and harvest timing
                </p>
                <p>
                  All seed-related transactions are securely recorded on a
                  blockchain ledger, ensuring data integrity and security.
                  Stakeholders such as analysts and policy planners can access
                  aggregated data through interactive dashboards featuring
                  dynamic graphs, charts, and trend visualizations. To enhance
                  decision-making support, the platform includes an AI-powered
                  chatbot that delivers personalized insights based on collected
                  data. Most importantly, the system is designed with the farmer
                  in mind—featuring adaptive user interfaces that adjust to
                  individual user preferences, abilities, and environmental
                  context. This ensures a user-friendly experience, even for
                  senior or less tech-savvy farmers, making the system inclusive
                  and accessible to a wide range of users.
                </p>
              </div>
            </div>
            <Tabs defaultValue="ml" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="ml">Reward System & ML</TabsTrigger>
                <TabsTrigger value="ui">Adaptive UI</TabsTrigger>
                <TabsTrigger value="chatbot">AI Chatbot</TabsTrigger>
                <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
              </TabsList>

              <TabsContent
                value="ml"
                className="p-4 border rounded-md mt-2 bg-gray-50"
              >
                <h3 className="font-bold text-lg mb-3">
                  Smart Reward System & ML Price Prediction
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Farmers earn points for submitting cultivation data like
                    crop type, seed source, and planting date.
                  </li>
                  <li>
                    Reward points can be redeemed for valuable insights (e.g.,
                    price predictions, seed demand).
                  </li>
                  <li>
                    Machine learning models used: Random Forest, Gradient
                    Boosting, Extra Trees.
                  </li>
                  <li>
                    Features used: historical prices, seasonality, weather,
                    geolocation, market demand, and real-time farmer inputs.
                  </li>
                  <li>
                    Model improvement via active learning and retraining with
                    incoming farmer data.
                  </li>
                </ul>
              </TabsContent>

              <TabsContent
                value="ui"
                className="p-4 border rounded-md mt-2 bg-gray-50"
              >
                <h3 className="font-bold text-lg mb-3">
                  Adaptive User Interface Methodology
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Uses a rule engine that adapts the interface in real time
                    based on user characteristics and behavior.
                  </li>
                  <li>
                    Context-aware features include adjusting for screen size,
                    low vision, senior age group, and mobile usage.
                  </li>
                  <li>
                    Backend tracks interaction data and continuously refines
                    interface elements using feedback analysis (NLP-driven).
                  </li>
                  <li>
                    Includes voice navigation, Sinhala language support, and
                    simplified layouts for elderly users.
                  </li>
                </ul>
              </TabsContent>

              <TabsContent
                value="chatbot"
                className="p-4 border rounded-md mt-2 bg-gray-50"
              >
                <h3 className="font-bold text-lg mb-3">
                  RAG-Based AI Chatbot Architecture
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Combines LangChain + Pinecone for real-time knowledge
                    retrieval from a custom agricultural database.
                  </li>
                  <li>
                    Supports Sinhala-to-English translation using both Google
                    Translate and a fine-tuned mT5 model.
                  </li>
                  <li>
                    Handles both crop recommendation queries (using ML models)
                    and general knowledge questions (via vector search).
                  </li>
                  <li>
                    Query classification via SpaCy determines routing to either
                    retrieval system or ML-based recommendation engine.
                  </li>
                  <li>
                    Deployed as a microservice using Flask for scalable chatbot
                    interactions.
                  </li>
                </ul>
              </TabsContent>

              <TabsContent
                value="blockchain"
                className="p-4 border rounded-md mt-2 bg-gray-50"
              >
                <h3 className="font-bold text-lg mb-3">
                  Blockchain Implementation Methodology
                </h3>
                <ul className="space-y-2 list-disc pl-5">
                  <li>
                    Built on Hyperledger Fabric with a permissioned network and
                    smart contracts.
                  </li>
                  <li>
                    Tracks seed transactions securely—each scan of a QR code
                    logs seed type, farmer ID, and location.
                  </li>
                  <li>
                    Smart contracts enforce compliance, validate transactions,
                    and log seed transfer history.
                  </li>
                  <li>
                    Data protection ensured using role-based access control
                    (RBAC) and encryption under Sri Lanka's Data Protection Act.
                  </li>
                  <li>
                    Blockchain REST APIs provide transaction status, seed
                    history, and node verification for regulatory use.
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </>
        }
      />

      <ResearchSection
        id="tools"
        title="Technologies Used"
        subtitle="Technologies and frameworks powering our research"
        icon="wrench"
        className="bg-gray-50"
        content={
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Python */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-2">
                  <img
                    src="src/assets/python.png"
                    alt="Python"
                    className="h-12 w-12"
                  />
                </div>
                <h3 className="text-sm font-semibold text-center">Python</h3>
              </CardContent>
            </Card>

            {/* React Native */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://reactnative.dev/img/header_logo.svg"
                    alt="React Native"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  React Native
                </h3>
              </CardContent>
            </Card>

            {/* Node.js */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="src\assets\node.jpeg"
                    alt="Node.js"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Node.js</h3>
              </CardContent>
            </Card>

            {/* Azure */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
                    alt="Azure"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  Microsoft Azure
                </h3>
              </CardContent>
            </Card>

            {/* LangChain */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="src\assets\langchain.jpeg"
                    alt="LangChain"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  LangChain
                </h3>
              </CardContent>
            </Card>

            {/* Postman */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    alt="Postman"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Postman</h3>
              </CardContent>
            </Card>

            {/* Git */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                    alt="Git"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Git</h3>
              </CardContent>
            </Card>

            {/* Visual Studio Code */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg"
                    alt="VS Code"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  Visual Studio Code
                </h3>
              </CardContent>
            </Card>

            {/* Figma */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
                    alt="Figma"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Figma</h3>
              </CardContent>
            </Card>

            {/* ClickUp */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="src\assets\clickup.jpeg"
                    alt="ClickUp"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">ClickUp</h3>
              </CardContent>
            </Card>

            {/* ClickUp */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="src\assets\tensorflow.png"
                    alt="ClickUp"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  Tensorflow
                </h3>
              </CardContent>
            </Card>

            {/* ClickUp */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="src\assets\googlemap.png"
                    alt="ClickUp"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  Google Map API
                </h3>
              </CardContent>
            </Card>

            {/* ClickUp */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="src\assets\postgres.png"
                    alt="ClickUp"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  PostgresSQL
                </h3>
              </CardContent>
            </Card>

            {/* ClickUp */}
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="src\assets\argo.png"
                    alt="ClickUp"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Argo CD</h3>
              </CardContent>
            </Card>
            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="src\assets\doker.png"
                    alt="ClickUp"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">Docker</h3>
              </CardContent>
            </Card>

            <Card className="w-40 h-40 rounded-full flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow">
              <CardContent className="p-4 flex flex-col items-center justify-center">
                <div className="mb-4 flex justify-center">
                  <img
                    src="src\assets\blockchain.png"
                    alt="ClickUp"
                    className="h-16"
                  />
                </div>
                <h3 className="text-lg font-bold text-center mb-2">
                  Hyperledger
                </h3>
              </CardContent>
            </Card>
          </div>
        }
      />

      <TimelineSection />

      <DownloadSection />
      <PresentationDownloadSection />

      <AboutSection />

      <ContactUsSection />

      <Footer />
    </div>
  );
};

export default Index;
