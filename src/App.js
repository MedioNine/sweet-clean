import './App.css';

import Header from './components/Header.jsx';

import QuoteSection from './components/QuoteSection.jsx';
import Services from './components/Services.jsx';

import Footer from './components/Footer.jsx';
import GlobalHtmlStyles from './components/GlobalHtmlStyles.jsx';

function App() {
  return (
    <div className="App">
      <GlobalHtmlStyles>
        <Header />
        <QuoteSection />
        <Services />
        <Footer />
      </GlobalHtmlStyles>
    </div>
  );
}

export default App;
