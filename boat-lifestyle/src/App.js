import logo from './logo.svg';
import './App.css';
import { AllRoutes } from './components/routes/Routes';
import { Register } from './components/Register';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/Footer';
import { Login } from './components/Login';








function App() {
  return (
    <div className="App">
      {/* <AllRoutes/> */}
      <Navbar/>
     <Login/>
      <Footer/>
    </div>
  );
}

export default App;
