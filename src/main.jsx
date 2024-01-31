// index.jsx

import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ThemeProvider } from "./components/contextTheme/ThemeContext.jsx";
import { SidebarProvider } from "./context/sidebarContext.jsx";
import { AudioProvider } from "./components/AudioCom/AudioContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <AudioProvider>
    <ThemeProvider>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </AudioProvider>
);
