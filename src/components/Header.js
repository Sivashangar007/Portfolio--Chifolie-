import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import logo from "../assets/logo.png";



export default function Header(){
    const [toggleMenu, setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-primary">
        <div className="container mx-auto flex items-center justify-between">
    
        <a href="#">
      <img
        src={logo} 
        className="h-15 w-40 py-2" />  
         </a>
    
  
    <nav className="hidden md:flex space-x-6">
      <ul className="flex space-x-6 text-white font-bold">
        <li><a href="#home" className="hover:text-[#120436]">Home</a></li>
        <li><a href="#about" className="hover:text-[#120436]">About</a></li>
        <li><a href="#project" className="hover:text-[#120436]">Projects</a></li>
      
        <li><a href="#contact" className="hover:text-[#120436]">Contact</a></li>
        <li><a href="#certificate" className="hover:text-[#120436]">Certificates</a></li>
      </ul>
    </nav>
  </div>

        { toggleMenu && <nav className="block md:hidden"> 
            <ul onClick={() => setToggleMenu(! toggleMenu)}  className="flex flex-col text-white mobile-nav">
             <li><a href="#home"> Home</a></li>
             <li><a href="#about"> About</a></li>
             <li><a href="#project"> Projects </a></li>
             <li><a href="#certificate"> Certificates </a></li>
             <li><a href="#contact"> Contact</a></li>
             </ul>
        </nav>}
        <button onClick={() => setToggleMenu(! toggleMenu)} className='block md:hidden '>< Bars3Icon className='text-white h-8' /> </button>

    </header>

}