import { createRoot } from 'react-dom/client';
// import { render } from "react-dom"; notice: this is no longer supported in React 18
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux"; // 引入 Provider，绑定 store 到应用上
import store from "./store"; // 引入 store 实例
import App from "./app";

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> {/* 绑定 store */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById("root")
// );
