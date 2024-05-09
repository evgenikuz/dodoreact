import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import NewProducts from "./components/NewProducts/NewProducts";
function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />     
      <NewProducts />
    </>
  );
}

export default App;
