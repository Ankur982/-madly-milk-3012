import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/navbar/Navbar';
import { InThePress } from './components/homepage/InThePress';
import { WhatTheySay } from './components/homepage/WhatTheySay';
import { ImageSlider } from './components/homepage/ImageSlider1';
import { Blog } from './components/blog/Blog';
import { Video } from './components/homepage/Video';
import { ComplexSlider } from './components/homepage/ComplexSlider';





function App() {
  return (
    <div className="App">
   <Navbar/>
   <ComplexSlider/>
   <ImageSlider/>
   <Video/>
   <Blog/>
   <WhatTheySay/>
   <InThePress/>
   <Footer/>
    </div>
  );
}

export default App;
