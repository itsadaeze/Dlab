
import './App.css';
import NavBar from './components/Navbar';
import About from './components/about';
import ClientFeedback from './components/clientfeedback';
import Faq from './components/faq';
import Footer from './components/footer';
import Form from './components/form';
// import Carousel from './components/carrousel';
import HeroSection from './components/herosection';
import Project from './components/project';
import Subscribe from './components/subscribe';

import Approach from './components/approach';
import Service from './components/service';

import ImageSlider from './components/imageslider';
import Team from './components/team';


function App() {



  return (
    <div >
      <NavBar/>
      <HeroSection />
      <ImageSlider/>
  
      <About />
    
      <Project />
      <Approach />
      <Service />
      <Team />
      <ClientFeedback />
      <Faq />
      <Form />
      <Subscribe/>
      <Footer/>
    </div>
  );
}

export default App;


// App.js

// import React, { useEffect } from 'react';
// import './App.css';
// import NavBar from './components/Navbar';
// import About from './components/about';
// import ClientFeedback from './components/clientfeedback';
// import Faq from './components/faq';
// import Footer from './components/footer';
// import Form from './components/form';
// import HeroSection from './components/herosection';
// import Project from './components/project';
// import Subscribe from './components/subscribe';
// import Approach from './components/approach';
// import Service from './components/service';
// import ImageSlider from './components/imageslider';
// import Team from './components/team';
// import { useInView } from 'react-intersection-observer';

// function App() {
//   const { ref: aboutRef, inView: aboutInView } = useInView({
//     triggerOnce: true,
//   });
//   const { ref: projectRef, inView: projectInView } = useInView({
//     triggerOnce: true,
//   });
//   const { ref: approachRef, inView: approachInView } = useInView({
//     triggerOnce: true,
//   });
//   const { ref: serviceRef, inView: serviceInView } = useInView({
//     triggerOnce: true,
//   });
//   const { ref: teamRef, inView: teamInView } = useInView({
//     triggerOnce: true,
//   });
//   const { ref: clientFeedbackRef, inView: clientFeedbackInView } = useInView({
//     triggerOnce: true,
//   });
//   const { ref: faqRef, inView: faqInView } = useInView({
//     triggerOnce: true,
//   });
//   const { ref: formRef, inView: formInView } = useInView({
//     triggerOnce: true,
//   });
//   const { ref: subscribeRef, inView: subscribeInView } = useInView({
//     triggerOnce: true,
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY === 0) {
//         aboutInView && aboutInView(false);
//         projectInView && projectInView(false);
//         approachInView && approachInView(false);
//         serviceInView && serviceInView(false);
//         teamInView && teamInView(false);
//         clientFeedbackInView && clientFeedbackInView(false);
//         faqInView && faqInView(false);
//         formInView && formInView(false);
//         subscribeInView && subscribeInView(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [aboutInView, projectInView, approachInView, serviceInView, teamInView, clientFeedbackInView, faqInView, formInView, subscribeInView]);



//   return (
//     <div>
//       <NavBar />
//       <HeroSection />
//       <ImageSlider/>
//       <div ref={aboutRef} className={`fade-in-section ${aboutInView ? 'is-visible' : ''}`}>
//         <About />
//       </div>
//       <div ref={projectRef} className={`fade-in-section ${projectInView ? 'is-visible' : ''}`}>
//         <Project />
//       </div>
//       <div ref={approachRef} className={`fade-in-section ${approachInView ? 'is-visible' : ''}`}>
//         <Approach />
//       </div>
//       <div ref={serviceRef} className={`fade-in-section ${serviceInView ? 'is-visible' : ''}`}>
//         <Service />
//       </div>
//       <div ref={teamRef} className={`fade-in-section ${teamInView ? 'is-visible' : ''}`}>
//         <Team />
//       </div>
//       <div ref={clientFeedbackRef} className={`fade-in-section ${clientFeedbackInView ? 'is-visible' : ''}`}>
//         <ClientFeedback />
//       </div>
//       <div ref={faqRef} className={`fade-in-section ${faqInView ? 'is-visible' : ''}`}>
//         <Faq />
//       </div>
//       <div ref={formRef} className={`fade-in-section ${formInView ? 'is-visible' : ''}`}>
//         <Form />
//       </div>
//       <div ref={subscribeRef} className={`fade-in-section ${subscribeInView ? 'is-visible' : ''}`}>
//         <Subscribe />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React, { useEffect, useState } from 'react';
// import './App.css';
// import NavBar from './components/Navbar';
// import About from './components/about';
// import ClientFeedback from './components/clientfeedback';
// import Faq from './components/faq';
// import Footer from './components/footer';
// import Form from './components/form';
// import HeroSection from './components/herosection';
// import Project from './components/project';
// import Subscribe from './components/subscribe';
// import Approach from './components/approach';
// import Service from './components/service';
// import ImageSlider from './components/imageslider';
// import Team from './components/team';
// import { useInView } from 'react-intersection-observer';

// function App() {
//   const [sectionsInView, setSectionsInView] = useState({
//     about: false,
//     project: false,
//     approach: false,
//     service: false,
//     team: false,
//     clientFeedback: false,
//     faq: false,
//     form: false,
//     subscribe: false
//   });

//   useEffect(() => {
//     const handleScroll = () => {
//       const newSectionsInView = {};

//       for (const section in sectionsInView) {
//         const { ref, inView } = sectionRefs[section];
//         if (ref && inView && !sectionsInView[section]) {
//           newSectionsInView[section] = true;
//         } else {
//           newSectionsInView[section] = sectionsInView[section];
//         }
//       }

//       setSectionsInView(newSectionsInView);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [sectionsInView]);

//   const sectionRefs = {
//     about: useInView({ triggerOnce: true }),
//     project: useInView({ triggerOnce: true }),
//     approach: useInView({ triggerOnce: true }),
//     service: useInView({ triggerOnce: true }),
//     team: useInView({ triggerOnce: true }),
//     clientFeedback: useInView({ triggerOnce: true }),
//     faq: useInView({ triggerOnce: true }),
//     form: useInView({ triggerOnce: true }),
//     subscribe: useInView({ triggerOnce: true })
//   };

//   return (
//     <div>
//       <NavBar />
//       <HeroSection />
//       <ImageSlider/>
//       <div ref={sectionRefs.about.ref} className={`fade-in-section ${sectionRefs.about.inView ? 'is-visible' : ''}`}>
//         <About />
//       </div>
//       <div ref={sectionRefs.project.ref} className={`fade-in-section ${sectionRefs.project.inView ? 'is-visible' : ''}`}>
//         <Project />
//       </div>
//       <div ref={sectionRefs.approach.ref} className={`fade-in-section ${sectionRefs.approach.inView ? 'is-visible' : ''}`}>
//         <Approach />
//       </div>
//       <div ref={sectionRefs.service.ref} className={`fade-in-section ${sectionRefs.service.inView ? 'is-visible' : ''}`}>
//         <Service />
//       </div>
//       <div ref={sectionRefs.team.ref} className={`fade-in-section ${sectionRefs.team.inView ? 'is-visible' : ''}`}>
//         <Team />
//       </div>
//       <div ref={sectionRefs.clientFeedback.ref} className={`fade-in-section ${sectionRefs.clientFeedback.inView ? 'is-visible' : ''}`}>
//         <ClientFeedback />
//       </div>
//       <div ref={sectionRefs.faq.ref} className={`fade-in-section ${sectionRefs.faq.inView ? 'is-visible' : ''}`}>
//         <Faq />
//       </div>
//       <div ref={sectionRefs.form.ref} className={`fade-in-section ${sectionRefs.form.inView ? 'is-visible' : ''}`}>
//         <Form />
//       </div>
//       <div ref={sectionRefs.subscribe.ref} className={`fade-in-section ${sectionRefs.subscribe.inView ? 'is-visible' : ''}`}>
//         <Subscribe />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;
