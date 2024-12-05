import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "./Form";

function Update() {
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();

    if (!id || !nome || !email || !celular) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://127.0.0.1:3000/usuarios/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, celular }),
      });

      if (response.ok) {
        alert("Usuário atualizado com sucesso!");
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Erro ao atualizar o usuário.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro de comunicação com o servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <Form>
        <div className="w-full flex items-center justify-center text-xl font-bold mt-6">
          UPDATE STUDENT
        </div>

        <div className="text-gray-500 mt-2">
          Preencha todos os campos para atualizar o estudante
        </div>

        <form onSubmit={submit}>
          <p className="text-gray-600 font-bold text-base">ID</p>
          <input
            type="text"
            name="id"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter the ID"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />

          <p className="text-gray-600 font-bold text-base mt-4">Nome</p>
          <input
            type="text"
            name="nome"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Enter the name"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />

          <p className="text-gray-600 font-bold text-base mt-4">Email</p>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter the email"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />

          <p className="text-gray-600 font-bold text-base mt-4">Celular</p>
          <input
            type="text"
            name="celular"
            id="celular"
            value={celular}
            onChange={(e) => setCelular(e.target.value)}
            placeholder="Enter the phone"
            className="border border-gray-500 p-2 rounded-md h-11 w-full mt-2"
          />

          <button
            type="submit"
            disabled={loading}
            className={`text-white font-bold w-full rounded-md h-11 mt-6 ${
              loading ? "bg-gray-400" : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            }`}
          >
            {loading ? "Updating..." : "UPDATE STUDENT"}
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

export default Update;
