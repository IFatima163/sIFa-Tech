import { ArrowRight, BarChart, Code, Globe, Megaphone, Palette, Smartphone, User } from 'lucide-react'
import React from 'react'

const services = [
    {
        icon: Palette,
        title: "Brand & Design",
        description: 
            "Complete visual identity and brand strategy that resonates with your audience.",
        features: [
            "Logo & Identity",
            "Brand Guidelines",
            "Visual Systems",
            "Printed Design",
        ],
        color: "from-purple-500 to-pink-500",
        bgColor: "from-purple-50 to-pink-50",
    },
    {
        icon: Code,
        title: "Web Development",
        description: 
            "Modern, responsive websites built with cutting-edge techologies.",
        features: [
            "React & Next.js",
            "E-commerce",
            "CMS Integration",
            "Performance Optimization",
        ],
        color: "from-blue-500 to-cyan-500",
        bgColor: "from-blue-50 to-cyan-50",
    },
    // {
    //     icon: Smartphone,
    //     title: "Mobile Apps",
    //     description: 
    //         "Native and cross-platform mobile applications for iOS and Android.",
    //     features: [
    //         "iOS Development",
    //         "Android Development",
    //         "React Native",
    //         "App Store Optimization",
    //     ],
    //     color: "from-green-500 to-teal-500",
    //     bgColor: "from-green-50 to-teal-50",
    // },
    {
        icon: Megaphone,
        title: "Digital Marketing",
        description: 
            "Strategic marketing campaigns that drive engagement and conversions",
        features: [
            "Social Media Strategy",
            "Content Marketing",
            "Email Campaigns",
            "Influencer Marketing",
        ],
        color: "from-yellow-500 to-orange-500",
        bgColor: "from-yellow-50 to-orange-50",
    },
    {
        icon: BarChart,
        title: "Analytics & Insights",
        description: 
            "Data-driven insights to optimize performance and maximize ROI.",
        features: [
            "Performance Tracking",
            "User Behavior Analysis",
            "Conversion Optimization",
            "Custom Dashboards",
        ],
        color: "from-red-500 to-pink-500",
        bgColor: "from-red-50 to-pink-50",
    },
    {
        icon: Globe,
        title: "Digital Strategy",
        description: 
            "Comprehensive digital transformation and strategic consulting services.",
        features: [
            "Market Research",
            "Comprehensive Analysis",
            "Digital Roadmap",
            "Technology Consulting",
        ],
        color: "from-indigo-500 to-purple-500",
        bgColor: "from-indigo-50 to-purple-50",
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
            
            <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8 relative z-10'>
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
                        Loren ipsum Loren ipsum Loren ipsum Loren ipsum 
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
