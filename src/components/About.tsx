import { useContext } from "react"
import { Context } from "../App"

export default function About() {

    const context = useContext(Context)
    const {state} = context!
    return (
        <div className="m-auto mt-10 w-full gap-6 flex flex-col justify-center items-center ">
            <h1 className="text-center text-2xl font-bold">About</h1>
            <table className="bg-[#d97757] rounded-3xl overflow-hidden">
                <thead>
                    <tr className="bg-[#2e2e2c] text-white">
                        <th className="px-6 py-3">Name</th>
                        <th className="px-6 py-3">Age</th>
                        <th className="px-6 py-3">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.users.map((user: any, index: any)=>{
                            return (
                                <tr key={index} className="border-t border-[#2e2e2c]/20">
                                    <td className="px-6 py-3">{user.name}</td>
                                    <td className="px-6 py-3 text-center">{user.age}</td>
                                    <td className="px-6 py-3">{user.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}