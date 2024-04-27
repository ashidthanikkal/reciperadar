import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Recipe_home from './pages/Recipe_home';
import Single_view from './pages/Single_view';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes><Route path='/' element={<Recipe_home></Recipe_home>}></Route></Routes>
      <Routes><Route path='/single-view/:id' element={<Single_view></Single_view>}></Route></Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
