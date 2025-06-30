import React from 'react';
import Marquee from 'react-fast-marquee';

const clientLogos = [
  "https://i.postimg.cc/W1HCbw0m/sushiama-removebg-preview.png",  
 
  'https://loopflip.co/assets/loopflip_logo.svg',
    'https://i.postimg.cc/ncCZ8TnB/Cups24-white-logo-1024x.webp',//cups24 logo (white, transparent background)
  
  'https://i.postimg.cc/sXcQWRKG/bytedancepng.png',  
   
  'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg', // Google Logo (SVG, transparent)
    'https://i.postimg.cc/HkHrBRMY/R.png',
   
  // 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png', // Amazon Logo (transparent PNG from SVG)
  // 'https://i.postimg.cc/6QB2T3dX/d0a38d-24866c59c8af46e789398b90866095d7-mv2-removebg-preview.png',  
  

  
  'https://i.postimg.cc/SKdT3ny1/Kungfu-tea-removebg-preview.png',

    
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
