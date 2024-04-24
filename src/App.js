import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles.css";
import Employees from "./components/Employees";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Employees />
      <Footer />
    </div>
  );
}
