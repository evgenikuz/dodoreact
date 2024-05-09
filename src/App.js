import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import NewProducts from "./components/NewProducts/NewProducts";
import { Grid } from './components/Grid/Grid';

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}
      <Footer />
      <Grid/>    
      <NewProducts />
    </>
  );
}

export default App;
