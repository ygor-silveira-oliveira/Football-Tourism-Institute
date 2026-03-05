import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ConferencesPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBackToHome = () => {
    navigate("/");
    setTimeout(() => {
      const element = document.querySelector("h2");
      if (
        element &&
        element.textContent === "Rigorous research is our specialty"
      ) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };
  return (
    <>
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <button
              onClick={handleBackToHome}
              className="text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </header>
      <section className="py-20 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Conference Presentations
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Our research presentations at leading academic conferences,
              sharing insights on football tourism worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Presentation 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2025</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    "Get off your phone for 90 minutes": Commentaries about
                    tourists' technology consumption at Anfield Stadium
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Tobar, F. B., Thomas, J. & Ayres,
                    L.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> 16th International Sport and
                    Society Conference
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Monash University, Melbourne,
                    Australia
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> July 2nd-4th, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2024</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Uniting Histories: Football Heritage and Dialogue for Social
                    Inclusion
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Panelist:</strong> Tobar, F.B.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Panel:</strong> Football and Remembrance Culture
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Amsterdam, Netherlands
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> November 21-22, 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2024</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Simmel, Durkheim, and Douglas as 'football tourism pundits':
                    Commentaries about the online behavior of tourists at the
                    stands of football stadiums
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Thomas, J. & Tobar, F. B.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> 2024 Football Collective
                    Conference
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Newcastle, UK
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> November 21-22, 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2024</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    The Fans' Serious Political Mobilization to Confront the
                    Nazi's Difficult Heritage of FC St. Pauli (Germany):
                    Changing the club from bottom-up
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Tobar, F.B. & Fritz, F.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> 2024 TALS Conference
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> New Orleans, United States
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> January 31st-February 2nd, 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 5 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2024</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Exploring the Intersection of Identity and Motivation: Women
                    Sport Fans at the 2023 FIFA Women's World Cup
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Tobar, FB; Sato, M.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> North American Society for
                    Sport Management [NASSM]
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Minneapolis, Minnesota, United
                    States
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> May-June 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 6 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2024</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Evaluating visitors' experiences with sport facilities
                    operations: Expanding the Multidimensional Assessment Model
                    (MAM) stadium and museum tours
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Tobar, FB; Romano,
                    F.S.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> Applied Sport Management
                    Association [ASMA]
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Knoxville, Tennessee, United
                    States
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> February 13-17, 2024
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 7 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2019</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    The Global Football Tourism League: Analyzing the football
                    tourism phenomenon
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Tobar, F.B., Ramshaw, G. & Terry,
                    W.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> 2019 Football Collective
                    Conference
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Sheffield, UK
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> November 29-30, 2019
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 8 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2019</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    The football tourism trend: implications over management
                    issues regarding local football heritage
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Tobar, F. B. & Ramshaw, G.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> IV International Seminar of
                    Management and Policies for the Sport
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Federal University of Paraná,
                    Curitiba, Brazil
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> May 8-10, 2019
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 9 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2019</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Sport, Heritage and Fandom: Conceptualizing the Global
                    Touristic Football Clubs
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Tobar, F. B. & Ramshaw, G.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> 2019 Graduate Research and
                    Discovery Symposium (GRADS)
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Clemson University, Clemson,
                    United States
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> April 3-4, 2019
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 10 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2023</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Visitor satisfaction and experiences with sports facilities:
                    Consumers' online reviews on visiting FC Barcelona's stadium
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Zou, S; Sato, M;
                    Welty-Peachey
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> North American Society for
                    Sport Management [NASSM]
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Montreal, Canada
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> May-June 2023
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 11 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2022</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Football Tourism: a multidimensional evaluation of the
                    visiting experience in stadiums and museums of soccer
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Romano, F.S.; Tobar,
                    F.B.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> Brazilian Association of Sport
                    Management [ABRAGESP]
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Uberlândia, MG, Brazil
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> October 18-22, 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 12 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2022</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    The impacts of Camp Nou stadium's operations in Barcelona
                    (Catalunya, Spain): an analysis of the managerial operations
                    and its stakeholders
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Capraro, AM.;
                    Welty-Peachey, J.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> North American Society for
                    Sport Management [NASSM]
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Atlanta, GA, United States
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> June 2-4, 2022
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 13 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2019</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Football Tourism: mapping the production of knowledge in
                    journals with impact factor of Journal of Citation Reports
                    (JCR)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Cruz, EG; Capraro AM
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> 16th Seminar of National
                    Association of Research and Graduate Studies in Tourism
                    [ANPTUR]
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Curitiba, PR, Brazil
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> September 18-20, 2019
                  </p>
                </div>
              </div>
            </div>

            {/* Presentation 14 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2019</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    The tourist experience in a Football stadium: the tour in
                    Arena da Baixada of the Clube Athlético Paranaense
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Capraro, AM
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Conference:</strong> 1st Academic Week of Physical
                    Education at the Federal University of Paraná
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Location:</strong> Curitiba, PR, Brazil
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Date:</strong> October 21-25, 2019
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ConferencesPage;
