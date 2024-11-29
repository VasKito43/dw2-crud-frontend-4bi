import { Form } from "../components/form"
import { NavLink } from "react-router-dom";


function SingIn(){
    
    const getEstilo = (props) => {
   
        let estilo =
          "flex gap-3 text-zinc-50 px-3 py-4 hover:bg-slate-800 hover:text-slate-200 w-60";
        let ativo = "border-r-4 border-solid border-zinc-50 "
    
        // let final
        // if (props.isActive){
        //     final = estilo + ativo
        // } else {
        //     final = estilo
        // }
        let final = props.isActive ? estilo + ativo : estilo
    
        return final;
      };

    return (
        <div className="h-screen w-screen 
        bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        flex items-center justify-center">
            
            <Form>
                <div className="h-6 w-96 flex items-center justify-center text-xl font-bold mt-11">SING IN</div>

                <div className="text-gray-500 mt-2">Enter your credentiais to access your account</div>

                {/* credenciais */}
                <div className="w-96 h-56 mt-10">
                <p className="text-gray-600 font-bold text-base">Email</p>
                <textarea name="email" id="email" placeholder="Enter your email"
                className="border border-gray-500 p-2 rounded-md h-11 resize-none w-96">
                </textarea>

                <p className="text-gray-600 font-bold text-base">Password</p>
                <textarea name="email" id="email" placeholder="Enter your password"
                className="border border-gray-500 p-2 rounded-md h-11 resize-none w-96">
                </textarea>

                <button className="text-white font-bold w-96 rounded-md h-11 mt-6
                bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                SING IN
                </button>

                <div className="w-96 mt-8
                flex justify-center">
                    <p className="text-gray-500">Forgot your password?</p>
                    {/* <button className="text-fuchsia-800 underline ml-1">Reset Password</button> */}
                    <NavLink 
                      to="dashboard" 
                      className="text-fuchsia-800 underline ml-1"
                    >
                      Reset Password
                    </NavLink>
                </div>
                </div>
            </Form>

                
        </div>
    )
}
export default SingIn
