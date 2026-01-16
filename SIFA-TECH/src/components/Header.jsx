import { Menu, Sparkle, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const menu = ["home", "about", "services", "portfolio", "team", "contact"]

function Header() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return() => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if(element) {
            element.scrollIntoView({behavior: "smooth"})
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <header 
            className={`
                fixed top-0 left-0 right-0 z-50 transition-all duration ${isScrolled 
                ? "bg-slate-900 backdrop-blur-lg shadow-xl border-b border-slate-900"
                : "bg-transparent"
            }`}
        >
            <div className='sm:px-6 lg:px-8'>
                <div className='flex justify-between items-center py-4'>
                    <div className='flex items-center space-x-2'>                
                        <div className='relative'>
                            <Sparkle 
                                className={`
                                    w-8 h-8 transition-all duration-300 ${isScrolled ? "text-purple-600" : "text-white" 
                                }`}
                            />
                            <div 
                                className='
                                    absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animation-pulse
                                '
                            ></div>
                        </div>
                        <h1 
                            className={`
                                text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text 
                                transition-all duration-300 ${isScrolled ? "text-purple-600" : "text-white" 
                            }`}
                        >
                            sIFa Tech
                        </h1>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <nav className='hidden md:flex space-x-8'>
                        {menu.map((item) => {
                            return(
                                <button
                                    onClick={() => scrollToSection(item)}
                                    className={`
                                        capitalize font-medium transition-all duration-300 hover:scale-105 
                                        relative group ${isScrolled 
                                        ? "text-gray-700 hover:text-purple-600" 
                                        : "text-white hover:text-purple-300" 
                                    }`}
                                >
                                    {item}
                                    {/* Hover effect */}
                                    <span 
                                        className='
                                            absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 
                                            transition-all duration-300 group-hover:w-full
                                            '
                                        ></span>
                                </button>
                            )
                        })}
                    </nav>

                    {/* mobile menu button */}
                    <button 
                        className={`
                            md:hidden p-2 rounded-lg transition-all duration-300
                        `} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24}/>}
                    </button>
                </div>

                {/* Mobile Navigation Conditional Rendering */}
                {isMobileMenuOpen && (
                    <div 
                        className='
                            md:hidden bg-slate-900 backdrop-blur-lg shadow-2xl rounded-2xl mt-2 py-6 border border-slate-900
                        '
                    >
                        {menu.map((item) => {
                            return(
                                <button 
                                    className='
                                        block w-full text-left px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 
                                        hover:to-pink-50 hover:text-purple capitalize font-medium transition-all duration-300
                                    ' onClick={scrollToSection(item)}
                                >
                                    {item}
                                </button>
                            )
                        })}
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header