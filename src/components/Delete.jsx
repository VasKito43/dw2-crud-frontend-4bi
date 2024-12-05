import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/Form";

function Payment() {
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

 
  const submit = async (e) => {
    e.preventDefault();
  
    if (!id) {
      alert("Por favor, insira um ID válido.");
      return;
    }
  
    setLoading(true);
    setError(null); 
  
    try {
      const response = await fetch(`http://127.0.0.1:3000/usuarios/${id}`, {
        method: "DELETE",
      });
  
      if (response.ok) {
        alert("Usuário deletado com sucesso!");
        navigate("/dashboard");
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Erro ao deletar o usuário.");
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
        <div className="w-full flex items-center justify-center text-xl font-bold mt-6">DELETE STUDENT</div>

        <div className="text-gray-500 mt-2">
          Enter the ID to delete the student
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
          <button
            type="submit"
            disabled={loading}
            className={`text-white font-bold w-full rounded-md h-11 mt-6 ${loading ? 'bg-gray-400' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'}`}
          >
            {loading ? "Deleting..." : "DELETE STUDENT"}
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
