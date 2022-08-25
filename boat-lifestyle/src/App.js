import logo from './logo.svg';
import './App.css';
import { Footer } from './components/Footer';
import { Navbar } from './components/navbar/Navbar';
import { InThePress } from './components/homepage/InThePress';
import { WhatTheySay } from './components/homepage/WhatTheySay';
import { Blog } from './components/blog/Blog';
import { Video } from './components/homepage/Video';
import { ComplexSlider } from './components/homepage/ComplexSlider';
import { ImageSlider3 } from './components/homepage/ImageSlider3';
import { ImageSlider1 } from './components/homepage/ImageSlider1';
import { BestSeller } from './components/homepage/BestSellers';
import { DailyDeal } from './components/homepage/DailyDeals';
import { DropestProducts } from './components/homepage/DropestProducts';
import { SmartWatches } from './components/homepage/SmartWatches';
import { TrendingWireless } from './components/homepage/TrendingWireless';
import { TopEarbuds } from './components/homepage/TopEarbuds';
import { TrendingWired } from './components/homepage/TrendingWired';
import { TrendingANC } from './components/homepage/TrendingANC';
import { BoatSuperheroes } from './components/homepage/BoatSuperheroes';







function App() {
  return (
    <div className="App">
   <Navbar/>
   <ImageSlider1/>
   <ComplexSlider/>
   <BestSeller/>
   <DailyDeal/>
   <DropestProducts/>
   <SmartWatches/>
   <TrendingWireless/>
   <TrendingANC/>
   <TopEarbuds/>
   <TrendingWired/>
   <BoatSuperheroes/>
   <ImageSlider3/>
   <Video/>
   <Blog/>
   <WhatTheySay/>
   <InThePress/>
   <Footer/>
    </div>
  );
}

export default App;
