/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.js';
import Home from './pages/Home.js';
import Services from './pages/Services.js';
import About from './pages/About.js';
import Consult from './pages/Consult.js';
import Contact from './pages/Contact.js';
import Privacy from './pages/Privacy.js';
import Terms from './pages/Terms.js';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="legacy" element={<About />} />
          <Route path="consult" element={<Consult />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}