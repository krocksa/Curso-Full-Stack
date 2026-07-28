import Card, { CardBody } from "./components/Card";
import List from "./components/List";

const App = () => {
  const list = ["Goku", "Naruto", "Tsubasa"];
  return (
    <>
      <Card>
        <CardBody title="Hola Mundo" text="Este es el texto" />
        <List data={list} />
      </Card>
    </>
  );
};
export default App;
