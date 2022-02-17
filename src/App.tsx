import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SiteRoutes from './SiteRoutes';
import GlobalStyle from './styles/global';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Copyright from './Components/Copyright';

function App() {
  const controlDirection = () => {
    const header = document.querySelector('header');
    if (header) {
      header.classList[window.scrollY > 1 ? 'add' : 'remove']('moving');
    }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlDirection);

      return () => {
          window.removeEventListener('scroll', controlDirection);
      };
  },[]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <SiteRoutes />
      <Footer />
      <Copyright />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
