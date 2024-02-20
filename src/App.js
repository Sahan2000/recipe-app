import TopNav from "./components/TopNav.js";
import Features from "./components/Features.js";
import Delivery from "./components/Delivery.js";
import TopPicks from "./components/TopPicks.js";
import Meals from "./components/Meal.js";
import Categories from "./components/Categories.js";

function App() {
  return (
    <div className="App">
      <TopNav/>
        <Features/>
        <Delivery/>
      <TopPicks/>
        <Meals/>
        <Categories/>
    </div>
  );
}

export default App;
