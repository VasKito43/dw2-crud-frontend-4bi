import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faGraduationCap, faCircleDollarToSlot, faRightFromBracket,faBookBookmark, faBookmark, faUser } from '@fortawesome/free-solid-svg-icons';

function Home(){
    
    return (
        <div className='w-5/6 h-screen'>
            <div className="w-full h-100 flex justify-around mt-16">
                <div className="w-80 bg-blue-300 h-48 flex flex-col items-start justify-between rounded-lg">
                    <FontAwesomeIcon icon={faGraduationCap} className='h-14 ml-5 mt-7'/>
                    <p className='text-xl ml-5'>Students</p>
                    <p className='text-right ml-52  mt-6 mb-10 text-4xl font-bold'>243</p>
                </div>
                <div className="w-80 bg-pink-300 h-48 flex flex-col items-start justify-between rounded-lg">
                    <FontAwesomeIcon icon={faBookmark} className='h-14 ml-5 mt-7'/>
                    <p className='text-xl ml-5'>Students</p>
                    <p className='text-right ml-52 mt-6 mb-10 text-4xl font-bold'>13</p>
                </div>
                <div className="w-80 bg-yellow-300 h-48 flex flex-col items-start justify-between rounded-lg">
                    <FontAwesomeIcon icon={faCircleDollarToSlot} className='h-14 ml-5 mt-7'/>
                    <p className='text-xl ml-5'>Students</p>
                    <p className='text-right ml-24 mt-6 mb-10 text-4xl font-bold'>R$ 556,000</p>
                </div>
                <div className="w-80 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                 h-48 flex flex-col items-start justify-between rounded-lg">
                    <FontAwesomeIcon icon={faUser} className='h-14 ml-5 mt-7'/>
                    <p className='text-xl ml-5'>Students</p>
                    <p className='text-right ml-24 mt-6 mb-10 text-4xl font-bold'>R$ 556,000</p>
                </div>

            </div>
        </div>
    )
}
export default Home