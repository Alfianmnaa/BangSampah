import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch({ type: "LOGIN", payload: user });
        // ...
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        setError(true);
        // ..
      });
  };

  return (
    <div className="container-login min-h-screen flex items-center justify-center md:py-[120px] py-[50px] mx-4">
      <form onSubmit={handleLogin} className="login-container border-2 border-lightgray rounded-lg p-8 w-96 h-auto">
        <p className="login-text text-2xl mb-6 font-bold text-center">Masuk</p>
        <div className="input1 mb-6 flex flex-col">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input type="email" id="email" className="input-email border-b border-black p-2 outline-none" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input2 flex flex-col mb-6">
          <label htmlFor="password" className="mb-1">
            Password:
          </label>
          <input type="password" id="password" className="input-password p-2 outline-none border-b border-black" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="button-login w-full py-2 mt-2 text-white bg-green-700 text-xl font-bold rounded-md border-none transition duration-200 cursor-pointer hover:brightness-90">
          Login
        </button>
        {error && <p className="wrong-input mt-4 text-center text-red-500">Wrong email or password!</p>}
      </form>
    </div>
  );
};

export default Login;
