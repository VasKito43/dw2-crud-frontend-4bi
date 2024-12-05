import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";
import $ from "jquery";
import "jquery-mask-plugin";

function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    $("#telefone").mask("(00) 9 0000-0000");
  }, []);


  const submit = async (e) => {
    e.preventDefault();
  

    const celularLimpo = celular.replace(/\D/g, '');
  
    const usuario = {
      nome,
      email,
      celular: celularLimpo
    };
  
    try {

      const response = await fetch("http://127.0.0.1:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario),
      });
  
      if (response.ok) {
        navigate("/dashboard");
      } else {
        alert("Erro ao cadastrar o usuário.");
      }
    } catch (error) {
      console.error(error);
      alert("Erro ao cadastrar o usuário.");
    }
  };
  

  return (
    <div className="h-screen w-5/6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <Form>
        <div className="w-full flex items-center justify-center text-xl font-bold mt-6">ADD NEW STUDENT</div>

        <div className="text-gray-500 mt-2">
          Enter the information to register the student
        </div>

        <form onSubmit={submit}>
          <p className="text-gray-600 font-bold text-base">Nome</p>
          <input
            type="text"
            name="name"
            id="name"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Enter your name"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />

          <p className="text-gray-600 font-bold text-base mt-4">Email</p>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />

          <p className="text-gray-600 font-bold text-base mt-4">Celular</p>
          <input
            type="tel"
            name="telefone"
            id="telefone"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            placeholder="Enter your number"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />

          <button
            type="submit"
            disabled={loading}
            className={`text-white font-bold w-full rounded-md h-11 mt-6 ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}`}
          >
            {loading ? "Adding..." : "Add Student"}
          </button>

          {error && (
            <p className="text-red-600 mt-4 text-center">
              Erro: {error}
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}

export default Register;
