import React from "react";

const Footer = () => {
  return (
    <footer
      className="absolute py-20 bg-cover bg-center bg-no-repeat w-full"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MHx8fHwxNzU0OTYwNzYwfDA&ixlib=rb-4.1.0&q=85')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Information moved here from Contact section */}
        <div className="grid md:grid-cols-3 gap-8 text-center text-white">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">E-mail</h3>
            <div className="space-y-2">
              <a
                
                aria-label="Gmail"
                className="text-white text-2xl hover:text-red-400 transition-colors"
              >
                
                <i className="fa-solid fa-envelope"></i>
                <p className="text-gray-200 text-lg">footballtourisminstitute@gmail.com</p>
              </a>
              
            </div>
          </div>

          <div>
            {/* Redes sociais */}
            <div className="flex justify-center space-x-6 mt-8 mb-8 md:mb-24">
              <a
                href="https://www.instagram.com/footballtourisminstitute/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white text-4xl hover:text-pink-400 transition-colors"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/football-tourism-institute/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white text-4xl hover:text-blue-400 transition-colors"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <br />
            <p className="text-gray-500 ">Website created by <a 
                href="https://www.linkedin.com/in/ygor-silveira-de-oliveira-a6954b225/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"><strong>Ygor Silveira.</strong></a></p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Phone Numbers
            </h3>
            <div className="space-y-2">
              <p className="text-gray-200 text-lg">Phone 1: ‪+1 (540) 575.3126‬</p>
              <p className="text-gray-200 text-lg">Phone 2: ‪+1 (864) 653.0608</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
