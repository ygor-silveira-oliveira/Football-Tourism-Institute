import React, { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';

const AboutSection = () => {
  const carouselImages = [
    '/img/carousel/ajax.jpeg',
    '/img/carousel/benfica.jpeg',
    '/img/carousel/campNou.jpg',
    '/img/carousel/city.jpeg',
    '/img/carousel/gremio.jpg',
    '/img/carousel/internazionale.jpg',
    '/img/carousel/psg.jpeg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/*our mission - our vision*/}
        <div>
          <div
            id='ourMission'
            className="text-center mb-16"
          >
              <h3  className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">To advance research, consultancy, education, and innovation in football tourism worldwide, bridging sport, management, culture, and travel to create sustainable, impactful, and memorable experiences for fans, casual visitors, managers and decision-makers, local destinations, and the global football community.</p>
          </div>

          <div
            id='ourVision'
            className="text-center mb-16"
          >
              <h3  className="text-4xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">To be a leading global organization on football tourism, delivering practical and theoretical insights, awareness, strategies and partnerships that shape the future of football tourism through live matches, stadium and museum tours.</p>
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
                <h3 className="text-4xl font-bold text-blue-900 mb-4">What we do</h3>
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
                    <p className="text-gray-600">Conduct and share research on football tourism trends, managerial strategies, fan motivations, and its economic, cultural, and social impacts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">Offer consultancy for clubs, leagues, tourism boards, and event organizers to build or improve football tourism operations.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">Deliver workshops, lectures, and training on football tourism best practices.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">Foster collaborations between academics and industry practitioners.</p>
                  </div>
                </div>

              <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">5</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">Produce resources and reports to guide strategic decision-making</p>
                  </div>
                </div>

              <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">6</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">Promote knowledge exchange through conferences, symposia, and networking events.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">7</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">Encourage global dialogue through publications, media engagement, and partnerships.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold">8</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-600">Seek funding and sponsorships to advance impactful projects worldwide.</p>
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
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/img/carousel/ajax.jpeg')`
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
            At the Football Tourism Institute, we connect research, practice, and collaboration to advance the field of football tourism. We study fan motivations and the economic, cultural, and social impacts of the game, while also offering consultancy to clubs, leagues, tourism boards, and event organizers to develop sustainable strategies. 
            <br /><br />
            Our team has visited more than 40 facilities, conducting stadium and museum tours across Brazil, Argentina, the United States, Spain, France, Germany, Italy, England, Scotland, Turkey, Hungary, Australia, the Netherlands, and Portugal. We deliver workshops, lectures, and training, foster academic–industry collaborations, and promote global dialogue through reports, events, and partnerships. To sustain and expand these initiatives, we actively pursue funding and sponsorships that drive impactful projects worldwide.
          </p>
        </div>

        {/* Market research section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Rigorous research is our specialty
          </h2>
          
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            More than six years advancing knowledge in the field of football tourism
          </h3>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We have published in multiples sport outlets, offering robust theoretical knowledge and practical managerial insights
          </p>
        </div>

        {/* Three pillars */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwzfHxidXNpbmVzcyUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzU0OTYwNzU1fDA&ixlib=rb-4.1.0&q=85" 
                    alt="Knowledge" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Peer-reviewed journal articles
                </h4>
                <p className="text-gray-600 mb-8">
                  Tobar, F. B., Ramshaw, G., & Fritz, F. (2024). Never Again! Fandom and the Culture of Remembrance in German Football. Leisure Sciences, 1–21. https://doi.org/10.1080/01490400.2024.<br></br>2388261
                </p>

                <p className="text-gray-600 mb-8">
                  Tobar, F.B., Ramshaw, G. & Oliveira, J. (2024): Conceptualising the Global Touristic Football Club, Sport in Society, DOI: 10.1080/17430437.2024.2306900
                </p>

                <p className="text-gray-600 mb-8">
                  Tobar, F.B., & Ramshaw, G. (2022). Welcome to the EPL: Analyzing the development of football tourism in the English Premier League. Soccer and Society. DOI: 10.1080/14660970.2022.2059871
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, J; Tobar, F.B., & Capraro, A. (2021). Football tourism: a bibliometric analysis of published works in the tourism-based journals (2003–2019). Journal of Sport & Tourism, 1-19.
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Uvinha, RR; Silveira, CE; Capraro, AM. Football tourism in the city of Barcelona: The Camp Nou Experience as a touristic attraction. Revista de Gestão e Negócios do Esporte, 9(1).https://rgne.org.br/index.php/home/<br></br>article/view/160.
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Uvinha, RR; Silveira, CE; Capraro, AM. “Football Tourism”: building and managing the Camp Nou Experience as a tourist attraction.  PODIUM Sport, Leisure and Tourism Review, 13(2), 221–249. DOI: https://doi.org/10.5585/podium.v13i2.23069
                </p>

                <p className="text-gray-600">
                  Oliveira, JR; Capraro AM. (2020). The implications of the COVID-19 pandemic on a sports tourist attraction: A Case Study on Fútbol Club Barcelona. Iberoamerican Journal of Tourism, 10(2), 165-186. DOI: https://doi.org/10.2436/20.8070.01.184 
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzU0OTYwNzU1fDA&ixlib=rb-4.1.0&q=85" 
                    alt="Brand Prestige" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Books and Book Chapters
                </h4>
                <p className="text-gray-300 mb-4 text-left italic">
                  Books
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Capraro, AM. (2024). Sport Tourism: Futbol Club Barcelona's structure as a tourist attraction in the city of Barcelona. Brasilia: Brazilian Ministry of Sports.
                </p>

                <p className="text-gray-300 mb-4 text-left italic">
                  Book Chapters
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, J. & Tobar, F.B. (2025). Unpacking Motivation: Factors Influencing Women’s Travel to the 2023 FIFA Women’s World Cup in Australia and New Zealand. In Beissel, A.; Julie E. Brice, Verity Postlethwaite, Andrew Grainger. The Routledge Handbook of The 2023 FIFA Women’s World Cup: Events, Issues, and Controversies.
                </p>

                <p className="text-gray-600 mb-8">
                  Tobar, F.B. (2024) Experiencing Anfield Stadium Tour. In Gammon, S. (2024). The Sport Tourist. Emerald Publishing: West Yorkshire, UK. (in press).
                </p>

                <p className="text-gray-600">
                  Tobar, F.B., & De Moraes, G.C (2021). Virtual stadium tours and museums? Has the time arrived for football clubs? In Correia, A; R. Biscaia & Pedragosa, V. (Eds.), Crónicas COVID-19: Gestão do Desporto em Tempos de Crise [COVID-19 Chronicles: Sport Management in Times of Crisis]. Lisbon: Universidade Autónoma de Lisboa (pp. 86-88).
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzU0OTYwNzU1fDA&ixlib=rb-4.1.0&q=85" 
                    alt="Protection" 
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  ⁠Conference Presentations
                </h4>
                <p className="text-gray-600 mb-8">
                  Tobar, F. B., Thomas, J. & Ayres, L. (2025). “Get off your phone for 90 minutes”: Commentaries about tourists’ technology consumption at Anfield Stadium.” Paper presented at the 16th International Sport and Society Conference. Monash University, July 2nd-4th, Melbourne, Australia
                </p>

                <p className="text-gray-600 mb-8">
                  Tobar, F.B. (2024) Uniting Histories: Football Heritage and Dialogue for Social Inclusion. Panelist on Football and Remembrance Culture. Amsterdam (Netherlands), November 21-22th, 2024. 
                </p>

                <p className="text-gray-600 mb-8">
                  Thomas, J. & Tobar, F. B. (2024). Simmel, Durkheim, and Douglas as ‘football tourism pundits’: Commentaries about the online behavior of tourists at the stands of football stadiums. Paper presented at the 2024 Football Collective Conference. Newcastle (UK), November 21-22th, 2024.
                </p>

                <p className="text-gray-600 mb-8">
                  Tobar, F.B. & Fritz, F. (2024). The Fans’ Serious Political Mobilization to Confront the Nazi’s Difficult Heritage of FC St. Pauli (Germany): Changing the club from bottom-up. Paper presented at the 2024 TALS Conference. New Orleans, United States. January 31st-February 2nd, 2024
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Tobar, FB; Sato, M. Exploring the Intersection of Identity and Motivation: Women Sport Fans at the 2023 FIFA Women’s World Cup. North American Society for Sport Management [NASSM]. May-June: 29-1, 2024. Minneapolis, Minnesota, United States.
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Tobar, FB; Romano, F.S. Evaluating visitors’ experiences with sport facilities operations: Expanding the Multidimensional Assessment Model (MAM) stadium and museum tours. Applied Sport Management Association [ASMA]. February: 13-17, 2024. Knoxville, Tennessee, United States
                </p>

                <p className="text-gray-600 mb-8">
                  Tobar, F.B., Ramshaw, G. & Terry, W. (2019) The Global Football Tourism League: Analyzing the football tourism phenomenon. Paper presented at the 2019 Football Collective Conference. Sheffield (UK), November 29-30th, 2019. 
                </p>

                <p className="text-gray-600 mb-8">
                  Tobar, F. B. & Ramshaw, G. (2019). The football tourism trend: implications over management issues regarding local football heritage. Paper presented at the “IV International Seminar of Management and Policies for the Sport” at the Federal University of Paraná. University. Curitiba, Brazil, May 8-10, 2019.
                </p>

                <p className="text-gray-600 mb-8">
                  Tobar, F. B. & Ramshaw, G. (2019). Sport, Heritage and Fandom: Conceptualizing the Global Touristic Football Clubs. Paper presented at the “2019 Graduate Research and Discovery Symposium (GRADS)” at Clemson University. Clemson, United States, April 3-4, 2019.
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Zou, S; Sato, M; Welty-Peachey. (2023). Visitor satisfaction and experiences with sports facilities: Consumers’ online reviews on visiting FC Barcelona’s stadium. North American Society for Sport Management [NASSM]. May-June: 31-3, 2023. Montreal, Canada.
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Romano, F.S.; Tobar, F.B. (2022). Football Tourism: a multidimensional evaluation of the visiting experience in stadiums and museums of soccer. Brazilian Association of Sport Management [ABRAGESP in Portuguese]. October: 18-22, 2022. Uberlândia, MG, Brazil.
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Capraro, AM.; Welty-Peachey, J. (2022). The impacts of Camp Nou stadium’s operations in Barcelona (Catalunya, Spain): an analysis of the managerial operations and its stakeholders. North American Society for Sport Management [NASSM]. June: 2-4, 2022. Atlanta, GA, United States.
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Cruz, EG; Capraro AM. (2019). Football Tourism: mapping the production of knowledge in journals with impact factor of Journal of Citation Reports (JCR). 16th Seminar of National Association of Research and Graduate Studies in Tourism [ANPTUR in Portuguese]. September: 18-20, 2019. Curitiba, PR, Brazil.
                </p>

                <p className="text-gray-600 mb-8">
                  Oliveira, JR; Capraro, AM. (2019). The tourist experience in a Football stadium: the tour in Arena da Baixada of the Clube Athlético Paranaense Paranaense. 1st Academic Week of Physical Education at the Federal University of Paraná. October: 21-25, 2019. Curitiba, PR, Brazil.
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
