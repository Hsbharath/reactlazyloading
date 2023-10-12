import './App.css';

import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {
  return (
    <div className='App bg-slate-900'>
      <Header title={'Lazy Loading Images'}/>
      <div className='w-full flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full md:w-3/5'>
          <Search/>
        </div>
        <div className='w-full md:w-2/5 bg-amber-400'>
        </div>
      </div>
    </div>
  );
}

export default App;
