import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/Home';
import Sales from './pages/Sales/Sales';
import CurrentStock from './pages/CurrentStock/CurrentStock';
import PreviouslySold from './pages/PreviouslySold/PreviouslySold';
import VehicleDetails from './pages/VehicleDetails/VehicleDetails';
import About from './pages/About/About';
import ExpertAdvice from './pages/ExpertAdvice/ExpertAdvice';
import SellingYourCar from './pages/SellingYourCar/SellingYourCar';
import TestimonialsPage from './pages/TestimonialsPage/TestimonialsPage';
import AboutTom from './pages/AboutTom/AboutTom';
import Contact from './pages/Contact/Contact';
import News from './pages/News/News';
import Services from './pages/Services/Services';
import Finance from './pages/Finance/Finance';
import Storage from './pages/Storage/Storage';
import Careers from './pages/Careers/Careers';
import TomTalks from './pages/TomTalks/TomTalks';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/current-stock" element={<CurrentStock />} />
          <Route path="/previously-sold" element={<PreviouslySold />} />
          <Route path="/vehicle/:slug" element={<VehicleDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/about-tom-hartley-jnr" element={<AboutTom />} />
          <Route path="/expert-advice" element={<ExpertAdvice />} />
          <Route path="/expert-advice/:slug" element={<ExpertAdvice />} />
          <Route path="/our-services/expert-advice" element={<ExpertAdvice />} />
          <Route path="/our-services/expert-advice/:slug" element={<ExpertAdvice />} />
          <Route path="/selling-your-car" element={<SellingYourCar />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<News />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-services/finance" element={<Finance />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/storage-facility" element={<Storage />} />
          <Route path="/storage" element={<Storage />} />
          <Route path="/join-the-team" element={<Careers />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/tomtalks" element={<TomTalks />} />
          <Route path="/videos" element={<TomTalks />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
