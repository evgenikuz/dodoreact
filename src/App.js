import "./App.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { DesktopMenu } from "./components/DesktopMenu/DesktopMenu";

function App() {
  return (
    <>
      <Header />
      <DesktopMenu/>
      {/* в main добавлять все компоненты */}
      <Main/> 
      <Footer />
    </>
  );
}

export default App;
