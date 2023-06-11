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
      <div className="App-search">
        <SearchBar />
      </div>
      <div className="App-content">
        <CategoryFilter />
      </div>
    </div>
  );
}

export default App;
