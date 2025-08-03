import Card, { CardBody } from "./Components/Card";
import List from "./Components/List";

function App() {
  const lists = ["Goku", "Tanjiro", "Eren"];
  const handleSelect = (element: string) => {
    console.log("Imprimiento ", element);
  };
  return (
    <Card>
      <CardBody title={"Hola Mundo"} text={"El Texto del Componente"} />
      <List data={lists} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
