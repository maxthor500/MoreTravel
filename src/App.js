import Card from "./components/Card";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import data from "./data";


function App() {
  return (
    <div className="App">
        <Navbar />
        <MainContent />
        <div className="container-cards">
          <Card data={data}/>
        </div>
    </div>
  );
}

export default App;
