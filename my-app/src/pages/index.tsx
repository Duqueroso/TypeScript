// import Image from "next/image";

import { CircleCheckBig, CircleX } from "lucide-react";
import { useState } from "react";

export default function Home() {
  // type Currency = "USD" | "COP";

  // interface Product {
  //   id: number;
  //   name: string;
  //   brand: string;
  //   price: number;
  //   currency: Currency;
  //   quantity: number;
  //   category: string;
  //   isActive: boolean;
  // }

  // interface Address {
  //   country: string;
  //   city: string;
  //   state: string;
  //   street: string;
  //   zip?: string;
  // }

  // type Role = "admin" | "user";

  // interface User {
  //   id: number;
  //   username: string;
  //   email: string;
  //   phone?: string;
  //   address: Address;
  //   isActive: boolean;
  //   role: Role;
  // }

  // const products: Product[] = [
  //   {
  //     id: 1,
  //     name: "Laptop",
  //     brand: "Dell",
  //     price: 1200,
  //     currency: "USD",
  //     quantity: 10,
  //     category: "Electronics",
  //     isActive: true,
  //   },
  //   {
  //     id: 2,
  //     name: "Smartphone",
  //     brand: "Apple",
  //     price: 999,
  //     currency: "USD",
  //     quantity: 5,
  //     category: "Electronics",
  //     isActive: true,
  //   },
  //   {
  //     id: 3,
  //     name: "Headphones",
  //     brand: "Sony",
  //     price: 199,
  //     currency: "USD",
  //     quantity: 15,
  //     category: "Accessories",
  //     isActive: false,
  //   },
  //   {
  //     id: 4,
  //     name: "Coffee Maker",
  //     brand: "Keurig",
  //     price: 89,
  //     currency: "USD",
  //     quantity: 10,
  //     category: "Home Appliances",
  //     isActive: true,
  //   },
  //   {
  //     id: 5,
  //     name: "Blender",
  //     brand: "Ninja",
  //     price: 129,
  //     currency: "USD",
  //     quantity: 8,
  //     category: "Home Appliances",
  //     isActive: true,
  //   },
  //   {
  //     id: 6,
  //     name: "Running Shoes",
  //     brand: "Nike",
  //     price: 890000,
  //     currency: "COP",
  //     quantity: 5,
  //     category: "Footwear",
  //     isActive: true,
  //   },
  //   {
  //     id: 7,
  //     name: "Backpack",
  //     brand: "North Face",
  //     price: 150,
  //     currency: "USD",
  //     quantity: 12,
  //     category: "Accessories",
  //     isActive: false,
  //   },
  //   {
  //     id: 8,
  //     name: "Smartwatch",
  //     brand: "Samsung",
  //     price: 299,
  //     currency: "USD",
  //     quantity: 7,
  //     category: "Electronics",
  //     isActive: true,
  //   },
  //   {
  //     id: 9,
  //     name: "Electric Toothbrush",
  //     brand: "Philips",
  //     price: 49,
  //     currency: "USD",
  //     quantity: 20,
  //     category: "Personal Care",
  //     isActive: true,
  //   },
  //   {
  //     id: 10,
  //     name: "Gaming Console",
  //     brand: "Sony",
  //     price: 499,
  //     currency: "USD",
  //     quantity: 4,
  //     category: "Electronics",
  //     isActive: true,
  //   },
  //   {
  //     id: 11,
  //     name: "Wireless Charger",
  //     brand: "Anker",
  //     price: 39,
  //     currency: "USD",
  //     quantity: 15,
  //     category: "Accessories",
  //     isActive: true,
  //   },
  //   {
  //     id: 12,
  //     name: "4K TV",
  //     brand: "LG",
  //     price: 5000000,
  //     currency: "COP",
  //     quantity: 6,
  //     category: "Electronics",
  //     isActive: false,
  //   },
  //   {
  //     id: 13,
  //     name: "Smart TV",
  //     brand: "Samsung",
  //     price: 3000000,
  //     currency: "COP",
  //     quantity: 8,
  //     category: "Electronics",
  //     isActive: true,
  //   },
  //   {
  //     id: 14,
  //     name: "Tablet",
  //     brand: "Apple",
  //     price: 600,
  //     currency: "USD",
  //     quantity: 9,
  //     category: "Electronics",
  //     isActive: true,
  //   },
  //   {
  //     id: 15,
  //     name: "Fitness Tracker",
  //     brand: "Fitbit",
  //     price: 150,
  //     currency: "USD",
  //     quantity: 11,
  //     category: "Accessories",
  //     isActive: true,
  //   },
  // ];

  // const users: User[] = [
  //   {
  //     id: 1,
  //     username: "john_doe",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     address: {
  //       country: "USA",
  //       city: "New York",
  //       state: "NY",
  //       street: "123 Main St",
  //       zip: "10001",
  //     },
  //     isActive: true,
  //     role: "user",
  //   },
  //   {
  //     id: 2,
  //     username: "jane_smith",
  //     email: "jane@example.com",
  //     phone: "987-654-3210",
  //     address: {
  //       country: "USA",
  //       city: "Los Angeles",
  //       state: "CA",
  //       street: "456 Elm St",
  //       zip: "90001",
  //     },
  //     isActive: true,
  //     role: "admin",
  //   },
  //   {
  //     id: 3,
  //     username: "alice_wonder",
  //     email: "alice@example.com",
  //     phone: "555-123-4567",
  //     address: {
  //       country: "USA",
  //       city: "Chicago",
  //       state: "IL",
  //       street: "789 Oak St",
  //       zip: "60601",
  //     },
  //     isActive: true,
  //     role: "user",
  //   },
  //   {
  //     id: 4,
  //     username: "bob_builder",
  //     email: "bob@example.com",
  //     phone: "444-555-6666",
  //     address: {
  //       country: "USA",
  //       city: "Houston",
  //       state: "TX",
  //       street: "321 Pine St",
  //       zip: "77001",
  //     },
  //     isActive: true,
  //     role: "user",
  //   },
  //   {
  //     id: 5,
  //     username: "charlie_brown",
  //     email: "charlie@example.com",
  //     phone: "333-444-5555",
  //     address: {
  //       country: "USA",
  //       city: "Phoenix",
  //       state: "AZ",
  //       street: "654 Maple St",
  //       zip: "85001",
  //     },
  //     isActive: true,
  //     role: "user",
  //   },
  // ];

  // const [state, setState] = useState(false);

  // const handleClick = () => {
  //   setState(!state);
  // };

  class Coder {
    name: string;
    age: number;
    languages: string[];

    constructor(name: string, age: number, languages: string[]) {
      this.name = name;
      this.age = age;
      this.languages = languages;
    }

    saludar() {
      return `Hola, mi nombre es ${this.name}, tengo ${this.age} años y se ${this.languages.join(", ")}`;
    }
  }


  class Student extends Coder {
    course: string;
    university?: string;

    constructor(name: string, age: number, languages: string[], course: string, university?: string) {
      super(name, age, languages);
      this.course = course;
      this.university = university;
    }

    estudiar() {
      return `El estudiante ${this.name} está estudiando ${this.course}.`;
    }
  }

  class vehiculo {
    marca: string;
    modelo: string;
    year: number;
    color: string;
    categoria?: string;

    constructor(marca: string, modelo: string, year: number, color: string, categoria?: string) {
      this.marca = marca;
      this.modelo = modelo;
      this.year = year;
      this.color = color;
      this.categoria = categoria;

    }

    prender() {
      return `El vehículo ${this.marca} ${this.modelo} del año ${this.year} de color ${this.color} está encendido.`;
    }
  }


  // Crear instancias de las clases
  
  class Moto extends vehiculo {
    tipo: string;

    constructor(marca: string, modelo: string, year: number, color: string, tipo: string, categoria?: string) {
      super(marca, modelo, year, color, categoria);
      this.tipo = tipo;
    }

    hacerCaballito() {
      return `La moto ${this.marca} ${this.modelo} está haciendo un caballito.`;
    }
  }

  

  const coder1 = new Coder("Juan", 30, ["JavaScript", "TypeScript", "Python"]);
  const coder2 = new Coder("María", 25, ["Java", "C#", "Ruby"]);

  const vehiculo1 = new vehiculo("Toyota", "Corolla", 2020, "Rojo", "Sedán");
  const vehiculo2 = new vehiculo("Honda", "Civic", 2019, "Azul");

  const moto1 = new Moto("Yamaha", "YZF-R3", 2020, "Negro", "Deportiva");

  // Usar los métodos de las clases

  console.log(moto1.hacerCaballito());
  console.log(coder1.saludar());
  console.log(vehiculo1.prender());
 

  return (
    // Todo debe de estar dentro de una sola etiqueta
    <div>
      {/* <button className="" onClick={handleClick}>
        Click me
      </button>
      {state && (
        <p>
          <section>
            {products.map((product) => (
              <li className="list-item" key={product.name}>
                <div>El nombre del producto es: {product.name}</div>
                <div>La marca del producto es: {product.brand}</div>
                <div>
                  El precio del producto es: {product.price} {product.currency}
                </div>
                <div>La cantidad disponible es: {product.quantity}</div>
                <div>El producto está disponible: {product.isActive ? <CircleCheckBig /> : <CircleX />}</div>
              </li>
            ))}
          </section>
        </p>
      )} */}
    </div>
  );
}
