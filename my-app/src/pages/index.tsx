import { User } from "@/dto";
import { Users } from "@/helpers/utils";
import { useRouter } from "next/router";
import { useState } from "react";


const Login = () => {

    const [Userpassword, setPassword] = useState("");
    const [username, setUserName] = useState("");

    const handlerChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }

    const handlerChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    };

    const router = useRouter();

    const handleClick = () => {

        if (username.length === 0 || Userpassword.length === 0) {
            alert("Por favor ingresa tus credenciales");
            return;
        }

        const userFound = Users.find((user) => user.email === username && user.password === Userpassword);
        console.log(userFound);

        if (!userFound) {
            alert("Usuario o contraseña incorrecta");
            return;
        }

        if (userFound) {
            router.push("/dashboard");
            // console.log("Botón clickeado");
            // router.push("/dashboard");
        }
    };


  return (
    <div>
        <h1> Mi app de TypeScript</h1>

        <h3>ingresa tus credenciales</h3>
            <div>
                <label htmlFor="email">Email:</label>
                <input value={username} onChange={handlerChangeUser} type="email" id="email" name="email" required />
            </div>
            <div>
                <label htmlFor="password">Contraseña:</label>
                <input value={Userpassword} onChange={handlerChangePassword} type="password" id="password" name="password" required />
            </div>
            <button type="submit" onClick={handleClick}>Iniciar Sesión</button>

    </div>
  );
};

export default Login;
