import "./App.css";
import { GlobalStyles } from "./globalStyles";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./providers/AuthProvider";
import { TaskProvider } from "./providers/TaskProvider";
import { ThemeProvider } from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <TaskProvider>
          <GlobalStyles />
          <AppRoutes />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
