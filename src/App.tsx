import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { Portfolio } from "./page/Portfolio";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Portfolio></Portfolio>
    </ThemeProvider>
  );
}

export default App;
