import './App.css';
import {Header} from './components/Header/Header'
import {Main} from './components/Main/Main'
import {Footer} from './components/Footer/Footer'
import { Card } from './components/Card/Card';
import { Grid } from './components/Grid/Grid';


function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <Grid/>
    </>
  );
}

export default App;
