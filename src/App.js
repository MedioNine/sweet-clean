import './App.css';

import Header from './components/Header.jsx';

import QuoteSection from './components/QuoteSection.jsx';
import Services from './components/Services.jsx';

import Footer from './components/Footer.jsx';
import FAQ from './components/FAQ.jsx';
import GlobalHtmlStyles from './components/GlobalHtmlStyles.jsx';
import Advantages from './components/Advantages.jsx';

function App() {
  return (
    <div className="App">
      <GlobalHtmlStyles>
        <Header />
        <QuoteSection />
        <Services />
        <Advantages />
        <FAQ />
        <Footer />
      </GlobalHtmlStyles>
    </div>
  );
}

export default App;
