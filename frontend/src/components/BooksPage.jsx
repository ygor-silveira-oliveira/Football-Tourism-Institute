import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BooksPage = () => {
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
              Books and Book Chapters
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Our published books and contributions to academic literature,
              advancing knowledge in sport tourism.
            </p>
          </div>

          {/* Featured Book */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Featured Book
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-lg p-8 border border-blue-100">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-semibold rounded-full">
                        2024
                      </span>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        Book
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Sport Tourism: Futbol Club Barcelona's structure as a
                      tourist attraction in the city of Barcelona
                    </h3>
                    <p className="text-gray-700 mb-4">
                      <strong>Authors:</strong> Oliveira, JR; Capraro, AM
                    </p>
                    <p className="text-gray-700 mb-4">
                      <strong>Publisher:</strong> Brasilia: Brazilian Ministry
                      of Sports
                    </p>
                    <p className="text-gray-600">
                      A comprehensive analysis of FC Barcelona's role as a major
                      tourist attraction in Barcelona, exploring the
                      intersection of sport and tourism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Chapters */}
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Book Chapters
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Chapter 1 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2023</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        Chapter
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Football Tourism: A Multidimensional Evaluation of the
                      Visiting Experience in Stadiums and Museums of Soccer
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Authors:</strong> Tobar, F. B., & Ramshaw, G.
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Book:</strong> Sport Tourism: New Challenges in a
                      Globalized World (pp. 123-145)
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Editors:</strong> A. M. Capraro, J. R. Oliveira, &
                      F. B. Tobar
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Publisher:</strong> EDUFPR, Curitiba, PR, Brazil
                    </p>
                  </div>
                </div>
              </div>

              {/* Chapter 2 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2021</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        Chapter
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Football tourism: a bibliometric analysis of published
                      works in the tourism-based journals (2003–2019)
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Authors:</strong> Oliveira, J; Tobar, F.B., &
                      Capraro, A.
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Book:</strong> Sport Tourism: New Challenges in a
                      Globalized World (pp. 123-145)
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Editors:</strong> A. M. Capraro, J. R. Oliveira, &
                      F. B. Tobar
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Publisher:</strong> EDUFPR, Curitiba, PR, Brazil
                    </p>
                  </div>
                </div>
              </div>

              {/* Chapter 3 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2021</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        Chapter
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      The impacts of Camp Nou stadium's operations in Barcelona
                      (Catalunya, Spain): an analysis of the managerial
                      operations and its stakeholders
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Authors:</strong> Oliveira, JR; Capraro, AM.;
                      Welty-Peachey, J.
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Book:</strong> Sport Tourism: New Challenges in a
                      Globalized World (pp. 123-145)
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Editors:</strong> A. M. Capraro, J. R. Oliveira, &
                      F. B. Tobar
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Publisher:</strong> EDUFPR, Curitiba, PR, Brazil
                    </p>
                  </div>
                </div>
              </div>

              {/* Chapter 4 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2021</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        Chapter
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      The tourist experience in a Football stadium: the tour in
                      Arena da Baixada of the Clube Athlético Paranaense
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Authors:</strong> Oliveira, JR; Capraro, AM.
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Book:</strong> Sport Tourism: New Challenges in a
                      Globalized World (pp. 123-145)
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Editors:</strong> A. M. Capraro, J. R. Oliveira, &
                      F. B. Tobar
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Publisher:</strong> EDUFPR, Curitiba, PR, Brazil
                    </p>
                  </div>
                </div>
              </div>

              {/* Chapter 5 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2021</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        Chapter
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      The implications of the COVID-19 pandemic on a sports
                      tourist attraction: A Case Study on Fútbol Club Barcelona
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Authors:</strong> Oliveira, JR; Capraro, AM.
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Book:</strong> Sport Tourism: New Challenges in a
                      Globalized World (pp. 123-145)
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Editors:</strong> A. M. Capraro, J. R. Oliveira, &
                      F. B. Tobar
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Publisher:</strong> EDUFPR, Curitiba, PR, Brazil
                    </p>
                  </div>
                </div>
              </div>

              {/* Chapter 6 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2021</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        Chapter
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Football Tourism: building and managing the Camp Nou
                      Experience as a tourist attraction
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Authors:</strong> Oliveira, JR; Capraro, AM.
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Book:</strong> Sport Tourism: New Challenges in a
                      Globalized World (pp. 123-145)
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Editors:</strong> A. M. Capraro, J. R. Oliveira, &
                      F. B. Tobar
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Publisher:</strong> EDUFPR, Curitiba, PR, Brazil
                    </p>
                  </div>
                </div>
              </div>

              {/* Chapter 7 */}
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 md:col-span-2 lg:col-span-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2021</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                        Chapter
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Football tourism in the city of Barcelona: The Camp Nou
                      Experience as a touristic attraction
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Authors:</strong> Oliveira, JR; Capraro, AM.
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Book:</strong> Sport Tourism: New Challenges in a
                      Globalized World (pp. 123-145)
                    </p>
                    <p className="text-sm text-gray-600 mb-3">
                      <strong>Editors:</strong> A. M. Capraro, J. R. Oliveira, &
                      F. B. Tobar
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Publisher:</strong> EDUFPR, Curitiba, PR, Brazil
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BooksPage;
