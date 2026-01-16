import { Award, Coffee, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import React from 'react'

const teamMembers = [
    {
        name: "Person 1",
        role: "Role 1",
        image: 
            "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Detailed description of expertise.",
        specialties: ["Skill 1", "Skill 2", "Skill 3"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
            email: "person@email.com"
        },
        stats: {projects: "150+", awards: "12", experience: "12 years"},
        gradient: "from-purple-500 to-pink-500",
        bgGradient: "from-purple-50 to-pink-50" 
    },
    {
        name: "Person 1",
        role: "Role 1",
        image: 
            "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Detailed description of expertise.",
        specialties: ["Skill 1", "Skill 2", "Skill 3"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
            email: "person@email.com"
        },
        stats: {projects: "150+", awards: "12", experience: "12 years"},
        gradient: "from-blue-500 to-cyan-500",
        bgGradient: "from-blue-50 to-cyan-50" 
    },
    {
        name: "Person 1",
        role: "Role 1",
        image: 
            "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Detailed description of expertise.",
        specialties: ["Skill 1", "Skill 2", "Skill 3"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
            email: "person@email.com"
        },
        stats: {projects: "150+", awards: "12", experience: "12 years"},
        gradient: "from-green-500 to-teal-500",
        bgGradient: "from-green-50 to-teal-50" 
    },
    {
        name: "Person 1",
        role: "Role 1",
        image: 
            "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
        bio: "Detailed description of expertise.",
        specialties: ["Skill 1", "Skill 2", "Skill 3"],
        social: {
            linkedin: "#",
            twitter: "#",
            github: "#",
            email: "person@email.com"
        },
        stats: {projects: "150+", awards: "12", experience: "12 years"},
        gradient: "from-orange-500 to-red-500",
        bgGradient: "from-orange-50 to-red-50" 
    },

    
    // {
    //     name: "Alexandra Chen",
    //     role: "Creative Director",
    //     image: 
    //         "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    //     bio: "Award-winning creative director who transforms bold visions inro unforgettable brand experiences that resonate globally.",
    //     specialties: ["Brand Strategy", "UI/ UX Design", "Creative Leadership"],
    //     social: {
    //         linkedin: "#",
    //         twitter: "#",
    //         github: "#",
    //         email: "alex@nexus.com"
    //     },
    //     stats: {projects: "150+", awards: "12", experience: "12 years"},
    //     gradient: "from-purple-500 to-pink-500",
    //     bgGradient: "from-purple-50 to-pink-50" 
    // },
    // {
    //     name: "Marcus Rodriguez",
    //     role: "Lead Developer",
    //     image: 
    //         "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400",
    //     bio: "Full-stack wizard who builds lightning-fast, scalable applications that power the next generation of digital experiences.",
    //     specialties: ["React/Next.js", "Node.js", "Cloud Architecture"],
    //     social: {
    //         linkedin: "#",
    //         twitter: "#",
    //         github: "#",
    //         email: "marcus@nexus.com"
    //     },
    //     stats: {projects: "200+", awards: "8", experience: "10 years"},
    //     gradient: "from-blue-500 to-cyan-500",
    //     bgGradient: "from-blue-50 to-cyan-50" 
    // },
    // {
    //     name: "Sophia Kim",
    //     role: "UX Strategist",
    //     image: 
    //         "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400",
    //     bio: "Human-centered design advocate who crafts intuitive experiences that make complex interactions feel effortless.",
    //     specialties: ["User Research", "Interaction Design", "Accessibility"],
    //     social: {
    //         linkedin: "#",
    //         twitter: "#",
    //         github: "#",
    //         email: "sophia@nexus.com"
    //     },
    //     stats: {projects: "120+", awards: "15", experience: "9 years"},
    //     gradient: "from-green-500 to-teal-500",
    //     bgGradient: "from-green-50 to-teal-50" 
    // },
    // {
    //     name: "David Thompson",
    //     role: "Growth Strategist",
    //     image: 
    //         "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400",
    //     bio: "Growth hacker extraordinaire who turns data into actionable insights that drive exponential business growth.",
    //     specialties: ["Growth Hacking", "Analytics", "Conversion Optimization"],
    //     social: {
    //         linkedin: "#",
    //         twitter: "#",
    //         github: "#",
    //         email: "david@nexus.com"
    //     },
    //     stats: {projects: "180+", awards: "10", experience: "11 years"},
    //     gradient: "from-orange-500 to-red-500",
    //     bgGradient: "from-orange-50 to-red-50" 
    // },
]

function Team() {
    return (
        <section id='team' className='relative overflow-hidden'>
            {/* Background Element */}
            <div 
                className='
                    absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 
                    rounded-full filter blur-3xl opacity-50 -translate-y-48
                '
            ></div>
            <div 
                className='
                    absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-blue-100 to-cyan-100 
                    rounded-full fill-transparent blur-3xl opacity-50 translate-y-48
                '
            ></div>

            <div className='max-w-7xl mx-auto py-4 sm:px-6 lg:px-8 relative z-10'>
                <div className='text-center mb-16'>
                    <div 
                        className='
                            inline-flex items-center px-4 py-4 bg-gradient-to-r from-purple-100 
                            to-pink-100 rounded-full mb-6
                        '
                    >
                        <span className='text-purple-600 font-semibold'>Our Team</span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        Meet The
                        <span 
                            className='
                                block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600
                            '
                        >
                            Team
                        </span>
                    </h2>
                    <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        sIFa Tech is driven by engineers and builders who focus on clarity, performance, and long-term system thinking. We prioritize clean architecture, maintainable code, and solutions that scale with real business needs.
                    </p>                    
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {teamMembers.map((member, index) => {
                        return(
                            <div 
                                className={`
                                    group bg-gradient-to-br rounded-3xl p-5 shadow-xl hover:shadow-2xl transition-all
                                    duration-500 hover:-translate-y-3 border border-white/50 relative overflow-hidden 
                                    backdrop-blur-sm ${member.bgGradient}                           
                                `}                    
                            >
                                {/* Animated Background Elements */}
                                <div
                                    className={`
                                        absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br rounded-full 
                                        opacity-20 group-hover:scale-125 group-hover:rotate-45 ${member.gradient}  
                                    `}
                                ></div>
                                <div
                                    className={`
                                        absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr rounded-full 
                                        opacity-10 group-hover:scale-150 transition-all duration-500 ${member.gradient}
                                    `}
                                ></div>

                                <div className='relative z-10'>
                                    {/* Enhanced Profile Image */}
                                    <div className='relative mb-8'>
                                        <div 
                                            className='
                                                w-28 h-28 mx-auto rounded-3xl overflow-hidden right-4 right-w 
                                                shadow-2xl group-hover:scale-110 group-hover:rotate-3 
                                                transition-all duration-500
                                            '
                                        >
                                            <img
                                                src= {member.image}
                                                alt= {member.name}
                                                className='
                                                    w-full h-full object-cover group-hover:scale-110 transition-all duration-500
                                                '
                                            />
                                        </div>
                                        {/* Stats Indicator */}
                                        <div
                                            className={`
                                                absolute -bottom-2 -right-2 w-10 h-10 bg-gradient-to-r rounded-full
                                                flex items-center justify-center shadow-lg group-hover:scale-110 
                                                transition-all duration-300 ${member.gradient}
                                            `}
                                        >
                                            <div className='w-4 h-4 bg-white rounded-full animate-pulse'></div>
                                        </div>
                                    </div>

                                    {/* Enhanced Member Info */}
                                    <div className='text-center mb-6'>
                                        <h3 
                                            className='
                                                text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent
                                                group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600
                                                group-hover:to-pink-600 transition-all duration-300
                                            '
                                        >
                                            {member.name}
                                        </h3>
                                        <div
                                            className={`
                                                inline-block px-4 py-2 bg-gradient-to-r text-white text-sm 
                                                font-bold rounded-full mb-4 shadow-lg ${member.gradient}
                                            `}
                                        >
                                            {member.role}
                                        </div>
                                        <p className='text-gray-700 text-sm leading-relaxed font-medium'>
                                            {member.bio}
                                        </p>
                                    </div>

                                    {/* Enhanced Specilities */}
                                    <div className='mb-6'>
                                        <div className='flex flex-wrap gap-1 justify-center'>
                                            {member.specialties.map((specialty, sepcIndex) => {
                                                return (
                                                    <span
                                                        className={`
                                                            px-3 py-1.5 bg-white backdrop-blur-sm text-gray-700 text-xs
                                                            font-semibold rounded-full border border-white/50 shadow-sm
                                                            hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default
                                                        `}
                                                    >
                                                        {specialty}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    {/* Enhanced Social Links */}
                                    <div className='flex justify-center space-x-4'>
                                        <a
                                            href={member.social.linkedin}
                                            className='
                                                group/social w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600
                                                rounded-2xl flex items-center justify-center hover:scale-125
                                                hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl
                                            '
                                        >
                                            <Linkedin 
                                                size={16}
                                                className='
                                                    text-white group-hover:social:scale-110 transition-all duration-300
                                                '
                                            />
                                        </a>
                                        <a
                                            href={member.social.twitter}
                                            className='
                                                group/social w-10 h-10 bg-gradient-to-r from-sky-400 to-sky-500
                                                rounded-2xl flex items-center justify-center hover:scale-125
                                                hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl
                                            '
                                        >
                                            <Twitter 
                                                size={16}
                                                className='
                                                    text-white group-hover:social:scale-110 transition-all duration-300
                                                '
                                            />
                                        </a>
                                        <a
                                            href={member.social.github}
                                            className='
                                                group/social w-10 h-10 bg-gradient-to-r from-gray-700 to-gray-800
                                                rounded-2xl flex items-center justify-center hover:scale-125
                                                hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl
                                            '
                                        >
                                            <Github 
                                                size={16}
                                                className='
                                                    text-white group-hover:social:scale-110 transition-all duration-300
                                                '
                                            />
                                        </a>
                                        <a
                                            href={member.social.email}
                                            className={`
                                                group/social w-10 h-10 bg-gradient-to-r rounded-2xl flex 
                                                items-center justify-center hover:scale-125 hover:rotate-12 
                                                transition-all duration-300 shadow-lg hover:shadow-xl
                                                ${member.gradient}
                                            `}
                                        >
                                            <Mail 
                                                size={16}
                                                className='
                                                    text-white group-hover:social:scale-110 transition-all duration-300
                                                '
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Team Stats */}
                <div 
                    className='
                        mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white
                        relative overflow-hidden
                    '
                >
                    <div className='absolute inset-0 bg-black/10'></div>
                    <div className='relative z-10'>
                        <div className='grid md:grid-cols-4 gap-8 text-center'>
                            <div>
                                <div className='flex items-center justify-center mb-2'>
                                    <Award className='w-6 h-6 mr-2'/>
                                    <span className='text-3xl font-bold'>
                                        45+
                                    </span>
                                </div>
                                <p className='text-purple-100'>
                                    Awards Won
                                </p>
                            </div>
                            <div>
                                <div className='flex items-center justify-center mb-2'>
                                    <Coffee className='w-6 h-6 mr-2'/>
                                    <span className='text-3xl font-bold'>
                                        10+
                                    </span>
                                </div>
                                <p className='text-purple-100'>
                                    Coffee Won
                                </p>
                            </div>
                            <div>
                                <div className='flex items-center justify-center mb-2'>
                                    <span className='text-3xl font-bold'>
                                        650+
                                    </span>
                                </div>
                                <p className='text-purple-100'>
                                    Projects Delivered
                                </p>
                            </div>
                            <div>
                                <div className='flex items-center justify-center mb-2'>
                                    <span className='text-3xl font-bold'>
                                        99%
                                    </span>
                                </div>
                                <p className='text-purple-100'>
                                    Client Satisfaction
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Button CTA */}
                <div className='text-center mt-16'>
                    <div 
                        className='
                            inline-flex justify-center items-center space-x-4 bg-white
                            rounded-2xl p-6 text-white w-full shadow-lg border border-gray-100
                        '
                    >
                        <div>
                            <h3 className='text-lg font-semibold text-gray-900'>
                                Want to Join Our Team
                            </h3>
                            <p className='text-gray-600 text-sm'>
                                We're always looking for talented individuals
                            </p>
                        </div>
                        <button 
                            className='
                                bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 
                                rounded-xl font-semibold transition-colors duration-300 whitespace-nowrap
                                hover:from-purple-700 hover:to-pink-700 hover:shadow-purple-500/25 hover:scale-102
                            '
                        >
                            View Careers
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
