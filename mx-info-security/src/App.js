import "./App.css";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
 return (
  <div className="App">
    <Header/>
    <AppRouter />
  </div>)
}

export default App;
