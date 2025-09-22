export class userStore {
  url: string = "http://localhost:3000";

  async list() {
    const response = await fetch(`${this.url}/api/hello`);
    return response.json();
  }

  // @modifyCreateUser
  create(): string {
    // Users.push(newUser);
    return "Estoy creando un usuario";
  }

  update(): string {
    return "Estoy actualizando un usuario";
  }

  delete(): string {
    return "Estoy eliminando un usuario";
  }

  findByName(name: string) {
    return console.log(`Estoy buscando un usuario por su nombre: ${name}`);
  }
}
