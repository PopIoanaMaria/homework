import './App.css';

function App() {
  const sayHelloAndBye = () => {
    console.log("Hello and also Bye :)");
  }
  return (
    <button onClick={sayHelloAndBye()}>Hey</button>
  );
}

export default App;
