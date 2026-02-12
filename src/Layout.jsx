import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        Footer
      </footer>
    </>
  );
};

export default Layout;