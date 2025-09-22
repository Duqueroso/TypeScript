// import * as funciones from '@/helpers/utils';
// import toUpperCaseLetter from '@/helpers/capitalizar';
// import {Users} from '@/helpers/utils';
import { userStore } from '@/services/users';
import { useRouter } from 'next/router';
import React, { useState } from 'react'
// import { Car } from '@/dto';
// // import type { Product } from '@/helpers/utils';
// import { PRODUCTS } from '@/helpers/utils';
// import { capitalize, toLowerCaseSafe, truncate, formatPrice } from '@/helpers/utils';

const Dashboard = () => {

  const [userList, setUserList] = useState([]);

  const router = useRouter();

  const goToBack = () => {
    router.back();
  };

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


          <button onClick={goToBack}> Regresar </button>

    </div>
  )
}

export default Dashboard;