import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/home/Home';
import Page1 from './components/pages/Page-1';
import Page2 from './components/pages/Page-2';
import Page3 from './components/pages/Page-3';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="main">
        <Route path="/" exact render={() => <Home />} />
        <Route path="/page-1" render={() => <Page1 />} />
        <Route path="/page-2" render={() => <Page2 />} />
        <Route path="/page-3" render={() => <Page3 />} />
      </main>

      <Footer />
    </BrowserRouter>
  );
}