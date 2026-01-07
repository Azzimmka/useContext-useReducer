// import { useContext, useState } from "react"
// import { Context } from "../App"

// export default function About() {
//     const [aboutUs, setAboutUs] = useState('We are a big Company which located in Uzbekistan.')
//     const changeContext = useContext(Context)
//     return (
//         <div className="m-auto mt-10 w-full gap-6 flex justify-center items-center ">
//             <h1 className="text-center text-2xl font-bold">About {changeContext!.hello}</h1>
//             <button onClick={()=>changeContext!.setHello(aboutUs)} className="border p-3 cursor-pointer hover:text-[#a8a8a6] border-[#3d3d3b]">Click me</button>
//         </div>
//     )
// }