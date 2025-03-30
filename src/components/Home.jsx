import { FiSearch, FiBarChart2, FiList, FiArrowRight, FiAward, FiBook, FiTrendingUp } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  // Sample top colleges data with images
  const topColleges = [
    {
      name: "IIT Bombay",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "India's premier engineering institute"
    },
    {
      name: "IIT Delhi",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Excellence in technology and research"
    },
    {
      name: "IIT Madras",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Leading technical education hub"
    },
    {
      name: "NIT Trichy",
      image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Top-ranked National Institute"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-800 to-indigo-900 text-white pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Gateway to <span className="text-yellow-300">Top Engineering Colleges</span>
            </h1>
            <p className="text-xl mb-8">
              Discover, analyze, and secure admission to your dream college with our comprehensive counselling platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <NavLink 
                to="/predict-college" 
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-medium py-3 px-8 rounded-lg transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FiBarChart2 className="text-lg" />
                Find My Colleges
              </NavLink>
              <NavLink 
                to="/college" 
                className="bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-8 rounded-lg transition flex items-center justify-center gap-2 border border-white/20 hover:border-white/30"
              >
                <FiList className="text-lg" />
                Explore All Colleges
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How We Help You Succeed</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <FiAward className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">College Predictor</h3>
              <p className="text-gray-600 text-center">
                Get accurate predictions of colleges you can secure based on your JEE rank and historical cutoff trends.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
              <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <FiBook className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Comprehensive Database</h3>
              <p className="text-gray-600 text-center">
                Access detailed information about all Josaa-affiliated colleges, programs, and facilities.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-md transition">
              <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <FiTrendingUp className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Cutoff Analysis</h3>
              <p className="text-gray-600 text-center">
                Visualize cutoff trends over the years to make informed decisions about your college choices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Colleges Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Top Colleges</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore some of the most prestigious engineering institutions in India
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topColleges.map((college, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={college.image} 
                    alt={college.name} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{college.name}</h3>
                  <p className="text-gray-600 mb-4">{college.description}</p>
                  <NavLink 
                    to={`/colleges/${college.name.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-blue-600 font-medium inline-flex items-center gap-1 hover:text-blue-800"
                  >
                    View Details <FiArrowRight />
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Students Say</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-blue-50 rounded-xl p-8 shadow-inner">
            <div className="text-center">
              <p className="text-xl italic text-gray-700 mb-6">
                "Thanks to CollegeCompass, I could accurately predict my chances at IIT Bombay. The cutoff analysis helped me make informed choices during counselling, and I secured my dream branch!"
              </p>
              <div className="font-medium text-gray-800">Rahul Sharma</div>
              <div className="text-blue-600">JEE Advanced 2023, AIR 487</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Begin Your College Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who've found their perfect college through our platform
          </p>
          <NavLink 
            to="/predict" 
            className="bg-white text-blue-800 font-bold py-4 px-10 rounded-full inline-flex items-center gap-2 shadow-lg hover:bg-blue-50 hover:shadow-xl transition"
          >
            <FiSearch className="text-lg" />
            Find Your Colleges Now
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;