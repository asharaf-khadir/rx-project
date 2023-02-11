import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import UserData from './components/form/UserData';
import Contactdetails from './components/footer/Contactdetails';
import Services from './components/services/Services';
import CompanyInfo from './components/footer/CompanyInfo';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <UserData />
      <Contactdetails />
      <CompanyInfo />
    </div>
  );
}

export default App;
