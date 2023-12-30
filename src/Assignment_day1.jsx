
import React from 'react';
import './App.css';

const Header = ({ title }) => (
  <header className="header">
    <h1>{title}</h1>
  </header>
);

const Sidenav = ({ title }) => (
  <aside className="sidenav">
    <h2>{title}</h2>
  </aside>
);

const MainContent = ({ title }) => (
  <main className="main-content">
    <h2>{title}</h2>
  </main>
); 

const Footer = ({ title }) => (
  <footer className="footer">
    <h3>{title}</h3>
  </footer>
);

const Assignment = () => (
  <div className="assignment">
    <Header title="Header" />
    <div className="main-container">
      <Sidenav title="Sidenav" />
      <MainContent title="Main Content" />
    </div>
    <Footer title="Footer" />
  </div>
);

export default Assignment;
