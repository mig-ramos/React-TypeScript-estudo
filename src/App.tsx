import React from "react";

function App() {
  // 1 - variaveis
  const name: string = "Miguel";
  const age: number = 62;
  const isWorking: boolean = true;

  // 2 - funções
const userGreeting = (name: string): string => {
  return `Olá ${name}!`;
}


  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {isWorking && (
        <div>
          <p>Está trabalhando!</p>
        </div>
      )}
      <h3>{userGreeting(name)}</h3>
    </div>
  );
}

export default App;
