import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";
import $ from "jquery";
import "jquery-mask-plugin"; // Importando o plugin de máscara

function Payment() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [loading, setLoading] = useState(false); // Estado para indicar se a requisição está em andamento
  const [error, setError] = useState(null); // Estado para erros
  const navigate = useNavigate();

  // Usando useEffect para aplicar a máscara de telefone quando o componente for montado
  useEffect(() => {
    // Aplica a máscara para o telefone
    $("#telefone").mask("(00) 9 0000-0000");
  }, []);

  // Função para enviar os dados para o backend
  const submit = async (e) => {
    e.preventDefault();
  
    // Remove todos os caracteres não numéricos do celular
    const celularLimpo = celular.replace(/\D/g, ''); // Remove parênteses, espaços e hífen
  
    const usuario = {
      nome,
      email,
      celular: celularLimpo // Envia o celular sem formatação
    };
  
    try {
      // Envia o request POST para o backend
      const response = await fetch("http://127.0.0.1:3000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuario), // Envia os dados limpos
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
    <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
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
            disabled={loading} // Desabilita o botão enquanto a requisição está em andamento
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

export default Payment;
