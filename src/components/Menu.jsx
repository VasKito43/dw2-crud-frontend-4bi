import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGraduationCap, faAddressCard, faRightFromBracket, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../context/Appcontext';
import { NavLink, useNavigate } from "react-router-dom";

function Menu() {
    const [activeButton, setActiveButton] = useState(null);
    const {ChangePageDashboard} = useAppContext();
    const navigate = useNavigate(); 

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
        ChangePageDashboard(buttonName);
    };

    return (
        <div className="bg-fuchsia-200 h-screen w-1/6 flex flex-col items-center">
            <div className="h-6 flex items-center justify-center text-2xl">
                <div className="w-2 h-full mt-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                <h1 className="font-bold ml-3 mt-7">CRUD OPERATIONS</h1>
            </div>

            <img 
                src="https://i.pinimg.com/564x/6d/03/6e/6d036e066ab0387b33323e66aa4bd29f.jpg" 
                alt="foto" 
                className="w-36 h-36 rounded-full object-cover mt-20"
            />

            <p className="font-bold text-lg">Neymar</p>
            <p className="text-fuchsia-800 font-bold mt-2">Admin</p>
            
            <div className='mt-20'>
                {/* Botão Home */}
                <button 
                    className={`flex items-center justify-center h-12 w-48 rounded-md 
                        ${activeButton === 'home' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-fuchsia-200'} 
                        hover:bg-fuchsia-300 mt-4 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick('home')}
                >
                    <FontAwesomeIcon icon={faHouse} />
                    <p className='ml-2.5'>Home</p>
                </button>

                {/* Botão Students */}
                <button 
                    className={`flex items-center justify-center h-12 w-48 rounded-md 
                        ${activeButton === 'students' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-fuchsia-200'} 
                        hover:bg-fuchsia-300 mt-4 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick('students')}
                >
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <p className='ml-2'>Students</p>
                </button>

                {/* Botão Payment */}
                <button 
                    className={`flex items-center justify-center h-12 w-48 rounded-md 
                        ${activeButton === 'payment' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-fuchsia-200'} 
                        hover:bg-fuchsia-300 mt-4 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick('register')}
                >
                    <FontAwesomeIcon icon={faAddressCard} />
                    <p className='ml-3'>Register</p>
                </button>
                <button 
                    className={`flex items-center justify-center h-12 w-48 rounded-md 
                        ${activeButton === 'delete' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-fuchsia-200'} 
                        hover:bg-fuchsia-300 mt-4 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick('delete')}
                >
                    <FontAwesomeIcon icon={faTrash} />
                    <p className='ml-3'>Delete</p>
                </button>
                <button 
                    className={`flex items-center justify-center h-12 w-48 rounded-md 
                        ${activeButton === 'update' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-fuchsia-200'} 
                        hover:bg-fuchsia-300 mt-4 transition duration-300 ease-in-out`}
                    onClick={() => handleButtonClick('update')}
                >
                    <FontAwesomeIcon icon={faPen} />
                    <p className='ml-3'>Update</p>
                </button>
                
            </div>

            {/* Botão Logout */}
            <NavLink to="/" className="flex items-center justify-center h-12 w-48 rounded-md 
                    hover:bg-fuchsia-300 mt-16 transition duration-300 ease-in-out">
                <p className='mr-3'>Logout</p>
                <FontAwesomeIcon icon={faRightFromBracket} />
            </NavLink>
        </div>
    );
}

export default Menu;
