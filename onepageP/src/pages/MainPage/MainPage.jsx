//MainPage.jsx 

import { Navigation } from "../../components/Navigation/Nav";
import { Header } from '../../components/Header/Header';
import { AboutSection } from '../../components/AboutSection/AboutSection';
import { ContactSection } from '../../components/ContactSection/ContactSection';
import {ProjectSection } from '../../components/ProjectSection/ProjectSection';

import { Footer } from '../../components/Footer/Footer';

export const MainPage = () => {
    return (
      <>
        <Navigation />
        <Header/>
        <AboutSection/>
        <ProjectSection/>
        <ContactSection/>
        <Footer/>

      </>
    );
  };

  