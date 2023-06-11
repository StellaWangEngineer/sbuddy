import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import CardGrid from "./components/CardGrid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <div className="App-content">
        <SearchBar />
        <div className="main-content">
          <CategoryFilter />
        </div>
      </div>
    </div>
  );
}

export default App;
