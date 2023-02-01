import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Search from "./Components/Search";

function App() {
  // const URL = "http://127.0.0.1:5000/user";

  return (
    <div className="App">
      {/* <header className="App-header">One-Meal</header> */}
      {/* <h1> One Meal </h1> */}
      <BrowserRouter>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
