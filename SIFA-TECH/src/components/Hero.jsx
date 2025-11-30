import { ArrowRight, Play } from 'lucide-react'
import React from 'react'

function Hero() {
    return (
        <section
            id='home'
            className='
                min-h-screen flex items-center relative overflow-hidden 
                bg-[url(https://cdn.pixabay.com/photo/2017/08/02/20/43/laptop-2573318_1280.jpg)] 
                bg-no-repeat bg-cover
                '
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='lg:grid lg:grid-cols-2 lg:gap-35 items-center'>
                    <div className='mb-12 lg:mb-0'>
                        <div 
                            className='
                                inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6
                            '
                        >
                            <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
                            <span className='text-white text-sm font-medium'>
                                Available for new projects
                            </span>
                        </div>
                        <h1 className='text-5xl md:text-7xl font-black text-white mb-6 leading-tight'>
                            Create{" "}
                            <span 
                                className='
                                    block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400
                                '
                            >
                                Amazing
                            </span>
                            Experience
                        </h1>
                        <p className='text-xl text-gray-200 mb-8 leading-relaxed max-w-lg'>
                            {" "}
                            We transform ideas into stunning digital realities through innovative design, 
                            cutting-edge technology, and strategic thinking that drives results.
                        </p>
                        <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                            <button 
                                className='
                                    group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 
                                    hover:to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold 
                                    transition-all duration-300 flex items-center justify-center shadow-2xl 
                                    hover:shadow-purple-500/25 hover:scale-105
                                '
                            >
                                <ArrowRight/>
                                Start Your Project
                            </button>

                            <button 
                                className='
                                    group border-white/30 text-white hover:bg-white hover:text-purple-900 px-8 
                                    py-4 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center 
                                    shadow-2xl hover:shadow-purple-500/25 hover:scale-105
                                '
                            >
                                <Play size={20} className='mr-2 group-hover:scale-110 transition-transform duration-300'/>
                                Watch Our Story
                            </button>
                        </div>

                        {/* Stats */}
                        <div className='grid grid-cols-3 gap-6'>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-white mb-1'>200+</div>
                                <div className='text-gray-300 text-sm'>Projects</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-white mb-1'>98%</div>
                                <div className='text-gray-300 text-sm'>Satisfaction</div>
                            </div>
                            <div className='text-center'>
                                <div className='text-3xl font-bold text-white mb-1'>24/7</div>
                                <div className='text-gray-300 text-sm'>Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='relative'>
                        <div className='reltive bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl'>
                            <div 
                                className='
                                    absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-bounce
                                '
                            ></div>

                            <div className='space-y-6 max-w-3xl'>
                                <div className='flex items-center space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm'>
                                    <div 
                                        className='
                                            w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center
                                        '
                                    >
                                        <span className='text-white font-bold'>UI</span>
                                    </div>
                                    <div>
                                        <h3 className='text-white font-semibold'>UI/UX Design</h3>
                                        <p className='text-gray-300 text-sm'>Beautiful & Intutive interface</p>                                        
                                    </div>
                                    <div className='ml-auto'>
                                        <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                                    </div>
                                </div>                                
                                <div className='flex items-center space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm'>
                                    <div 
                                        className='
                                            w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl 
                                            flex items-center justify-center backdrop-blur-sm
                                        '
                                    >
                                        <span className='text-white font-bold'>DEV</span>
                                    </div>
                                    <div>
                                        <h3 className='text-white font-semibold'>Development</h3>
                                        <p className='text-gray-300 text-sm'>Modern web application</p>
                                    </div>
                                    <div className='ml-auto'>
                                        <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                                    </div>
                                </div>
                                <div className='flex items-center space-x-4 p-4 bg-white/10 rounded-2xl backdrop-blur-sm'>
                                    <div 
                                        className='
                                            w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl 
                                            flex items-center justify-center backdrop-blur-sm
                                        '
                                    >
                                        <span className='text-white font-bold'>SEO</span>
                                    </div>
                                    <div>
                                        <h3 className='text-white font-semibold'>Optimization</h3>
                                        <p className='text-gray-300 text-sm'>Performance & visibility</p>
                                    </div>
                                    <div className='ml-auto'>
                                        <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
