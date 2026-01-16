import { ArrowRight, ExternalLink, Eye, Heart } from 'lucide-react'
import React, { useState } from 'react'

const filters = [
    {id: "all", label: "All Projects"},
    {id: "web", label: "Web Design"},
    {id: "mobile", label: "Mobile Apps"},
    {id: "branding", label: "Branding"},
    {id: "ecommerce", label: "E-commerce"},
]

const projects = [
    {
        id: 1,
        title: "Project Name",
        category: "E-commerce Platform",
        description:
            "Short one-line problem statement. Outcome or result achieved",
        image: 
            "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800",
        tags: ["React", "Node.js", "AR Technology"],
        type: "ecommerce",
        stats: {views: "2.5K", likes: "180"},
    },
    // {
    //     id: 2,
    //     title: "Project Name",
    //     category: "Web Application",
    //     description:
    //         "a detailed description of the functionality",
    //     image: 
    //         "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    //     tags: ["Vue.js", "D3.js", "WebSocket"],
    //     type: "web",
    //     stats: {views: "3.2K", likes: "245"},
    // },
    // {
    //     id: 3,
    //     title: "Project Name",
    //     category: "Mobile Development",
    //     description:
    //         "a detailed description of the functionality",
    //     image: 
    //         "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg",
    //     tags: ["React Native", "Health Kit", "AI"],
    //     type: "mobile",
    //     stats: {views: "1.8K", likes: "156"},
    // },
    // {
    //     id: 4,
    //     title: "Project Name",
    //     category: "Brand Identity",
    //     description:
    //         "a detailed description of the functionality",
    //     image: 
    //         "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    //     tags: ["Brand Strategy", "Logo Design", "Guidlines"],
    //     type: "branding",
    //     stats: {views: "4.1K", likes: "320"},
    // },
    // {
    //     id: 5,
    //     title: "Project Name",
    //     category: "Web Platform",
    //     description:
    //         "a detailed description of the functionality",
    //     image: 
    //         "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    //     tags: ["Next.js", "Stripe", "Google Maps"],
    //     type: "web",
    //     stats: {views: "2.9K", likes: "198"},
    // },
    // {
    //     id: 6,
    //     title: "Project Name",
    //     category: "Mobile Application",
    //     description:
    //         "a detailed description of the functionality",
    //     image: 
    //         "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800",
    //     tags: ["Flutter", "Blockchain", "Security"],
    //     type: "mobile",
    //     stats: {views: "5.3K", likes: "412"},
    // },
]

function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("all")

    const filteredProjects = 
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.type === activeFilter)


    return (
        <section 
            id='portfolio'
            className='py-20 relative overflow-hidden'
        >
            {/* Background Elements */}
            <div 
                className='
                    absolute top-1/4 left-0 w-72 h-72 bg-gradient-to-r from-purple-200 to-pink-200 
                    rounded-full filter blur-3xl opacity-30
                '
            ></div>
            <div 
                className='
                    absolute bottom-1/4 right-0 w-72 h-72 bg-gradient-to-l from-blue-200 to-cyan-200 
                    rounded-full filter blur-3xl opacity-30
                '
            ></div>

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 relative z-10'>
                <div className='text-center mb-16'>
                    <div className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6'>
                        <span className='text-purple-600 font-semibold text-sm'>
                            Our Portfolio
                        </span>
                    </div>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                        Featured
                        <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>
                            Projects
                        </span>
                    </h2>

                    <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                        A selection of projects showcasing our expertise in AI integration, automation, and full-stack development. Each project is built with scalability, performance, and long-term maintainability in mind. 
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className='flex flex-wrap justify-center gap-4 mb-12'>
                    {filters.map((filter) => {
                        return(
                            <button
                                onClick={() => setActiveFilter(filter.id)}
                                className={`
                                    px-6 py-3 rounded-2xl font-semibold transition-all duration-300
                                    ${
                                        activeFilter === filter.id
                                            ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                                            : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-purple-200"
                                    }
                                `}
                            >
                                {filter.label}
                            </button>
                        )
                    })}
                </div>

                {/* Project Grid */}
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {filteredProjects.map((project) => {
                        return (
                            <div 
                                className='
                                    group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all
                                    duration-500 hover:-translate-y-2 border border-gray-100
                                '
                            >
                                <div className='relative overflow-hidden'>
                                    <img
                                        src={project.image}
                                        alt=''
                                        className='
                                            w-full h-64 object-cover group-hover:scale-110 transition-all duration-500
                                        '
                                    />
                                    <div 
                                        className='
                                            absolute inset-0 bg-gradient-to-t from-black/60 via-transparent 
                                            to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300
                                        '
                                    >
                                        <div className='absolute bottom-4 left-4 right-4 flex justify-between items-end'>
                                            <div className='flex space-x-2'>
                                                <div 
                                                    className='
                                                        flex items-center space-x-1 bg-white/20 
                                                        backdrop-blur-sm rounded-full px-3 py-1
                                                    '
                                                >
                                                    <Eye className='text-white' size={14}/>
                                                    <span className='text-white text-xs font-medium'>
                                                        {project.stats.views}
                                                    </span> 
                                                </div>

                                                <div 
                                                    className='
                                                        flex items-center space-x-1 bg-white/20 
                                                        backdrop-blur-sm rounded-full px-3 py-1
                                                    '
                                                >
                                                    <Heart className='text-white' size={14}/>
                                                    <span className='text-white text-xs font-medium'>
                                                        {project.stats.likes}
                                                    </span> 
                                                </div>
                                            </div>

                                            <button 
                                                className='
                                                    w-10 h-10 bg-white rounded-full flex items-center justify-center 
                                                    hover:scale-110 transition-all duration-300
                                                '
                                            >
                                                <ExternalLink className='text-gray-700' size={18}/>
                                            </button>
                                        </div>
                                    </div>    
                                </div>

                                <div className='p-6'>
                                    <div className='text-sm text-purple-600 font-semibold mb-2'>
                                        {project.category}
                                    </div>
                                    <h3 
                                        className='
                                            text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600
                                            transition-all duration-300
                                        '
                                    >
                                        {project.title}
                                    </h3>
                                    <p className='text-gray-600 mb-4 leading-relaxed'>
                                        {project.description}
                                    </p>

                                    <div className='flex flex-wrap gap-2 mb-4'>
                                        {project.tags.map((tag, tagindex) => {
                                            return (
                                                <span 
                                                    className='
                                                        px-3 py-1 bg-gradient-to-r from-purple-50 to-pink-50 
                                                        text-purple-600 text-xs font-medium rounded-full border 
                                                        border-purple-100'
                                                    key={tagindex}
                                                >
                                                    {tag}
                                                </span>
                                            )
                                        })}
                                    </div>

                                    <button 
                                        className='
                                            group/btn inline-flex items-center text-purple-600 font-semibold
                                            hover:text-pink-600 transition-all duration-300
                                        '
                                    >
                                        Request Full Case Studies 
                                        <ArrowRight 
                                            className='
                                                ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300
                                            '
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
                            bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 text-white 
                            relative overflow-hidden
                        '
                    >
                        <div className='absolute isnet-0 bg-black/10'></div>
                        <div className='relative z-10'>
                            <h3 className='text-2xl mb-4 font-semibold'>
                                Like What You See?
                            </h3>
                            <p className='text-purple-100 mb-6 max-w-2xl mx-auto'>
                                Loren ipsum Loren ipsum Loren ipsum Loren ipsum 
                            </p>
                            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                                <button 
                                    className='
                                        bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold
                                        hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap
                                    '
                                >
                                    View All Projects
                                </button>
                                <button 
                                    className='
                                        border-2 border-white text-white px-6 py-3 rounded-xl font-semibold
                                        hover:bg-white hover:text-purple-600 transition-colors duration-300 whitespace-nowrap
                                    '
                                >
                                    Start your Project
                                </button>
                                
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio
