import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/contact';
import Certificate from './components/Certificate';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Project/>
      
      <Contact/>
      <Certificate/>
      <Footer/>
    </div>
  );
}

export default App;
