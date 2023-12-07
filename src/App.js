
import './App.css';
import Cover from './component/Cover';
import Header from './component/Header';
import Items from './component/Items';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Header/>
    <Cover/>
    <Items/>
    </div>
  );
}

export default App;
