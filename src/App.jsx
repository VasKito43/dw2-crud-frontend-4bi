
import React, { useEffect, useState } from "react";


function App() {
  const [users, setUsers] = useState([]); // Estado para armazenar os usuários
  const [loading, setLoading] = useState(true); // Estado para gerenciar o carregamento
  const [error, setError] = useState(null); // Estado para erros


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://crud-mail.onrender.com/usuarios/usuarios"); // URL do backend
        if (!response.ok) {
          throw new Error("Erro ao buscar os usuários");
        }
        const data = await response.json();
        setUsers(data); // Atualiza o estado com os usuários
      } catch (error) {
        setError(error.message); // Armazena a mensagem de erro
      } finally {
        setLoading(false); // Finaliza o estado de carregamento
      }
    };


    fetchUsers(); // Chama a função de busca
  }, []); // O array vazio faz com que a requisição ocorra apenas uma vez após a montagem


  if (loading) return <p className="text-center text-indigo-600">Carregando usuários...</p>; // Exibe o carregamento
  if (error) return <p className="text-center text-red-600">Erro: {error}</p>; // Exibe erro, se houver


  return (
    <div className="w-full mx-auto p-6">
      <div className="flex w-full h-20 justify-between">
        <h1 className="text-3xl font-bold text-left text-gray-800 mb-8">
          Lista de Estudantes
        </h1>
        <button className="w-64 h-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-md">
          ADD NEW STUDENT
        </button>
      </div>
      <hr className="border-t-2 border-gray-300 my-4" />


      {users.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum usuário encontrado.</p>
      ) : (
        // Adicionando um container com overflow para scroll
        <div
          className="grid grid-cols-1 gap-6 overflow-y-auto scrollbar-thin"
          style={{
            maxHeight: "80vh", // Limita a altura a 80% da tela
            scrollbarColor: "rgba(139, 92, 246, 1) rgba(243, 232, 255, 1)", // Combinação de roxo claro e lilás
            scrollbarWidth: "thin", // Aplica o estilo fino
          }}
        >
          {users.map((user) => (
            <div
              key={user.id}
              className="w-full bg-white p-6 rounded-xl shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-fuchsia-800">
                {user.nome}
              </h2>
              <p className="text-gray-600 mt-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Celular:</strong> {user.celular}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


export default App;



