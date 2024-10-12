import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/header.jsx";
import Product from "./components/product.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <Product /> */}
    <Header />
    {/* <App /> */}
  </StrictMode>
);
