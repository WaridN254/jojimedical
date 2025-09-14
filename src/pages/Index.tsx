
import About from '../components/About';
import Doctors from '../components/Doctors';
import PatientStories from '../components/PatientStories';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

function Index() {
  return (
    <div className="min-h-screen">
      <About />
      <Doctors />
      <PatientStories />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Index;