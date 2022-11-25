import NavBar from './component/NavBar/NavBar';
import Intro from './component/intro/Intro';
import Services from './component/Services/Services';
import Experience from './component/experience/Experience';
import Work from './component/works/work';
import Portfolio from './component/portfolio/portfolio';
import Testimonial from './component/testimonials/testimonial';
import Contact from './component/Contact/contact';
import Footer from './component/Footer/footer';
import { ThemeContext } from './Context';
import { useContext } from 'react';
import './App.css';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className="App"
    style={{
      background : darkMode? 'black': '' ,
      color : darkMode? 'white' : ''
    }}
    >
      <NavBar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Work/>
      <Portfolio/>
      <Testimonial />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
