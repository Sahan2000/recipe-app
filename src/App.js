import TopNav from "./components/TopNav.js";
import Features from "./components/Features.js";
import Delivery from "./components/Delivery.js";
import TopPicks from "./components/TopPicks.js";
import Meals from "./components/Meal.js";
import Categories from "./components/Categories.js";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopNav/>
        <Features/>
        <Delivery/>
      <TopPicks/>
        <Meals/>
        <Categories/>
        <NewsLetter/>
        <Footer/>
    </div>
  );
}

export default App;
