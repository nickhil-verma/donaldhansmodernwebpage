import React from 'react';
import Marquee from 'react-fast-marquee';

const clientLogos = [
  "https://i.postimg.cc/W1HCbw0m/sushiama-removebg-preview.png",  
 
  'https://loopflip.co/assets/loopflip_logo.svg',

  // Original: 'https://images.icon-icons.com/2699/PNG/512/apple_logo_icon_168588.png',
  // This already looks decent, but let's find a more official-looking transparent one.
  'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg', // Apple Logo (SVG, black, transparent) - SVG is better!

  // Original: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
  // This is already an SVG with a transparent background! Perfect.
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', // Google Logo (SVG, transparent)

  // Original: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png',
  // This is a PNG derived from an SVG, already good.
  'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png', // Amazon Logo (transparent PNG from SVG)

  // Original: 'https://www.thoughtco.com/thmb/AQxsKZYkFu6kR-Rnkf-7DV2oD0w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Coca_cola_logo_font-56a248ba5f9b58b7d0c8aec8.jpg',
  // This is a JPG. Replacing with a transparent PNG/SVG of Coca-Cola.
  'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/512px-Coca-Cola_logo.svg.png', // Coca-Cola Logo (transparent PNG from SVG)

  
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1000px-Samsung_Logo.svg.png', // Samsung Logo (transparent PNG from SVG)

    
];

const Clients = () => {
  return (
    <div className="py-16 px-4 bg-gradient-to-b from-white via-slate-100 to-blue-50">
      <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-10">
        Our Trusted Clients
      </h2>

      <div className="relative overflow-hidden">
        <Marquee
          gradient
          gradientColor="#ffffff"
          gradientWidth={0}
          speed={30}
          pauseOnHover
        >
          <div className="flex overflow-hidden space-x-6 px-2">
            {clientLogos.map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-44 h-28   rounded-xl   flex items-center justify-center p-4     transition-transform hover:scale-105"
              >
                <img
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="max-h-full max-w-full object-contain filter"
                  style={{
                    filter:
                      'brightness(0) saturate(100%) opacity(90%) invert(20%) sepia(80%) saturate(400%) hue-rotate(230deg) brightness(100%) contrast(95%)',
                  }}
                />
              </div>
            ))}
          </div>
        </Marquee>

   
         
      </div>
    </div>
  );
};

export default Clients;
