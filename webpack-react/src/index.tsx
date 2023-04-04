import { createRoot } from 'react-dom/client';
// import { render } from "react-dom"; notice: this is no longer supported in React 18
import { BrowserRouter } from "react-router-dom";
import App from "./app";

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
