import React from "react";

import Header from './Header';
import CallToAction from './CallToAction';
import AboutApp from './AboutApp';
import NewsletterForm from './NewsletterForm';
import Slider from "./Slider";
import AboutAuthor from "./AboutAuthor";
import Footer from './Footer'



const Main = () => (
<>
    <Header/>
    <Slider/>
    <CallToAction />
    <AboutApp />
    <NewsletterForm />
    <AboutAuthor />
    <Footer />
 </>
);


export default Main;
