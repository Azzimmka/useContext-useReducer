import { useContext } from "react"
import { Context } from "../App"

export default function Home() {
    const StateAge = useContext(Context)
    console.log(StateAge!.hello);
    
    return (
        <div className="m-auto mt-10 w-full flex justify-center gap-6 items-center ">
            <h1 className="text-center text-2xl font-bold">Home</h1>
            <h2>{StateAge!.hello}</h2>
        </div>
    )
}