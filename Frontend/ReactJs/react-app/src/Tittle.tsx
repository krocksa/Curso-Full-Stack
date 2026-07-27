const Tittle = () => {
  const nombre: string = "Krocksa";
  if (nombre) {
    return <h1>Hola {nombre}!</h1>;
  }
  return (
    <>
      <h1>Hola Mundo!</h1>
    </>
  );
};
export default Tittle;
