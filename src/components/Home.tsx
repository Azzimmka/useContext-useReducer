import { useContext } from "react"
import { Context } from "../App"
import { Link } from "react-router-dom"

export default function Home() {
    const context = useContext(Context)
    const {state, dispatch} = context!
    return (
        <div className="m-auto mt-10 w-full flex flex-col justify-center gap-6 items-center">
            <h1 className="text-center text-2xl font-bold">Home</h1>
            <form className="flex flex-col gap-4 bg-[#d97757] p-6 rounded-3xl w-full max-w-md">
                <input onChange={(e)=>{dispatch({type: "NAME", payload: e.target.value})}}
                    type="text"
                    value={state.user.name}
                    placeholder="Name"
                    className="bg-[#2e2e2c] text-white placeholder-gray-400 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#a8a8a6] transition-all duration-200"
                />
                <input onChange={(e)=>{dispatch({type: "AGE", payload: e.target.value})}}
                    type="text"
                    value={state.user.age}
                    placeholder="Age"
                    className="bg-[#2e2e2c] text-white placeholder-gray-400 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#a8a8a6] transition-all duration-200"
                />
                <input onChange={(e)=>{dispatch({type: "EMAIL", payload: e.target.value})}}
                    type="email"
                    value={state.user.email}
                    placeholder="Email"
                    className="bg-[#2e2e2c] text-white placeholder-gray-400 rounded-full px-5 py-3 outline-none focus:ring-2 focus:ring-[#a8a8a6] transition-all duration-200"
                />
                <Link to={'/about'} onClick={()=>{dispatch({type: 'ADD_USER'})}}
                    type="submit"
                    className="text-center bg-[#2e2e2c] hover:bg-[#3d3d3b] text-white font-bold rounded-full px-5 py-3 cursor-pointer transition-all duration-300 mt-2"
                >
                    Save
                </Link>
            </form>

            <p>{state.user.name}</p>
        </div>
    )
}
