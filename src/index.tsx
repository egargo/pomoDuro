import ReactDOM from "react-dom/client";
import * as ServiceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import "./index.scss";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);

// to log results (for example: reportWebVitals(console.log))
// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
ServiceWorkerRegistration.register();
