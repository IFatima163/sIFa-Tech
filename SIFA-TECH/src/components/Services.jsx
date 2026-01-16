import { ArrowRight, BarChart, Code, Globe, Megaphone, Palette, Smartphone, User } from 'lucide-react'
import React from 'react'

const services = [
    {
        icon: Palette,
        title: "Custom AI Chatbot Integration",
        description: 
            "Design and deploy intelligent chatbots for websites, internal tools, and customer support using modern AI models and APIs.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-50 to-pink-50",
    },
    {
        icon: Code,
        title: "Full Custom Web Applications",
        description: 
            "End-to-end development of scalable web applications tailored to your business logic, workflows, and growth plans.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-blue-500 to-cyan-500",
        bgColor: "from-blue-50 to-cyan-50",
    },
    {
        icon: Smartphone,
        title: "Web Development",
        description: 
            "High-performance, secure, and responsive websites built with modern standards.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-green-500 to-teal-500",
        bgColor: "from-green-50 to-teal-50",
    },
    {
        icon: Megaphone,
        title: "React.js, JavaScript, Tailwind",
        description: 
            "Frontend engineering using clean, maintainable, and scalable UI architectures.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-yellow-500 to-orange-500",
        bgColor: "from-yellow-50 to-orange-50",
    },
    {
        icon: BarChart,
        title: "CMS and Platform Development",
        description: 
            "WordPress, Shopify, Squarespace, Wix, GoDaddy, and Hostinger solutions customized beyond default templates.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-red-500 to-pink-500",
        bgColor: "from-red-50 to-pink-50",
    },
    {
        icon: Globe,
        title: "Portfolio Website Creation",
        description: 
            "Personal and business portfolio websites designed for credibility, speed, and conversion.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-indigo-500 to-purple-500",
        bgColor: "from-indigo-50 to-purple-50",
    },
    {
        icon: Palette,
        title: "Dropshipping Websites",
        description: 
            "Optimized e-commerce stores with automation-ready infrastructure.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-50 to-pink-50",
    },
    {
        icon: Code,
        title: "Domain and Hosting Management",
        description: 
            "Setup, migration, optimization, and long-term management of domains and hosting.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-blue-500 to-cyan-500",
        bgColor: "from-blue-50 to-cyan-50",
    },
    {
        icon: Smartphone,
        title: "SEO Optimization",
        description: 
            "Technical SEO, performance optimization, and search visibility improvements.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-green-500 to-teal-500",
        bgColor: "from-green-50 to-teal-50",
    },
    {
        icon: Megaphone,
        title: "Technical Writing",
        description: 
            "Clear, structured documentation, system guides, and technical content.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-yellow-500 to-orange-500",
        bgColor: "from-yellow-50 to-orange-50",
    },
    {
        icon: BarChart,
        title: "API Integrations",
        description: 
            "Secure and reliable integrations between third-party services, platforms, and custom systems.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-red-500 to-pink-500",
        bgColor: "from-red-50 to-pink-50",
    },
    {
        icon: Globe,
        title: "Automation Workflows",
        description: 
            "Design and implementation of automated workflows to eliminate repetitive tasks.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-indigo-500 to-purple-500",
        bgColor: "from-indigo-50 to-purple-50",
    },
    {
        icon: Palette,
        title: "Future SaaS Products",
        description: 
            "Design, development, and launch support for scalable SaaS platforms.",
        features: [
            "feature 1",
            "feature 2",
            "feature 3",
            "feature 4",
        ],
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-50 to-pink-50",
    },
]

function Services() {
    return (
        <section id='services' className='py-20 bg-white relative overflow-hidden'>
            {/* Background pattern */}
            <div 
                className='
                    absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-100
                    to-transparent rounded-full -translate-y-48 translate-x-48
                '
            ></div>
            <div 
                className='
                    absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-r from-pink-100
                    to-transparent rounded-full translate-y-48 translate-x-48
                '
            ></div>
            
            <div className='sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-16'>
                    <div 
                        className='
                            inline-flex items-center px-4 py-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6
                        '
                    >
                        <span className='text-purple-600 font-semibold'>
                            Our Services
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        What We
                        <span 
                            className='
                                block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600
                            '
                        >
                            Create
                        </span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        {" "}
                        We offer end-to-end development, automation, and AI services designed to turn ideas into production-ready systems. Whether you need a single integration or a full platform, we handle strategy, development, deployment, and optimization. 
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {services.map((services, index) => {
                        return (
                            <div 
                                className={`
                                    group relative bg-gradient-to-br ${services.bgColor} rounded-3xl p-8 hover:shadow-2xl 
                                    transition-all duration-500 hover:translate-y-2 border border-white/50 overflow-hidden
                                `}
                            >
                                {/* Background Pattern */}
                                <div className='absolute top-0 right-0 w-32 h-32 opacity-10'>
                                    <div
                                        className={`
                                            w-full h-full bg-gradient-to-br rounded-full transform translate-x-16 
                                            -translate-y-16 group-hover:scale-150 transition-all ${services.color}
                                        `} 
                                    ></div>
                                </div>

                                <div className='relative z-10'>
                                    <div 
                                        className={`
                                            w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center 
                                            mb-6 group-hover:rotate-6 transition-all duration-300 shadow-lg ${services.color}
                                        `}
                                    >
                                        <services.icon className='text-white' size={28}/>
                                    </div>
                                    <h3 className='text-2xl font-bold text-gray-900 mb-4'>
                                        {services.title}
                                    </h3>
                                    <p className='text-gray-600 mb-6 leading-relaxed'>
                                        {services.description}
                                    </p>
                                    <ul className='space-y-3 mb-6'>
                                        {services.features.map((feature, featureindex) => {     
                                            return(   
                                                <li className='flex items-center text-gray-700' key={featureindex}>
                                                    <div className={`w-2 h-2 bg-gradient-to-r rounded-full mr-3 flex-shrink-0 ${services.color}`}></div>
                                                    <span className='text-sm font-medium'>{feature}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                    <button
                                        className={`
                                            group/btn inline-flex items-center text-transparent bg-clip-text bg-gradient-to-r 
                                            font-semibold hover:scale-105 transition-all duration-300 ${services.color}
                                        `}
                                    >
                                        Learn More
                                        <ArrowRight 
                                            className={`
                                                ml-2 w-4 h-4 text-purple-500 group-hover:/btn:translate-x-1 
                                                transition-all duration-300 ${services.color}
                                            `}
                                        />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Button CTA */}
                <div className='text-center mt-16'>
                    <div 
                        className='
                            inline-flex justify-center items-center space-x-4 bg-gradient-to-r 
                            from-purple-600 to-pink-600 rounded-2xl p-6 text-white w-full
                        '
                    >
                        <div>
                            <h3 className='text-lg font-semibold'>Need a custom solution?</h3>
                            <p className='text-purple-100 text-sm'>
                                Let's discuss your unique requirements
                            </p>
                        </div>
                        <button 
                            className='
                                bg-white text-purple-600 px-6 py-3 rounded-xl
                                font-semibold hover:bg-gray-100 transition-colors
                                duration-300 whitespace-nowrap
                            '
                        >
                            Get Quote
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
