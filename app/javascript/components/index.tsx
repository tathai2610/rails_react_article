// import React from "react";
// import { StrictMode } from "react";
// import { RouterProvider } from "react-router-dom";
// import { createRoot } from "react-dom/client";
// import router from "../routes";

// document.addEventListener("turbo:load", () => {
//   createRoot(document.getElementById("root")).render(
//     <StrictMode>
//       <RouterProvider router={router} />
//     </StrictMode>
//   );
// });

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

document.addEventListener("turbo:load", () => {
  const root = createRoot(
    document.getElementById("root")
  );
  root.render(<App />);
});
