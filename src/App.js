import logo from './logo.svg';
import './App.scss';
import {Link,BrowserRouter,Route,Routes} from 'react-router-dom';
import Self1HOME from './pages/Self1HOME';
import Self1Product0 from './pages/Self1Product';

function App() {
  return (
    <BrowserRouter basename = ''>
      <header>
        <nav>
          <Link to ="/self1Home">Home</Link>
          <Link to ="/self1Product">Product</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path = '/self1Home' element = {<Self1HOME/>}/>
          <Route path = '/self1Product' element = {<Self1Product0 />}/>

        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;
