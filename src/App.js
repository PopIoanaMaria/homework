import './App.css';

function App() {
  const sayHello = () => {
    console.log('Hey consola');
  }

  return (
    <button onClick={sayHello()}>Hey</button>
  );
}

export default App;
