import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">About Me</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">Full-Stack Developer</h2>
          <p className="max-w-3xl text-lg md:text-xl lg:text-2xl text-gray-200">
            With over 5 years of experience, I'm a passionate full-stack developer dedicated to creating innovative and user-friendly web applications. I enjoy reading books on building better products and becoming an effective team member. In my free time, I love playing FIFA and drawing. Currently, I am diving into machine learning paradigms and working towards completing my AWS Cloud Practitioner certification.
          </p>
        </div>
      </section>
      {/* Feature Work Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm text-gray-600">My Work</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800">Passion Projects</h2>
              <p className="max-w-3xl text-lg text-gray-600 md:text-xl">
                Check out some of my recent projects and the technologies I used to bring them to life.
              </p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg flex flex-col h-full transition-transform duration-300 hover:scale-105">
              <div className="relative h-60">
                <img
                  src="/jubilee-home.png"
                  alt="Project 1"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 bg-gray-800 text-white h-full">
                <p className="text-lg">
                  A modern web application developed using Node.js, NextJs, Firebase, TailwindCss.
                </p>
                <div className="mt-4 flex gap-4 justify-center">
                <a
                  href="https://jubileespace.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Source Code
                </a>
                <a
                  href="https://jubileespace.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  View
                </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg flex flex-col h-full transition-transform duration-300 hover:scale-105">
              <div className="relative h-60">
                <img
                  src="/friendlyrealtor-app.png"
                  alt="Project 2"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 bg-gray-800 text-white h-full">
                <p className="text-lg">
                  Developed this app using React Native, OpenAI, Node.js, and Firebase.
                </p>
                <div className="mt-4 gap-4 flex justify-center">
                  <a
                    href="https://github.com/FriendlyRealtor/jubilee-space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Source Code
                  </a>
                  <a
                    href="https://apps.apple.com/us/app/jubileespace-real-estate/id6446328944"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                     View
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg flex flex-col h-full transition-transform duration-300 hover:scale-105">
              <div className="relative h-60">
                <img
                  src="/crypto-bot.jpeg"
                  alt="Project 3"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 bg-gray-800 text-white h-full">
                <p className="text-lg">
                  Developed using Solidity for crypto contracts, creating arbitrage contracts, and React for the frontend.
                </p>
                <div className="mt-4 flex flex-col items-center gap-2">
                  <a
                    href="https://github.com/mjubilee1/crypto-bots"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg flex flex-col h-full transition-transform duration-300 hover:scale-105">
              <div className="relative h-60">
                <img
                  src="/python.jpeg"
                  alt="Project 3"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 bg-gray-800 text-white h-full">
                <p className="text-lg">
                  Developed a Python script to pull Twitch user channels and used Tesseract and OpenCV to analyze Warzone gaming footage, extracting the number of kills received during a match.
                </p> 
                <div className="mt-4 flex flex-col items-center gap-2">
                  <a
                    href="https://github.com/TeamSleeplessGamers/machine-learning"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg flex flex-col h-full transition-transform duration-300 hover:scale-105">
              <div className="relative h-60">
                <img
                  src="/nodejs.png"
                  alt="Project 3"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between p-6 bg-gray-800 text-white h-full">
                <p className="text-lg">
                  Developed a Node.js service to support REST API routes for frontend and mobile applications.
                </p>
                <div className="mt-4 flex flex-col items-center gap-2">
                  <a
                    href="https://github.com/FriendlyRealtor/friendly-realtor-backend"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Resume Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium text-gray-600">Resume</div>
            <h2 className="text-3xl font-bold text-gray-800 sm:text-5xl">Download My Resume</h2>
            <p className="max-w-3xl text-lg text-gray-600 md:text-xl">
              Check out my resume to learn more about my education, work experience, and skills.
            </p>
          </div>
          <div className="flex gap-4 mt-8">
            <Link
              to="https://www.linkedin.com/in/montrell-jubilee-04b615190"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-6 text-sm font-medium text-blue-600 shadow-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View on LinkedIn
            </Link>
            <a
              href="/resume.pdf"
              download="Montrell_Jubilee_Resume.pdf"
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Download Resume
            </a>
            <Link
              to="https://github.com/mjubilee1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-6 text-sm font-medium text-blue-600 shadow-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
