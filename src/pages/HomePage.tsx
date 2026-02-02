import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import WhatIDo from '../components/home/WhatIDo';
import MyEducation from '../components/home/MyEducation';
import MyProjects from '../components/home/MyProjects';
import ContactPreview from '../components/home/ContactPreview';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutMe />
      <WhatIDo />
      <MyEducation />
      <MyProjects />
      <ContactPreview />
    </>
  );
}
