

import React, { Suspense } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import HeroSection from './components/herosection';

const ImageSlider = React.lazy(() => import('./components/imageslider'));
const About = React.lazy(() => import('./components/about'));
const Project = React.lazy(() => import('./components/project'));
const Approach = React.lazy(() => import('./components/approach'));
const Service = React.lazy(() => import('./components/service'));
const Team = React.lazy(() => import('./components/team'));
const ClientFeedback = React.lazy(() => import('./components/clientfeedback'));
const Faq = React.lazy(() => import('./components/faq'));
const Form = React.lazy(() => import('./components/form'));
const Subscribe = React.lazy(() => import('./components/subscribe'));
const Footer = React.lazy(() => import('./components/footer'));

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <ImageSlider />
        <About />
        <Project />
        <Approach />
        <Service />
        <Team />
        <ClientFeedback />
        <Faq />
        <Form />
        <Subscribe />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

