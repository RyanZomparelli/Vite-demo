import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Animals from "./Animals";

function App() {
  return (
    <div className="main">
      <Header />
      <Main />
      <Animals selectedAnimal="groundhog" />
    </div>
  );
}

export default App;
