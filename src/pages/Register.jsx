import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        username,
        email,
      });
      navigate("/masuk");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  //   const handleRegister = (e) => {
  //     e.preventDefault();
  //     const username = e.target[0].value;
  //     const email = e.target[1].value;
  //     const password = e.target[2].value;

  //     createUserWithEmailAndPassword(auth, email, password)
  //       .then((userCredential) => {
  //         // Signed up
  //         const user = userCredential.user;
  //         console.log(user);

  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         console.log(errorCode, errorMessage);
  //         setError(true);
  //         // ..
  //       });
  //     // Your login logic here
  //   };

  return (
    <div className="container-register md:py-[120px] py-[50px] min-h-screen flex items-center justify-center">
      <form onSubmit={handleRegister} className="login-container border-2 border-lightgray rounded-lg p-8 w-96 h-auto mx-4">
        <p className="login-text text-2xl mb-6 font-bold text-center">Daftar</p>
        <div className="input2 flex flex-col mb-6">
          <label htmlFor="username" className="mb-1">
            Username:
          </label>
          <input required type="text" id="username" className="input-username p-2 outline-none border-b border-black" />
        </div>
        <div className="input1 mb-6 flex flex-col">
          <label htmlFor="email" className="mb-1">
            Email:
          </label>
          <input required type="email" id="email" className="input-email border-b border-black p-2 outline-none" />
        </div>
        <div className="input2 flex flex-col mb-6">
          <label htmlFor="password" className="mb-1">
            Password:
          </label>
          <input required type="password" id="password" className="input-password p-2 outline-none border-b border-black" />
        </div>
        <button type="submit" className="button-login w-full py-2 mt-2 text-white bg-green-700 text-xl font-bold rounded-md border-none transition duration-200 cursor-pointer hover:brightness-90">
          Daftar
        </button>
        {error && <p className="wrong-input mt-4 text-center text-red-500">Wrong email or password!</p>}
      </form>
    </div>
  );
};

export default Register;
