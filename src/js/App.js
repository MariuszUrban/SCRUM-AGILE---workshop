import React from "react";
import CallToAction from './components/CallToAction';
import AboutApp from './components/AboutApp';
import NewsletterForm from './components/NewsletterForm';
import AboutAuthor from './components/AboutAuthor';
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <header>
        <img src="https://coderslab.pl/img/coderslab-logo.png" className="logoImage" alt="logo"/>
      </header>
      <section className="intro">
        <p>
          Scrum Lab React
        </p>
      </section>
      <CallToAction />
      <AboutApp />
      <NewsletterForm />
      <AboutAuthor />
      <Footer />
    </>
  );
};

export default App;
