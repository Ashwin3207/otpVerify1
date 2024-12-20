// import React from 'react'
import Header from '../shared/Header'

// function Home() {
//   return (
//     <>
//     <Header/>
//     <div className='text-center font-bold text-3xl mt-36'>THIS IS HOME PAGE</div>

//     </>

//   )
// }

// export default Home



import React from "react";

const Home = () => {
  return (
    <><Header/>
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen flex flex-col items-center">
      {/* Header */}
      {/* <header className="w-full flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-blue-700">LOGO</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-blue-700">Home</a>
          <a href="#about" className="text-gray-600 hover:text-blue-700">About Us</a>
          <a href="#issues" className="text-gray-600 hover:text-blue-700">Issues</a>
          <a href="#team" className="text-gray-600 hover:text-blue-700">Team</a>
          <a href="#blog" className="text-gray-600 hover:text-blue-700">Blog</a>
        </nav>
        <button className="md:hidden text-blue-700">Menu</button>
      </header> */}
      

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-32 mt-12">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-700">E - Commerce</h2>
          <p className="mt-4 text-gray-600">
            Explore the world of online services and technology tailored to fit your needs.
            We combine design and strategy for an exceptional digital experience.
          </p>
          <button className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-800 transition">
            Get More
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-12 md:mt-0 flex justify-center relative">
          <div className="w-72 md:w-96 h-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-300 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white p-4 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">#</span>
                  <span className="text-red-500">&hearts;</span>
                </div>
                <div className="mt-4 h-24 bg-gray-200 rounded"></div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="bg-blue-300 h-6 rounded"></div>
                  <div className="bg-orange-300 h-6 rounded"></div>
                  <div className="bg-blue-300 h-6 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
    </>
  );
};

export default Home;
