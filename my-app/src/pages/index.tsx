// import Image from "next/image";

import { useState } from "react";

export default function Home() {
  const FizzBuzz = (limit: number): void => {
    for (let i: number = 1; i <= limit; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  };

  FizzBuzz(100);

  const [result, setResult] = useState(0);

  const clickHandler = () => {
    const laSuma = sumar(2, 3);
    setResult(laSuma);
  };

  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  return (
    // Todo debe de estar dentro de una sola etiqueta
    <div>
      <h1>Resultado: {result}</h1>
      <button onClick={clickHandler}>Calcular</button>
    </div>
  );
}
