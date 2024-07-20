import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white">Montrell Jubilee</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-200">Full-Stack Developer</h2>
          <p className="max-w-3xl text-lg md:text-xl lg:text-2xl text-gray-200">
            With over 5 years of experience, I'm a passionate full-stack developer dedicated to creating innovative and user-friendly web applications. I enjoy reading books on building better products and becoming an effective team member. In my free time, I love playing FIFA and drawing. Currently, I am diving into machine learning paradigms and working towards completing my AWS Cloud Practitioner certification.
          </p>
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
            <a
              href="../../resume.pdf"
              download="Montrell_Jubilee_Resume.pdf"
              className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-6 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Download Resume
            </a>
            <Link
              to="https://www.linkedin.com/in/montrell-jubilee-04b615190"
              className="inline-flex h-12 items-center justify-center rounded-md border border-gray-300 bg-white px-6 text-sm font-medium text-blue-600 shadow-lg transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              View on LinkedIn
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
