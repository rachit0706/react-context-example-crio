import Dashboard from "./components/Dashboard";
import "./styles.css";
/**
 * Generates a unique id -> To be used for React Keys
 */
export const uid = () => Math.random().toString(36).substr(2, 9);

export default function App() {
  //The App has a main Dashboard Component
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}
