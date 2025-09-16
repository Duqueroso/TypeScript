import * as funciones from '@/helpers/utils';
import toUpperCaseLetter from '@/helpers/capitalizar';
import {Users} from '@/helpers/utils';
import React from 'react'
import { Car } from '@/dto';
// import type { Product } from '@/helpers/utils';
import { PRODUCTS } from '@/helpers/utils';
import { capitalize, toLowerCaseSafe, truncate, formatPrice } from '@/helpers/utils';


const Login = () => {

    const car1: Car = {
        motor: "V8",
        color: "Rojo",
        marca: "Ferrari",
        year: 2020,
        categoria: "Deportivo"
    };

    const a: number = 5;
    const b: number = 10;

    const resultadoSuma = funciones.sumar(a, b);
    const resultadoMultiplicacion = funciones.multiplicar(a, b);
    const resultadoResta = funciones.restar(a, b);

    console.log(resultadoSuma);
    console.log(resultadoMultiplicacion);
    console.log(resultadoResta);

    const name = "Juan";
    const nameCapitalized = toUpperCaseLetter(name);

    console.log(nameCapitalized); 

    console.log(Users);
    

  return (
    <div>
      <h1>Login Page</h1>
      <h2>Por favor ingresa tus credenciales</h2>
        <form>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Iniciar Sesión</button>
        </form>

        <br />

        <h1>Productos Disponibles</h1>
        <ul>
        {PRODUCTS.map((product) => (
            <li key={product.id}>
                {capitalize(product.name)} - {toLowerCaseSafe(product.brand)} - {formatPrice(product.price.amount, product.price.currency)}
            </li>
        ))}
        </ul>
        
    </div>
  )
}

export default Login;