import Card from "./components/Card";
import CardClass from "./components/CardClass";
import Card3 from "./components/Card3";
import Rcuth from "./components/RCUTH";
function App() {
  return (
    <div>
      <Card name="Card 1" desc="This is Card 1"/>
      <CardClass name="Card Class Components"/>
      <Card3 /><hr/>
      <Rcuth />
    </div>
  );
}

export default App;
