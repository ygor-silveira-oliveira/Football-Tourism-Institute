import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "./ui/card";

const AboutSection = () => {
  const carouselImages = [
    "/img/carousel/ajax.jpeg",
    "/img/carousel/benfica.jpeg",
    "/img/carousel/campNou.jpg",
    "/img/carousel/city.jpeg",
    "/img/carousel/gremio.jpg",
    "/img/carousel/internazionale.jpg",
    "/img/carousel/psg.jpeg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % carouselImages.length
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    const lastClickedPillar = localStorage.getItem("lastClickedPillar");
    if (lastClickedPillar) {
      const element = document.getElementById(lastClickedPillar);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      localStorage.removeItem("lastClickedPillar");
    }
  }, []);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % carouselImages.length
    );
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/*our mission - our vision*/}
        <div>
          <div id="ourMission" className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To advance research, consultancy, education, and innovation in
              football tourism worldwide, bridging sport, management, culture,
              and travel to create sustainable, impactful, and memorable
              experiences for fans, casual visitors, managers and
              decision-makers, local destinations, and the global football
              community.
            </p>
          </div>

          <div id="ourVision" className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              To be a leading global organization on football tourism,
              delivering practical and theoretical insights, awareness,
              strategies and partnerships that shape the future of football
              tourism through live matches, stadium and museum tours.
            </p>
          </div>
        </div>

        {/* Our Plan Section - redesigned and improved */}
        <div className="text-center mb-20">
          <div className="relative max-w-4xl mx-auto">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl transform rotate-1"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-3xl transform -rotate-1"></div>

            {/* Main content */}
            <div className="relative bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-4xl font-bold text-blue-900 mb-4">
                  What we do
                </h3>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Cada item agora tem margin-bottom para espaçamento vertical */}
                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">
                      Conduct and share research on football tourism trends,
                      managerial strategies, fan motivations, and its economic,
                      cultural, and social impacts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">
                      Offer consultancy for clubs, leagues, tourism boards, and
                      event organizers to build or improve football tourism
                      operations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">
                      Deliver workshops, lectures, and training on football
                      tourism best practices.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">
                      Foster collaborations between academics and industry
                      practitioners.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">5</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">
                      Produce resources and reports to guide strategic
                      decision-making
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">6</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">
                      Promote knowledge exchange through conferences, symposia,
                      and networking events.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">7</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">
                      Encourage global dialogue through publications, media
                      engagement, and partnerships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">8</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">
                      Seek funding and sponsorships to advance impactful
                      projects worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How we operate section - moved here */}
        <div className="relative mb-20">
          <div
            className="relative py-20 bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/carousel/ajax.jpeg')`,
            }}
          >
            <div className="relative z-10 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Where Football Meets Tourism
              </h2>
              <div className="relative flex justify-center items-center">
                {/* Previous Arrow */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                {/* Image */}
                <img
                  src={carouselImages[currentImageIndex]}
                  alt="Team collaboration"
                  className="w-130 h-96 object-cover rounded-lg shadow-xl"
                />

                {/* Next Arrow */}
                <button
                  onClick={goToNext}
                  className="absolute right-2 z-20 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300 hover:scale-110"
                  aria-label="Next image"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            At the Football Tourism Institute, we connect research, practice,
            and collaboration to advance the field of football tourism. We study
            fan motivations and the economic, cultural, and social impacts of
            the game, while also offering consultancy to clubs, leagues, tourism
            boards, and event organizers to develop sustainable strategies.
            <br />
            <br />
            Our team has visited more than 40 facilities, conducting stadium and
            museum tours across Brazil, Argentina, the United States, Spain,
            France, Germany, Italy, England, Scotland, Turkey, Hungary,
            Australia, the Netherlands, and Portugal. We deliver workshops,
            lectures, and training, foster academic–industry collaborations, and
            promote global dialogue through reports, events, and partnerships.
            To sustain and expand these initiatives, we actively pursue funding
            and sponsorships that drive impactful projects worldwide.
          </p>
        </div>

        <div className="text-center mb-16">
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              FTI PACKAGES
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our packages are tailored to the needs of every football tourism
              stakeholder. Regarding price ranges, please request a quote.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* FTI NETWORK ACCESS Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  FTI NETWORK ACCESS
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  Digital platform with pictures, videos, reports from 50+
                  visits worldwide, and assessment tools for stadium and museum
                  tours.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Premium subscribers receive an annual Q&A session with FTI
                    experts.
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Ideal for football clubs willing to innovate their stadium
                    tour and museum services by having an exclusive insight into
                    different approaches offered worldwide.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* FTI CONSULTANCY Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  FTI CONSULTANCY
                </h3>
                <div className="text-gray-600 mb-4">
                  <p className="mb-2">
                    <strong>Basic Consultancy:</strong> Diagnostic and
                    recommendation format over 1 topic. Includes kickoff
                    workshop, one virtual or site visit, and 10 page executive
                    summary.
                  </p>
                  <p className="mb-2">
                    <span className="text-yellow-600 font-semibold">
                      ★ Premium Consultancy:
                    </span>{" "}
                    Full strategic development covering 3 topics. Includes "FTI
                    Pre-Assessment Checklist Questionnaire", Stakeholder
                    interviews, Field Observations, and Comprehensive 25-page
                    plan. Granted follow-up session and one-year access to "FTI
                    Network Access".
                  </p>
                </div>
                <div className="text-sm text-gray-600">
                  <h4 className="font-semibold mb-2">
                    Topics to be selected by clients:
                  </h4>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span> Stadium
                      Tour
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span> Museum
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span> Hospitality
                      Experience
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span> Economic
                      Impact
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>{" "}
                      Sociocultural Impact
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>{" "}
                      Environmental Sustainability
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span> Tourism
                      Stakeholder Analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span> Tourism
                      Marketing Campaigns
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* FTI TOTAL OPERATIONS DESIGN Card */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  FTI TOTAL OPERATIONS DESIGN
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  An exclusive tailored package focused on the full design or
                  redesign of all football tourism operations.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Includes "FTI Premium Consultancy Plan" without topic
                    limitations.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    Monthly Q&A session with FTI experts throughout the
                    partnership.
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 mr-2">•</span>
                    One-year access to the 'FTI Network Access'.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Market research section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Rigorous research is our specialty
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            More than six years advancing knowledge in the field of football
            tourism
          </h3>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have published in multiples sport outlets, offering robust
            theoretical knowledge and practical managerial insights
          </p>
        </div>

        {/* Three pillars */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzU0OTYwNzU1fDA&ixlib=rb-4.1.0&q=85"
                    alt="Knowledge"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <Link
                  to="/pillars/journals"
                  onClick={() =>
                    localStorage.setItem("lastClickedPillar", "journals-pillar")
                  }
                >
                  <h4
                    id="journals-pillar"
                    className="text-xl font-semibold text-gray-900 mb-4 cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    Peer-reviewed journal articles
                  </h4>
                </Link>
                <p className="text-gray-600">
                  Our published research in leading academic journals, advancing
                  knowledge in football tourism.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzU0OTYwNzU1fDA&ixlib=rb-4.1.0&q=85"
                    alt="Brand Prestige"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <Link
                  to="/pillars/books"
                  onClick={() =>
                    localStorage.setItem("lastClickedPillar", "books-pillar")
                  }
                >
                  <h4
                    id="books-pillar"
                    className="text-xl font-semibold text-gray-900 mb-4 cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    Books and Book Chapters
                  </h4>
                </Link>
                <p className="text-gray-600">
                  Our published books and contributions to academic literature,
                  advancing knowledge in sport tourism.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzU0OTYwNzU1fDA&ixlib=rb-4.1.0&q=85"
                    alt="Protection"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <Link
                  to="/pillars/conferences"
                  onClick={() =>
                    localStorage.setItem(
                      "lastClickedPillar",
                      "conferences-pillar"
                    )
                  }
                >
                  <h4
                    id="conferences-pillar"
                    className="text-xl font-semibold text-gray-900 mb-4 cursor-pointer hover:text-blue-600 transition-colors"
                  >
                    ⁠Conference Presentations
                  </h4>
                </Link>
                <p className="text-gray-600">
                  Our research presentations at leading academic conferences,
                  sharing insights on football tourism worldwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
