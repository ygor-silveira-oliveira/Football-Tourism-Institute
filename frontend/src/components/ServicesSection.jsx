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

        <div
          id="colab"
          className="flex flex-col items-center text-center mb-20 pt-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Collaborators
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Stijn Slaats, Football Tourism Institute Representative for Europe.
          </h3>
          <p className="text-base text-gray-600 mb-8 max-w-2xl">
            A multilingual communication professional with 20+ years in media,
            marketing, and football storytelling, I believe in sport’s power to
            unite people and cultures. At the European Football for Development
            Network, I led communication for 30+ EU projects, advancing
            football’s social impact across Europe. From Ligue 1 press officer
            to global journalist, my journey spans Japan, the U.S., and South
            America. Now, through the Football Tourism Institute, I merge
            experience, research, and passion to explore how football inspires
            people to move, not just physically, but emotionally and culturally.
            Fluent in seven languages, I see every stadium, street, and
            supporter as part of a bigger narrative. Let’s tell that story
            together
          </p>

          <img
            src="/img/colab.jpg"
            alt="Collaboration"
            className="rounded-lg shadow-md w-full max-w-md h-auto"
            style={{
              objectFit: "cover",
              height: "300px",
              width: "300px",
              boxShadow: "0 6px 32px 0 rgba(0,0,0,0.60)",
            }}
          />
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
