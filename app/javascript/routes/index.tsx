// import React from "react";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from "../components/Home";
// import Articles from "../components/Articles";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "articles",
//     element: <Articles />
//   }
// ]);

// export default router;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Articles from "../components/Articles";
import Article from "../components/Article";
import NewArticle from "../components/NewArticle";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/article" element={<NewArticle />} />
    </Routes>
  </Router>
);
