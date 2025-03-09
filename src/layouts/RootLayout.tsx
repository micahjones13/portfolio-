import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      <Header />
      <main id="main-content" className="flex-grow" role="main" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout; 