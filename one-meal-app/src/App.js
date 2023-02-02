import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Pages from "./pages/Pages";
import Search from "./Components/Search";
// import UserPage from "./Components/UserPage";

function App() {
  // const URL = "http://127.0.0.1:5000/user";
  return (
    <div className="App">
      <BrowserRouter>
        {/* <header className="App-header">One-Meal</header> */}
        {/* <UserPage /> */}
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
