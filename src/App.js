import './App.css';
import {CarouselHeader} from './components/CarouselHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
 
function App() {
  return (
    <div className="App">
      <CarouselHeader/>
      <NavBar/>
    </div>
  );
}

export default App;
