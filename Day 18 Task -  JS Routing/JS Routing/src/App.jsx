import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Send from './component/Send/Send';
import Gallery from './component/Galleray/Gallery';
import NotFound from "./component/NotFound/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout/Layout';
import Cats from './component/Cats/Cats';
import Dogs from './component/Dogs/Dogs';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Layout />, children: [
        {
          path: '/gallery', element: <Gallery />, children: [
            { path: 'cats', element: <Cats /> },
            { path: 'dogs', element: <Dogs /> },
          ]
        },
        { path: '/send', element: <Send /> },
        { path: '*', element: <NotFound /> },]
    },

  ]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Send />
      <Gallery /> */}
    </>
  )
}

export default App
