import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
// import About from './components/About'
import Settings from './components/Settings'
import { createContext, useReducer, type Dispatch } from 'react'
import { reducer } from './utils/reducer'
import About from './components/About'

interface User {
    name: string,
    age: string,
    email: string
}

interface State {
    users: User[],
    user: User,
    current: string
}

type Action =
    | {type: "NAME", payload: string}
    | {type: "AGE", payload: string}
    | {type: "EMAIL", payload: string}
    | {type: "ADD_USER"}

interface contextType {
    state: State,
    dispatch: Dispatch<Action>
}

export const Context = createContext<contextType | null>(null)

function App() {
  const [state, dispatch] = useReducer(reducer, {
    users:[],
    user: {name: "", age: '', email: ""},
    current: ''
  })

  return (
    <Context.Provider value={{state, dispatch}}>
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
