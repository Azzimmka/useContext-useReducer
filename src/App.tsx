import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Settings from './components/Settings'
import { createContext, useState, } from 'react'

export const Context = createContext<{
    hello:string,
    setHello:React.Dispatch<React.SetStateAction<string>>
  } | null>(null)
function App() {

    const [hello, setHello] = useState('hello')

  return (
    <Context.Provider value={{hello, setHello}}>
      <div className='flex gap-5 py-5 mt-5 max-w-[1250px] items-center m-auto justify-around bg-[#d97757] rounded-[100px]'>
        <h1 className='text-3xl font-bold cursor-pointer'>Logo</h1>
        <div className='flex gap-5 md:flex hidden'>
          <Link className='hover:text-[#a8a8a6] transition-all duration-200' to={'/'}>Home</Link>
          <Link className='hover:text-[#a8a8a6] transition-all duration-200' to={'/about'}>About</Link>
          <Link className='hover:text-[#a8a8a6] transition-all duration-200' to={'/settings'}>Settings</Link>
        </div>
        <div className='flex gap-5 items-center md:flex hidden'>
          <button className='bg-[#2e2e2c] hover:bg-[#3d3d3b] transition-all duration-300 rounded-[100px] px-5 py-2 cursor-pointer'>Log in</button>
          <button className='bg-[#2e2e2c] hover:bg-[#3d3d3b] transition-all duration-300 rounded-[100px] px-5 py-2 cursor-pointer'>Log out</button>
        </div>
        <p className='md:hidden text-3xl cursor-pointer'>☰</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Context.Provider>
  )
}

export default App
