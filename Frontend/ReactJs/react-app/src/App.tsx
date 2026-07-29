import Card, { CardBody } from "./components/Card";
import List from "./components/List";

const App = () => {
  const list: string[] = [];
  const handleSelect = (element: string) => {
    console.log(`Imprimiendo ${element}`);
  };

  //Renderizado condicional
  const contenido = () =>
    list.length ? (
      <List data={list} onSelect={handleSelect} />
    ) : (
      <h4>Sin Elementos para mostrar</h4>
    );

  //Circuit operator
  /*   const contenido2 = () =>
    list.length !== 0 && (
      <List data={list} onSelect={handleSelect} />
    )  */
  
  return (
    <>
      <Card>
        <CardBody title="Hola Mundo" text="Este es el texto" />
        {contenido()}
      </Card>
    </>
  );
};
export default App;
