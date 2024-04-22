import './App.css';
import {CarouselHeader} from './components/CarouselHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { SearchBar } from './components/SearchBar';
import { BookInfo } from './components/BookInfo';
import { BookDetails } from './components/BookDetails';
function App() {
  return (
    <div className="App">
      <CarouselHeader/>
      <NavBar/>
      <SearchBar/>
      <BookInfo/>
      <BookDetails/>
    </div>
  );
}

export default App;
