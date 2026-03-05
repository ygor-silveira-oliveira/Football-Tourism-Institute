import React from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Starting Today Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What we offer
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
            Meet our experts on the management of football tourism operations
          </h3>
        </div>

        {/* Consulting Section - Felipe */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Imagem do Felipe */}
          <div className="flex justify-center mb-8 lg:mb-0">
            <img
              src="/img/felipe.jpg"
              alt="Felipe"
              className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full"
              style={{
                boxShadow: "0 6px 32px 0 rgba(0,0,0,0.60)",
              }}
            />
          </div>
          {/* Texto do Felipe */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
              Felipe Bertazzo Tobar
            </h3>
            <p className="text-base text-gray-600 mb-8 text-center lg:text-left">
              "At the Football Tourism Institute, we combine academic expertise
              with industry practice to shape the future of football tourism.
              Our team delivers a wide range of services, including consultancy
              for clubs managers or facilities administrations, leagues, tourism
              boards, and event organizers, tailored strategies for sustainable
              football tourism growth, operations management, and training
              through workshops and lectures. Our work has been featured in
              peer-reviewed articles, international conferences, and
              documentaries, bridging research with real-world impact. By
              fostering collaborations between scholars and practitioners, we
              provide insights and solutions that help football tourism thrive
              on a global scale."
            </p>
          </div>
        </div>

        {/* Consulting Section - Jonathan */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-40">
          {/* Imagem do Jonathan */}
          <div className="flex justify-center mb-8 lg:mb-0">
            <img
              src="/img/jonathan.jpg"
              alt="Jonathan"
              className="w-48 h-48 md:w-60 md:h-60 object-cover rounded-full"
              style={{
                boxShadow: "0 6px 32px 0 rgba(0,0,0,0.60)",
              }}
            />
          </div>
          {/* Texto do Jonathan */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center lg:text-left">
              Jonathan R. Oliveira
            </h3>
            <p className="text-base text-gray-600 mb-8 text-center lg:text-left">
              "Football tourism is rapidly growing across the globe. From iconic
              stadiums to immersive museum tours, the sport continues to capture
              the attention of travelers from all walks of life, whether
              passionate football fans, companions of friends or family, or
              visitors simply looking for unique entertainment during their free
              time. Football tourists can experience excitement and emotion
              while discovering the culture and history of the game through
              engaging, interactive, and technology-driven experiences. Every
              visit offers something memorable and worthwhile. Join us as we
              explore the vibrant world of football tourism!"
            </p>
          </div>
        </div>

        <div id="colab" className="mb-20 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Collaborators
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
          </div>

          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-white shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="md:flex">
                <div className="md:w-1/3 p-8 flex justify-center items-center">
                  <div className="relative">
                    <img
                      src="/img/colab.jpg"
                      alt="Stijn Slaats"
                      className="w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Stijn Slaats
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">
                      Football Tourism Institute Representative for Europe
                    </p>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed italic text-lg border-l-4 border-green-500 pl-6">
                    "A multilingual communication professional with 20+ years in
                    media, marketing, and football storytelling, I believe in
                    sport's power to unite people and cultures. At the European
                    Football for Development Network, I led communication for
                    30+ EU projects, advancing football's social impact across
                    Europe. From Ligue 1 press officer to global journalist, my
                    journey spans Japan, the U.S., and South America. Now,
                    through the Football Tourism Institute, I merge experience,
                    research, and passion to explore how football inspires
                    people to move, not just physically, but emotionally and
                    culturally. Fluent in seven languages, I see every stadium,
                    street, and supporter as part of a bigger narrative. Let's
                    tell that story together."
                  </blockquote>
                  <div className="mt-6 flex items-center space-x-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-5 h-5 mr-2 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      20+ Years Experience
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="w-5 h-5 mr-2 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0113.917 9h1.946zm-2.003 2H8.082c.18 1.897.441 4.328.837 6.118A6.004 6.004 0 0011.968 11zm-6.03 0c.45 1.79.718 4.216.837 6.118A6.004 6.004 0 007.917 11H6.001z"
                          clipRule="evenodd"
                        />
                      </svg>
                      7 Languages
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Where we have been to date
          </h2>
          <div className="w-52 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-10"></div>
          <img
            src="/img/Travel.jpg"
            alt="Travel"
            className="mx-auto rounded-lg shadow-md w-full max-w-[900px] h-auto"
            style={{
              objectFit: "cover",
            }}
          />
        </div>

        {/* How we operate section - moved to AboutSection */}
      </div>
    </section>
  );
};

export default ServicesSection;
