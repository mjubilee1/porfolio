import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';

const Home = () => {
  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter">Montrell Jubilee</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary-foreground">Full-Stack Developer</h2>
          <p className="max-w-[700px] text-lg md:text-xl lg:text-2xl text-primary-foreground">
            With over 5 years of experience, I'm a passionate full-stack developer dedicated to creating innovative and user-friendly web applications. I enjoy reading books on building better products and becoming an effective team member. In my free time, I love playing FIFA and drawing. Currently, I am diving into machine learning paradigms and working towards completing my AWS Cloud Practitioner certification.
          </p>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
        <div className="container flex flex-col items-center gap-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">My Work</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent projects and the technologies I used to bring them to life.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="/placeholder.svg"
                width={640}
                height={360}
                alt="Project 1"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-primary-foreground">Project 1</h3>
                <p className="text-lg text-primary-foreground">
                  A modern web application built with React, Node.js, and MongoDB.
                </p>
                <Button text="Learn More" className="mt-4" onClick={() => {}} type="button" color="primary" />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="/placeholder.svg"
                width={640}
                height={360}
                alt="Project 2"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-primary-foreground">Project 2</h3>
                <p className="text-lg text-primary-foreground">
                  A responsive e-commerce website built with Next.js and Stripe.
                </p>
                <Button text="Learn More" className="mt-4" onClick={() => {}} type="button" color="primary" />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105">
              <img
                src="/placeholder.svg"
                width={640}
                height={360}
                alt="Project 3"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.3)] flex flex-col items-center justify-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-primary-foreground">Project 3</h3>
                <p className="text-lg text-primary-foreground">
                  A mobile-first web application built with React Native and Firebase.
                </p>
                <Button text="Learn More" className="mt-4" onClick={() => {}} type="button" color="primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-6 px-4 md:px-6 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Resume</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Download My Resume</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out my resume to learn more about my education, work experience, and skills.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              to="../../resume.pdf"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Download Resume
            </Link>
            <Link
              to="https://www.linkedin.com/in/montrell-jubilee-04b615190"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
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
