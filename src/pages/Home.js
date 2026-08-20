import React from 'react';
import Hero from '../components/Home/Hero';
import Intro from '../components/Home/Intro';
import Service from '../components/Home/Service';
import Environment from '../components/Home/Environment';
import Contact from '../components/Home/Contact';

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Service />
      <Environment />
      <Contact />
    </>
  );
}

export default Home;
