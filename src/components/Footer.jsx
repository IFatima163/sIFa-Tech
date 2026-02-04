import { ArrowUp, Facebook, InstagramIcon, Linkedin, Mail, MapPin, Phone, Sparkles, Twitter } from 'lucide-react'
import React from 'react'

const company = [
    "About Us",
    "Services",
    "Portfolio",
    "Contact",
    // "Our Team",
    // "Careers",
    // "Case Studies",
    // "Blog",
    // "Press Kit",
]

const services = [
    "Custom AI Chatbot Integration",
    "Full Custom Web Applications",
    "Web Development",
    "React.js, JavaScript, Tailwind",
    "CMS and Platform Development",
    "Portfolio Website Creation",
    "Dropshipping Websites",
    "Domain and Hosting Management",
    "SEO Optimization",
    "Technical Writing",
    "API Integrations",
    "Automation Workflows",
    "Future SaaS Products",
]


function Footer() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    }

    return (
        <footer
            className='
                bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden
            '
        >
            {/* Background Elements */}
            <div className='absolute inset-0'>
                <div
                    className='
                        absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full 
                        mix-blend-multiply filter blur-3xl opacity-10
                    '
                ></div>
                <div
                    className='
                        absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full 
                        mix-blend-multiply filter blur-3xl opacity-10
                    '
                ></div>
            </div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12'>
                    <div className='lg:col-span-1'>
                        <div className='flex items-center space-x-2 mb-6'>
                            <div className='relative'>
                                <Sparkles className='w-8 h-8 text-purple-400'/>
                                <div 
                                    className='
                                        absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-pink-500 
                                        to-purple-500 rounded-full animate-pulse
                                    '
                                ></div>
                            </div>
                            <h3
                                className='
                                    text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400
                                    bg-clip-text text-transparent
                                '
                            >
                                sIFa Tech
                            </h3>
                        </div>

                        <p className='text-gray-300 mb-6 leading-relaxed'>
                            AI, Automation, and Web Engineering Solutions
                        </p>
                        <div className='flex space-x-4'>
                            <a
                                href='#'
                                className='
                                    w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl
                                    flex items-center justify-center hover:scale-110 transition-all duration-300
                                '
                            >
                                <Facebook size={18}/>
                            </a>
                            <a
                                href='#'
                                className='
                                    w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl
                                    flex items-center justify-center hover:scale-110 transition-all duration-300
                                '
                            >
                                <Twitter size={18}/>
                            </a>
                            <a
                                href='#'
                                className='
                                    w-10 h-10 bg-gradient-to-r from-pink-600 to-red-600 rounded-xl
                                    flex items-center justify-center hover:scale-110 transition-all duration-300
                                '
                            >
                                <InstagramIcon size={18}/>
                            </a>
                            <a
                                href='#'
                                className='
                                    w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl
                                    flex items-center justify-center hover:scale-110 transition-all duration-300
                                '
                            >
                                <Linkedin size={18}/>
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className='text-lg font-bold mb-6 text-white'>Services</h4>
                        <ul className='space-y-3'>
                            {services.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a
                                            href='#'
                                            className='
                                                text-gray-300 hover:text-purple-400 transition-all 
                                                duration-300 flex items-center group
                                            '
                                        >
                                            <span
                                                className='
                                                    w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:scale-150
                                                    transition-all duration-300
                                                '
                                            ></span>
                                            {item}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className='text-lg font-bold mb-6 text-white'>Company</h4>
                        <ul className='space-y-3'>
                            {company.map((com, comindex) => {
                                return (
                                    <li key={comindex}>
                                        <a
                                            href='#'
                                            className='
                                                text-gray-300 hover:text-purple-400 transition-all 
                                                duration-300 flex items-center group
                                            '
                                        >
                                            <span
                                                className='
                                                    w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 group-hover:scale-150
                                                    transition-all duration-300
                                                '
                                            ></span>
                                            {com}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className='text-lg font-bold mb-6 text-white'>Get in Touch</h4>
                        <div className='space-y-4'>
                            <div className='flex items-start space-x-3'>
                                <div 
                                    className='
                                        w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg
                                        flex items-center justify-center flex-shrink-0 mt-0.5
                                    '
                                >
                                    <Mail size={14}/>
                                </div>
                                <div>
                                    <p className='text-white font-medium'>hello@nexus.com</p>
                                    <p className='text-gray-300 text-sm'>support@nexus.com</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <div 
                                    className='
                                        w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg
                                        flex items-center justify-center flex-shrink-0 mt-0.5
                                    '
                                >
                                    <Phone size={14}/>
                                </div>
                                <div>
                                    <p className='text-white font-medium'>+1(555)123-4567</p>
                                    <p className='text-gray-300 text-sm'>Mon-Fri 9AM-6PM EST</p>
                                </div>
                            </div>
                            <div className='flex items-start space-x-3'>
                                <div 
                                    className='
                                        w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg
                                        flex items-center justify-center flex-shrink-0 mt-0.5
                                    '
                                >
                                    <MapPin size={14}/>
                                </div>
                                /*<div>
                                    <p className='text-white font-medium'>123 Innovation Street</p>
                                    <p className='text-gray-300 text-sm'>San Fransisco, CA 94105</p>
                                </div>*/
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div 
                    className='
                        border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center
                    '
                >
                    <div className='text-gray-300 text-sm mb-4 md:mb-0'>
                        <p>
                            © sIFa Tech. All rights reserved.
                        </p>
                    </div>
                    <button 
                        className='
                            w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex
                            items-center justify-center hover:scale-110 transition-all duration-300
                        '
                        onClick={scrollToTop}
                    >
                        <ArrowUp size={18}/>
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer