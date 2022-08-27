import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './components/routes/Routes';
import { Register } from './components/Register';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';
import { ProductItemsPage } from './components/ProductItemsPage/ProductCollection';









function App() {
  return (
    <div className="App">
      <AllRoutes/>
    {/* <Navbar/>
    <ProductItemsPage/>
    <Footer/>  */}
    </div>
  );
}

export default App;
