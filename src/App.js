import './App.css';
import Header from './component/Header'
import Footer from './component/Footer'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
import Section3 from './component/Section3'
import Section4 from './component/Section4'
import Slider from './component/Slider'
import Menu from './component/Menu'

function App() {
  return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 /> 
      <Section4 />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
