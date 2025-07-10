import React, { useState, useEffect } from 'react';

// Dummy project data
const dummyProjects = [
  {
    id: 1,
    name: 'Eternalan',
    description: '🎵 A full-stack music platform crafted with love — discover, stream, and support independent artists from around the world. Featuring seamless user authentication, curated music libraries, dynamic playlists, and a smooth audio player experience. Built with React, Node.js, Express, and MongoDB, this platform harmonizes modern tech with soulful vibes. Secure, scalable, and made for true music lovers',
    url: 'https://eternalan.vercel.app',
    imageUrl: 'https://i.postimg.cc/0Nzrj6Xt/Screenshot-2025-07-10-095758.png'
  },
  {
    id: 2,
    name: 'Task Management App',
    description: 'A minimalist task manager designed for productivity. Features include task creation, categorization, due dates, and completion tracking. Developed using React and Firebase.',
    url: 'https://example.com/task-app',
    imageUrl: 'https://placehold.co/400x250/dbeafe/1e40af?text=Task+Manager'
  },
  {
    id: 3,
    name: 'Weather Dashboard',
    description: 'An interactive weather dashboard providing real-time weather updates based on user location or city search. Integrates with a third-party weather API. Built with React and Axios.',
    url: 'https://example.com/weather-app',
    imageUrl: 'https://placehold.co/400x250/dbeafe/1e40af?text=Weather+App'
  },
  {
    id: 4,
    name: 'Recipe Finder',
    description: 'Discover new recipes based on available ingredients or dietary preferences. Features search, filtering, and detailed recipe views. Created using React and an external recipe API.',
    url: 'https://example.com/recipe-finder',
    imageUrl: 'https://placehold.co/400x250/dbeafe/1e40af?text=Recipe+Finder'
  },
  {
    id: 5,
    name: 'Personal Blog',
    description: 'A responsive personal blog platform with markdown support for posts, comments section, and categorization. Developed with Next.js and headless CMS integration.',
    url: 'https://example.com/blog',
    imageUrl: 'https://placehold.co/400x250/dbeafe/1e40af?text=Blog+Site'
  },
  {
    id: 6,
    name: 'Fitness Tracker',
    description: 'Track your workouts, set fitness goals, and monitor progress. Includes a workout log and data visualization. Built with React Native for mobile platforms.',
    url: 'https://example.com/fitness-tracker',
    imageUrl: 'https://placehold.co/400x250/dbeafe/1e40af?text=Fitness+Tracker'
  },
  {
    id: 7,
    name: 'Movie Database',
    description: 'Browse, search, and discover movies. View details, ratings, and trailers. Fetches data from a popular movie API. Implemented with React and Redux.',
    url: 'https://example.com/movie-db',
    imageUrl: 'https://placehold.co/400x250/dbeafe/1e40af?text=Movie+DB'
  },
  {
    id: 8,
    name: 'Chat Application',
    description: 'A real-time chat application with direct messaging and group chats. Features user presence and message timestamps. Built with React and WebSockets.',
    url: 'https://example.com/chat-app',
    imageUrl: 'https://placehold.co/400x250/dbeafe/1e40af?text=Chat+App'
  },
  {
    id: 9,
    name: 'Portfolio Website',
    description: 'A sleek, responsive portfolio website to showcase projects, skills, and contact information. Designed with modern UI/UX principles using React and Framer Motion.',
    url: 'https://example.com/my-portfolio',
    imageUrl: 'https://placehold.co/400x250/dbeafe/1e40af?text=Portfolio'
  },
  {
    id: 10,
    name: 'Stock Market Dashboard',
    description: 'Visualize stock prices, market trends, and company financials. Provides interactive charts and data tables. Uses React and a financial data API.',
    url: 'https://example.com/stock-dashboard',
    imageUrl: 'https://placehold.co/400x250/dbeafe/1e40af?text=Stocks'
  },
];

// Number of projects to display per page
const PROJECTS_PER_PAGE = 4;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Use useEffect to manage document title and meta description
  useEffect(() => {
    document.title = 'My Awesome Projects';
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = 'Showcasing a collection of my projects.';
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(dummyProjects.length / PROJECTS_PER_PAGE);

  // Calculate the projects to display on the current page
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = dummyProjects.slice(indexOfFirstProject, indexOfLastProject);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Go to next page
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Go to previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Render page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {/* Main container with dotted background */}
      <div className="min-h-screen relative flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 font-inter">
        {/* Dotted background overlay */}
        <div
          className="absolute inset-0 z-0 opacity-50"
          style={{
            backgroundImage: `radial-gradient(circle, #eff6ff 1px, transparent 1px)`, // blue-50 dot color
            backgroundSize: '20px 20px', // Spacing between dots
          }}
        ></div>

        {/* Content area */}
        <section className="relative z-10 w-full max-w-7xl mx-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12 border border-blue-100">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-800 mb-10 leading-tight">
           Donald Hans Projects
          </h1>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
            {currentProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-200"
              >
                <img
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-t-xl"
                  onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x250/dbeafe/1e40af?text=${encodeURIComponent(project.name)}` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
                  >
                    Visit Project
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-5a1 1 0 10-2 0v5H5V7h5a1 1 0 000-2H5z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          {dummyProjects.length > PROJECTS_PER_PAGE && (
            <nav className="flex justify-center items-center space-x-2">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded-full font-medium ${
                  currentPage === 1
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 shadow-md'
                }`}
              >
                Previous
              </button>
              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => paginate(number)}
                  className={`px-4 py-2 rounded-full font-medium ${
                    currentPage === number
                      ? 'bg-blue-700 text-white shadow-lg'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200'
                  }`}
                >
                  {number}
                </button>
              ))}
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded-full font-medium ${
                  currentPage === totalPages
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 shadow-md'
                }`}
              >
                Next
              </button>
            </nav>
          )}
        </section>
      </div>
    </>
  );
};

export default Projects;
