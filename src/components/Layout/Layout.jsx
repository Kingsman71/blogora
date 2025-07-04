import React from 'react';
import NavBar from '../NavBar/NavBar';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <NavBar />
      </header>
      <main className="main">
        {children}
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} BlogApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
