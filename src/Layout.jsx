import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <header className="border-b border-base-200">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <Link to="/" className="font-semibold">Home</Link>
        </nav>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>

      <footer className="footer footer-center p-6 bg-base-200 text-base-content">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 items-center">
          <span>© {new Date().getFullYear()} Event App</span>
          <Link to="/legal" className="link link-hover">Legal Notice</Link>
          <Link to="/privacy" className="link link-hover">Privacy Policy</Link>
        </div>
      </footer>

    </div>
  );
};

export default Layout;