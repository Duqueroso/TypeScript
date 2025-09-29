// import * as funciones from '@/helpers/utils';
// import toUpperCaseLetter from '@/helpers/capitalizar';
// import {Users} from '@/helpers/utils';
import { Card } from '@/components/card';
import { userStore } from '@/services/users';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
// import { Car } from '@/dto';
// // import type { Product } from '@/helpers/utils';
// import { PRODUCTS } from '@/helpers/utils';
// import { capitalize, toLowerCaseSafe, truncate, formatPrice } from '@/helpers/utils';
import { arrayCard } from '../../helpers/utils';

const Dashboard = () => {

  const [userList, setUserList] = useState([]);

  const router = useRouter();

  const goToBack = () => {
    router.back();
  };


  // // Genericos en TypeScript
  // // Ejemplo de una función genérica
  // function identify<T>(arg: T): T {
  //   return arg;
  // }
  // const output1 = identify<string>("Hola Mundo");
  // const output2 = identify<number>(100);
  // console.log(output1, output2);

  // // Funcion fleca genérica
  // const identifyFlecha = <T,>(arg: T): T => {
  //   return arg;
  // };
  // const output3 = identifyFlecha<boolean>(true);
  // console.log(output3);

  // // Funcion generica y array
  // const identifyArray = <T,>(arg: T[]): T => {
  //   return arg[0];
  // };
  // const output4 = identifyArray<number>([1, 2, 3, 4, 5]);
  // console.log(output4);

  // // Ultimo elemento de un array
  // function lastElement<T>(arg: T[]): T {
  //   return arg[arg.length - 1];
  // }

  // const lastElement1 = lastElement<number>([1, 2, 3, 4, 5]);
  // console.log(lastElement1);

  // // Reverse un array
  // function reverseArray<T>(arg: T[]): T[] {
  //   return arg.reverse();
  // }

  // const reverseArray1 = reverseArray<number>([1, 2, 3, 4, 5]);
  // console.log(reverseArray1);

  // //

  // function wrapInTripleArray<T>(arg: T): T[] {
  //   return Array(3).fill(arg);
  // }

  // const wrapInTripleArray1 = wrapInTripleArray<string>("Hola");
  // console.log(wrapInTripleArray1);

    // const car1: Car = {
    //     motor: "V8",
    //     color: "Rojo",
    //     marca: "Ferrari",
    //     year: 2020,
    //     categoria: "Deportivo"
    // };

    // const a: number = 5;
    // const b: number = 10;

    // const resultadoSuma = funciones.sumar(a, b);
    // const resultadoMultiplicacion = funciones.multiplicar(a, b);
    // const resultadoResta = funciones.restar(a, b);

    // console.log(resultadoSuma);
    // console.log(resultadoMultiplicacion);
    // console.log(resultadoResta);

    // const name = "Juan";
    // const nameCapitalized = toUpperCaseLetter(name);

    // console.log(nameCapitalized); 

    // console.log(Users);

  const getUsers = () => {
        const newUserStore = new userStore();
        const oUsers = newUserStore.list();

        oUsers.then((data) => {
            setUserList(data.users);
        });
    }
    

  return (
    <div>
      <h1>Dashboard</h1>

      <button onClick={getUsers}> Obtener Usuarios </button>

      <ul>
        {userList.map((item: { name: string; age: number }, index: number) => (
          <li key={index}>{item.name} - {item.age} años</li>
        ))}
      </ul>

        <br />

        {/* <h1>Productos Disponibles</h1>
        <ul>
        {PRODUCTS.map((product) => (
            <li key={product.id}>
                {capitalize(product.name)} - {toLowerCaseSafe(product.brand)} - {formatPrice(product.price.amount, product.price.currency)}
            </li>

        ))}
        </ul> */ }

        <div className='card-container' > 
          {arrayCard.map((card, index) => (
            <div key={index} className='m-2'>
              <Card 
            title={card.title}
            description={card.description}
            type={card.type}
            />
            </div>
          ))}
        </div>

          <button onClick={goToBack}> Regresar </button>

    </div>
  )
}

export default Dashboard;