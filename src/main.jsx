import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home.jsx';
import AboutMe from './pages/AboutMe.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Projects from './pages/Projects.jsx';
import Welcome from './pages/Welcome.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />} errorElement={<ErrorPage />}>
      <Route index element={<Welcome />} />
      <Route path="about" element={<AboutMe />} />
      <Route path="works" element={<Projects />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
