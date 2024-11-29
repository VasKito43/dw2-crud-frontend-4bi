import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGraduationCap, faCircleDollarToSlot, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Menu() {
    const [activeButton, setActiveButton] = useState(null);

    // Função para lidar com o clique nos botões
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
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
                    onClick={() => handleButtonClick('payment')}
                >
                    <FontAwesomeIcon icon={faCircleDollarToSlot} />
                    <p className='ml-3'>Payment</p>
                </button>
            </div>

            {/* Botão Logout */}
            <button 
                className={`flex items-center justify-center h-12 w-48 rounded-md 
                    ${activeButton === 'logout' ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' : 'bg-fuchsia-200'} 
                    hover:bg-fuchsia-300 mt-32 transition duration-300 ease-in-out`}
                onClick={() => handleButtonClick('logout')}
            >
                <p className='mr-3'>Logout</p>
                <FontAwesomeIcon icon={faRightFromBracket} />
            </button>
        </div>
    );
}

export default Menu;
