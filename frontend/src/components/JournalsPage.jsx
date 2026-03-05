import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JournalsPage = () => {
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
              Peer-reviewed Journal Articles
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Our published research in leading academic journals, advancing
              knowledge in football tourism.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Article 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2024</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Never Again! Fandom and the Culture of Remembrance in German
                    Football
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Tobar, F. B., Ramshaw, G., &
                    Fritz, F.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Journal:</strong> Leisure Sciences, 1–21
                  </p>
                  <a
                    href="https://doi.org/10.1080/01490400.2024.2388261"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    View Article
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2024</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Conceptualising the Global Touristic Football Club
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Tobar, F.B., Ramshaw, G. &
                    Oliveira, J.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Journal:</strong> Sport in Society
                  </p>
                  <a
                    href="https://doi.org/10.1080/17430437.2024.2306900"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    View Article
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Article 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2022</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Welcome to the EPL: Analyzing the development of football
                    tourism in the English Premier League
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Tobar, F.B., & Ramshaw, G.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Journal:</strong> Soccer and Society
                  </p>
                  <a
                    href="https://doi.org/10.1080/14660970.2022.2059871"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    View Article
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Article 4 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2021</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Football tourism: a bibliometric analysis of published works
                    in the tourism-based journals (2003–2019)
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, J; Tobar, F.B., &
                    Capraro, A.
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Journal:</strong> Journal of Sport & Tourism, 1-19
                  </p>
                  <span className="inline-flex items-center text-gray-500 font-medium text-sm">
                    Article Link Unavailable
                  </span>
                </div>
              </div>
            </div>

            {/* Article 5 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2021</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Football tourism in the city of Barcelona: The Camp Nou
                    Experience as a touristic attraction
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Uvinha, RR;
                    Silveira, CE; Capraro, AM
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Journal:</strong> Revista de Gestão e Negócios do
                    Esporte, 9(1)
                  </p>
                  <a
                    href="https://rgne.org.br/index.php/home/article/view/160"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    View Article
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Article 6 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2021</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    "Football Tourism": building and managing the Camp Nou
                    Experience as a tourist attraction
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Uvinha, RR;
                    Silveira, CE; Capraro, AM
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Journal:</strong> PODIUM Sport, Leisure and Tourism
                    Review, 13(2), 221–249
                  </p>
                  <a
                    href="https://doi.org/10.5585/podium.v13i2.23069"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    View Article
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Article 7 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 md:col-span-2 lg:col-span-1">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2020</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    The implications of the COVID-19 pandemic on a sports
                    tourist attraction: A Case Study on Fútbol Club Barcelona
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Authors:</strong> Oliveira, JR; Capraro AM
                  </p>
                  <p className="text-sm text-gray-600 mb-3">
                    <strong>Journal:</strong> Iberoamerican Journal of Tourism,
                    10(2), 165-186
                  </p>
                  <a
                    href="https://doi.org/10.2436/20.8070.01.184"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
                  >
                    View Article
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JournalsPage;
