import Menu from "./components/Menu";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Menu
        show={{
          coins: true,
          chat: true,
          configurator: true,
          collections: true,
          settings: true,
        }}
      />
    </div>
  );
}

export default App;
