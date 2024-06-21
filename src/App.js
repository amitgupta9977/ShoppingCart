import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
//commented the code

const App = () => {
  return (
    <div className="app">
      <Header />
      {/* Rest of your app content  likh do*/}
    </div>
  );
};

export default App;
