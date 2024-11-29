export function Form(props){
    
    return (
        <div className="bg-white w-1/3 h-2/3 rounded-lg
            flex items-center flex-col">
                {/* titulo */}
                <div className="h-6 w-96 mt-11 flex items-center justify-center text-2xl">
                    <div className="w-2 h-full
                    bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    </div>
                    <h1 className="font-bold ml-3">CRUD OPERATIONS</h1>
                </div>
                {props.children}
                </div>
    )
}
