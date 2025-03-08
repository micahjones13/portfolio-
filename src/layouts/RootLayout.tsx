import { Link, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white">
        <nav className="w-full max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold">Micah Jones</Link>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <main className="flex-grow w-full">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="w-full max-w-6xl mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Micah Jones. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout; 