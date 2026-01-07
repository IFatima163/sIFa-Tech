import { Calendar, Clock, Mail, MapPin, MessageCircle, Phone, Send, User } from 'lucide-react'
import React, { useState } from 'react'

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Get in touch via email",
        details: ["hello@sifatech.com", "support@sifatech.com"],
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak with our team",
        details: ["+60 10 202 6820", "Mon-Sun 6 AM-11 PM UTC+8"],
        color: "from-blue-500 to-cyan-500"
    },
    // {
    //     icon: MapPin,
    //     title: "Visit Us",
    //     description: "Come to our office",
    //     details: ["123 Innovation Street", "San Francisco, CA 94105"],
    //     color: "from-green-500 to-teal-500"
    // },
    // {
    //     icon: MessageCircle,
    //     title: "Live Chat",
    //     description: "Chat with support",
    //     details: ["Available 24/7", "Instant responses"],
    //     color: "from-yellow-500 to-orange-500"
    // },
]

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form Submitted", formData)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    
  return (
    <section id='contact'>
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
                    <span className='text-purple-600 font-semibold'>Get in Touch</span>
                </div>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-6'>
                    Let's Start
                    <span 
                        className='
                            block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600
                        '
                    >
                        Something Great
                    </span>
                </h2>
                <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
                    Loren ipsum Loren ipsum Loren ipsum Loren ipsum 
                </p>                    
            </div>

            {/* Contact Method */}
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16'>
                {contactMethods.map((method, index) => {
                    return (
                        <div 
                            className='
                                group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all 
                                duration-300 hover:-translate-y-2 border border-gray-100 text-center
                            '
                        >
                            <div
                                className={`
                                    w-16 h-16 bg-gradient-to-r rounded-2xl flex items-center justify-center
                                    mx-auto mb-4 group-hover:scale-110 transition-all duration-300 ${method.color}
                                `}
                            >
                                <method.icon size={24} className='text-white'/>
                            </div>
                            <h3 className='text-lg font-bold text-gray-900 mb-2'>
                                {method.title}
                            </h3>
                            <p className='text-gray-600 text-sm mb-3'>
                                {method.description}
                            </p>

                            <div className='space-y-1'>
                                {method.details.map((detail, detindex) => {
                                    return (
                                        <p className='text-gray-700 text-sm font-medium' key={detindex}>
                                            {detail}
                                        </p>
                                    )
                                })}                                
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Contact Form */}
            <div className='grid lg:grid-cols-2 gap-12'>
                <div className='bg-white rounded-3xl shadow-xl p-8 border border-gray-100'>
                    <div className='mb-8'>
                        <h3 className='text-2xl font-black text-gray-900 mb-2'>
                            Send us a Message
                        </h3>
                        <p className='text-gray-600'>
                            Fill out the form below and we'll get back to you within hours
                        </p>
                    </div>

                    <form className='space-y-6' onSubmit={handleSubmit}>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div>
                                <label
                                    htmlFor=''
                                    className='block text-sm font-semibold text-gray-700 mb-2'
                                >
                                    Full Name *
                                </label>
                                <input
                                    type='text'
                                    id='name'
                                    name='name'
                                    onChange={handleChange}
                                    className='
                                        w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                        focus:ring-purple-500 focus:border-transparent transition-all 
                                        duration-300 bg-gray-50 focus:bg-white
                                    '
                                    placeholder='John Doe'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor=''
                                    className='block text-sm font-semibold text-gray-700 mb-2'
                                >
                                    Email Address *
                                </label>
                                <input
                                    type='email'
                                    id='email'
                                    name='email'
                                    onChange={handleChange}
                                    required
                                    className='
                                        w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                        focus:ring-purple-500 focus:border-transparent transition-all 
                                        duration-300 bg-gray-50 focus:bg-white
                                    '
                                    placeholder='john@company.com'
                                />
                            </div>
                        </div>
                        <div className='grid md:grid-cols-2 gap-6'>
                            <div>
                                <label
                                    htmlFor=''
                                    className='block text-sm font-semibold text-gray-700 mb-2'
                                >
                                    Company *
                                </label>
                                <input
                                    type='text'
                                    id='company'
                                    name='company'
                                    onChange={handleChange}
                                    className='
                                        w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                        focus:ring-purple-500 focus:border-transparent transition-all 
                                        duration-300 bg-gray-50 focus:bg-white
                                    '
                                    placeholder='your company'
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor=''
                                    className='block text-sm font-semibold text-gray-700 mb-2'
                                >
                                    Project Budget *
                                </label>
                                <select 
                                    id='budget'
                                    name='budget'
                                    onChange={handleChange}
                                    className='
                                        w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                        focus:ring-purple-500 focus:border-transparent transition-all 
                                        duration-300 bg-gray-50 focus:bg-white
                                    '
                                >
                                    <option value=''>Select Your Budget Range</option>
                                    <option value='5k-10k'>$5 - $10K</option>
                                    <option value='10k-25k'>$10 - $25K</option>
                                    <option value='25k-50k'>$25 - $50K</option>
                                    <option value='50k+'>$50K+</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor=''
                                className='block text-sm font-semibold text-gray-700 mb-2'
                            >
                                Project Details *
                            </label>
                            <textarea
                                type='text'
                                id='message'
                                name='message'
                                    onChange={handleChange}
                                required
                                className='
                                    w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2
                                    focus:ring-purple-500 focus:border-transparent transition-all 
                                    duration-300 bg-gray-50 focus:bg-white
                                '
                                placeholder='your company'
                            ></textarea>
                        </div>
                        <button
                            type='submit'
                            className='
                                w-fit bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700
                                hover:to-pink-700 text-white px-6 py-4 rounded-xl font-semibold
                                transition-all duration-300 flex items-center justify-center shadow-lg
                                hover:shadow-xl hover:scale-105
                            '
                        >
                            Send Message
                            <Send className='ml-2' size={20}/>
                        </button>
                    </form>
                </div>

                {/* Additional Info */}
                <div className='space-y-8'>
                    <div 
                        className='
                            bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl 
                            p-8 text-white relative overflow-hidden
                        '
                    >
                        <div 
                            className='
                                absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full
                                -translate-y-16 translate-x-16
                            '
                        ></div>
                        <div className='relative z-10'>
                            <h3 className='text-2xl font-bold mb-4'>
                                Quick Actions
                            </h3>
                            <div className='space-y-4'>
                                <button 
                                    className='
                                        w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white
                                        p-4 rounded-2xl transition-all duration-300 flex items-center
                                    '
                                >
                                    <Calendar size={20} className='mr-3'/>
                                    <div className='text-left'>
                                        <div className='font-semibold'>
                                            Schedule a Call
                                        </div>
                                        <div className='text-sm text-purple-100'>
                                            Book a free consultation
                                        </div>
                                    </div>
                                </button>
                                <button 
                                    className='
                                        w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white
                                        p-4 rounded-2xl transition-all duration-300 flex items-center
                                    '
                                >
                                    <MessageCircle size={20} className='mr-3'/>
                                    <div className='text-left'>
                                        <div className='font-semibold'>
                                            Live Chat
                                        </div>
                                        <div className='text-sm text-purple-100'>
                                            Chat with our team now
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Response Time */}
                    <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
                        <div className='flex items-center mb-4'>
                            <Clock className='w-6 h-6 text-purple-600 mr-2'/>
                            <h3 className='text-lg font-bold text-gray-900'>
                                Response Time
                            </h3>
                        </div>
                        <div className='flex justify-between items-center space-y-2'>
                            <span className='text-gray-600'>Email inquires</span>
                            <span className='font-semibold'>Within 2 hours</span>
                        </div>
                        <div className='flex justify-between items-center space-y-2'>
                            <span className='text-gray-600'>Project proposals</span>
                            <span className='font-semibold'>Within 24 hours</span>
                        </div>
                        <div className='flex justify-between items-center space-y-2'>
                            <span className='text-gray-600'>Phone calls</span>
                            <span className='font-semibold'>Same Day</span>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className='bg-white rounded-2xl p-6 shadow-lg border border-gray-100'>
                        <h3 className='text-lg font-bold text-gray-900 mb-4'>
                            Frequently Asked
                        </h3>
                        <div className='space-y-3'>
                            <div>
                                <h4 className='font-semibold text-gray-900 text-sm'>
                                    How long does a typical project take?
                                </h4>
                                <p className='text-gray-600 text-sm'>
                                    Most projects are completed within 4-12 weeks, depending on scope and complexity.
                                </p>
                            </div>
                            <div>
                                <h4 className='font-semibold text-gray-900 text-sm'>
                                    Do you work with startups?
                                </h4>
                                <p className='text-gray-600 text-sm'>
                                    Absolutely! We love working with startups and offer flexible pricing options.
                                </p>
                            </div>
                            <div>
                                <h4 className='font-semibold text-gray-900 text-sm'>
                                    What's included in your services?
                                </h4>
                                <p className='text-gray-600 text-sm'>
                                    We provide end-to-end solutions including design, development, and ongoing support.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>

            {/* Newsletter */}
            {/* <div 
                className='
                    bg-gradient-to-r from-purple-600 to-pink-600 text-white relative overflow-hidden
                    backdrop-blur-sm rounded-2xl p-8 mb-12 border border-purple-500/20 mt-20
                '
            >
                <div className='text-center'>
                    <h3 className='text-2xl font-bold mb-4'>Stay Updated</h3>
                    <p  className='text-gray-300 mb-6 max-w-2xl mx-auto'>
                        Subscribe to our newsletter for the latest insights, tips, and updates from the world of digital innovation.
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto'>
                        <input 
                            type='email'
                            placeholder='Enter your email'
                            className='
                                flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20
                                rounded-xl text-white placeholder-gray-300 focus:outline-none
                                focus:ring-2 focus:ring-purple-500
                            '
                        />
                        <button 
                            className='
                                bg-white text-gray-500 px-6 py-3 rounded-xl font-semibold transition-all
                                duration-300 hover:scale-105 whitespace-nowrap
                            '
                        >
                            Subscribe
                        </button>
                    </div>
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Contact
