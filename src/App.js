import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import List from './components/List';
import Displaymovie from './components/Displaymovie';


function App() {
  return (
    
      <div className='container'>
     <h1>Ricky & Morty Characters</h1>
     <nav className='navbar sticky-top navbar-light
          bg-dark'>
         <h1 className='navbar-brand text-light'>
            Rick and Morty</h1>
      </nav>
       <Displaymovie/>
      <List/>
    </div>
  );
}

export default App;
