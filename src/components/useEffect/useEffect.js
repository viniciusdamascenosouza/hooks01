import { useState, useEffect } from "react";
import "./useEffect.css";

const UseEffect = () => {
  const [resourceType, setResourceType] = useState("posts");

  useEffect(() => {
    // aqui é passada api com os dados

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
    // logo abaixo se passarmos o useEffect sem uma lista, ele será executando sempre que o componente for atualizado
    // Se passarmos com alguma lista ele será executando sempre que o valor que for passado na lista for alterado
  }, [resourceType]);

  useEffect(() => {
    // componentDidMount
    // dentro de um useEffect, o comportamento do componentDidMount utilizando uma função de efeito com uma dependência vazia, o que faz com que o efeito seja executado apenas uma vez, após a renderização inicial do componente.
    console.log("componentDidMount");

    return () => {
        // quando pag. for recarregada
      console.log("componentWillUnmount");
    };
  }, []);

  const changeResourseType = (resourceType) => {
    setResourceType(resourceType);
  };

  return (
    <div>
      <h1>{resourceType}</h1>
      <div className="buttons">
        <button onClick={() => changeResourseType("posts")}>Posts</button>
        <button onClick={() => changeResourseType("comments")}>Comments</button>
        <button onClick={() => changeResourseType("todos")}>all</button>
      </div>
    </div>
  );
};

export default UseEffect;
