import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const RootLayout = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
        <nav className="w-full max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Micah Jones
            </Link>
            <div className="flex items-center space-x-6">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
        <div className="w-full max-w-6xl mx-auto px-4 py-6 text-center">
          <p>&copy; {new Date().getFullYear()} Micah Jones. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout; 