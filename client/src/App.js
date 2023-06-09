import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import CardGrid from './components/CardGrid';
import FilterBar from './components/FilterBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar />
      </header>
      {/* <div className="App-content">
        <FilterBar />
        <CardGrid />
      </div> */}
    </div>
  );
}

export default App;
