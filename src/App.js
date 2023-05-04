import "./App.css";
import { Header } from "./components/header/Header";
import { MealSummary } from "./components/meal-summary/MealSummary";
import { Meals } from "./components/meals/Meals";

function App() {
  return <div className="App">
    <Header/>
    <MealSummary/>
    <Meals/>
  </div>;
}

export default App;
