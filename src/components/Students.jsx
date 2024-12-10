import { useEffect, useState } from "react";
import { useAppContext } from "../context/Appcontext";

function Students() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { ChangePageDashboard } = useAppContext();

  const handleButtonClick = (buttonName, user) => {
    ChangePageDashboard(buttonName, user); // Navega para a página e passa os dados do usuário
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://crud-mail.onrender.com/usuarios");
        if (!response.ok) {
          throw new Error("Error when searching for users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p className="text-center text-indigo-600">Loading users...</p>;
  if (error) return <p className="text-center text-red-600">Erro: {error}</p>;

  return (
    <div className="w-5/6 mx-auto p-6">
      <div className="flex w-full h-20 justify-between items-center">
        <h1 className="text-3xl font-bold text-left text-gray-800">Student List</h1>
        <button
          onClick={() => handleButtonClick("register")}
          className="w-64 h-14 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-md"
        >
          ADD NEW STUDENT
        </button>
      </div>
      <input
        type="text"
        placeholder="search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md my-4"
      />
      <hr className="border-t-2 border-gray-300 my-4" />

      {filteredUsers.length === 0 ? (
        <p className="text-center text-gray-500">No users found.</p>
      ) : (
        <div
          className="grid grid-cols-1 gap-6 overflow-y-auto scrollbar-thin"
          style={{
            maxHeight: "80vh",
            scrollbarColor: "rgba(139, 92, 246, 1) rgba(243, 232, 255, 1)",
            scrollbarWidth: "thin",
          }}
        >
          {filteredUsers.map((user) => (
            <button
              key={user.id}
              onClick={() => handleButtonClick("update", user)}
              className="w-full text-left bg-white p-6 rounded-xl shadow-xl focus:outline-none"
            >
              <h2 className="text-2xl font-semibold text-fuchsia-800">{user.nome}</h2>
              <p className="text-gray-600 mt-2">
                <strong>ID:</strong> {user.id}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Celular:</strong> {user.celular}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Students;
