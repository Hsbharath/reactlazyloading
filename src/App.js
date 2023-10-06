import './App.css';

import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="App">
      <Header title={'Lazy Loading Images'}/>
      <Search />
    </div>
  );
}

export default App;
