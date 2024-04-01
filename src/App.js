import './App.css';
import {CarouselHeader} from './components/CarouselHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { SearchBar } from './components/SearchBar';
function App() {
  return (
    <div className="App">
      <CarouselHeader/>
      <NavBar/>
      <SearchBar/>
    </div>
  );
}

export default App;
