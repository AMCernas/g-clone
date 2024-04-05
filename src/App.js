import './App.css';
import {CarouselHeader} from './components/CarouselHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { SearchBar } from './components/SearchBar';
import { BookInfo } from './components/BookInfo';

function App() {
  return (
    <div className="App">
      <CarouselHeader/>
      <NavBar/>
      <SearchBar/>
      <BookInfo/>
    </div>
  );
}

export default App;
