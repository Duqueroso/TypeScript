// import { User } from "@/dto";
import { Button } from "@/components/Button";
import { Authenticate, notification } from "@/helpers/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [Userpassword, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [loader, setLoader] = useState(false)

  const handlerChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handlerChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const router = useRouter();

  const handleClick = () => {
    const userFound = Authenticate(username, Userpassword);

    if (userFound) {
      notification("Usuario autenticado exitosamente", "success");
        setLoader(true)
        setTimeout(() => {
          setLoader(false)
        }, 3000)
      // Redirigir al usuario al dashboard
      window.setTimeout(() => {
        router.push("/dashboard");
      }, 2000);
    } else if (username.length === 0 || Userpassword.length === 0) {
      notification("Por favor llena todos los campos", "warning");
    } else {
      notification("Credenciales incorrectas, intenta de nuevo", "error");
      setUserName("");
      setPassword("");
    }
    
  };



  // newUserStore.create();
  // newUserStore.update();
  // newUserStore.delete();
  // newUserStore.findByName("Juan");

  return (
    <div className="container-login">
      <h1> Mi app de TypeScript</h1>

      <h3>ingresa tus credenciales</h3>
      <div>
        <label typeof="email">Correo</label> <br />
        <input
          value={username}
          onChange={handlerChangeUser}
          type="email"
          id="email"
          name="email"
          required
        />
      </div>
      <div>
        <label typeof="password">Contraseña</label> <br />
        <input
          value={Userpassword}
          onChange={handlerChangePassword}
          type="password"
          id="password"
          name="password"
          required
        />
      </div>

      <Button
        loading={loader}
        variant="secondary"
        size="medium"
        text="Iniciar Sesion"
        click={handleClick}
      />


      <ToastContainer />

      {/* <div> {newUserStore.create()} </div> */}
    </div>
  );
};

export default Login;
