import "./styles/index.scss";

//
import Header from "./components/Header/Header";
import MainRouter from "./routes/mainRouter";

function App() {
  return (
      <div className="App">
        <Header />
        <MainRouter />
      </div>
  );
}

export default App;