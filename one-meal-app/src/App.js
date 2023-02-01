import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1> One Meal </h1>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
