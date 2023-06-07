import React from 'react'
import Header from '../Header'

// images
import camera from '../../images/camera.png'
import headphones from '../../images/headphones.png'
import lens from '../../images/lens.png'
import speaker from '../../images/speaker.png'
import trimmer from '../../images/trimmer.png'
import polaroid from '../../images/polaroid.png'

// images people
import guy1 from '../../images/guy-1.png'
import guy2 from '../../images/guy-2.png'
import guy3 from '../../images/guy-3.png'
import girl1 from '../../images/girl-1.png'
import Footer from '../Footer'

// react marquee
import Marquee from "react-fast-marquee";

// gsap
import { useEffect } from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";


const ServiceCard = ({ item, selector }: any) => {
    return (
        <div className={`lg:w-[500px] w-[300px] h-[300px] lg:h-[500px] bg-[#f2f2f2] flex flex-col p-5 text-black relative gap-5 ${selector}`}>
            <p className='lg:text-6xl text-3xl font-interBold lg:w-[300px]'>{item}</p>
            <p className='lg:text-2xl text-base font-interRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lectus a. Et gravida tincidunt morbi habitasse. Ultrices magna laoreet ornare</p>
            <p className='lg:text-2xl text-base font-interMedium'>Get a quote</p>
        </div>
    )
}

const Title = ({ title, selector }: any) => {
    return (
        <div className={`flex justify-center items-center ${selector}`}>
            <p className='lg:text-7xl text-5xl font-interRegular'>{title}</p>
        </div>
    )
}


const Home = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)
        gsap.set('.heroText', {
            y: 100,
            opacity: 0,

        })
        gsap.to('.heroText', {
            stagger: 0.1,
            y: 0,
            opacity: 1,
        })

        gsap.set(".odd", {
            x: -100,
            opacity: 0,
        })
        gsap.set(".even", {
            x: 100,
            opacity: 0,
        })

        gsap.to(".odd", {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.heroContainer',
                start: '90%',
                end: '220%',
                scrub: 4,
            }
        })
        gsap.to(".even", {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.heroContainer',
                start: '90%',
                scrub: 4,
            }
        })

        gsap.set(".people", {
            y: 100,
            opacity: 0,
        })

        gsap.to(".people", {
            y: 0,
            stagger: 0.1,
            opacity: 1,
            scrollTrigger: {
                trigger: '.portfolioContainer',
                start: 'bottom',
                end: '110%',
                scrub: 2,
            }
        })

        gsap.set(".webdev", {
            x: -200,
            opacity: 0,
        })
        gsap.set(".mobapp", {
            x: 200,
            opacity: 0,
        })
        gsap.set(".prod", {
            y: -200,
            opacity: 0,
        })
        gsap.set(".graphic", {
            y: 200,
            opacity: 0,
        })

        gsap.to([".webdev", ".mobapp", ".prod", ".graphic"], {
            x: 0,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.aboutContainer',
                start: 'center',
                end: '140%',
                scrub: 1,
            }
        })

        gsap.set('.portfolio', {
            y: -100,
            opacity: 0
        })

        gsap.to('.portfolio', {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: '.heroContainer',
                start: 'bottom',
                scrub: 1,
                markers: true
            }
        })



    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className='lg:px-10 p-5 flex flex-col justify-center items-center overflow-hidden'>
                {/* Hero */}
                <div className=' flex justify-center items-center h-screen heroContainer'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='lg:flex hidden '>
                            {
                                "Creative Brand & Identity Design Agency. We ".split(' ').map(item => (
                                    <p className='text-center lg:text-4xl text-xl heroText'>{item}&nbsp;</p>
                                ))
                            }
                        </div>
                        <div className='lg:flex hidden'>
                            {
                                "Are Imagine Stunning Visual Designs.".split(' ').map(item => (
                                    <p className='text-center lg:text-4xl text-xl heroText'>{item}&nbsp;</p>
                                ))
                            }
                        </div>

                        <p className='text-center lg:w-[720px] lg:text-4xl text-xl lg:hidden block'>Creative Brand & Identity Design Agency. We Are Imagine Stunning Visual Designs.</p>
                    </div>
                </div>
                {/* Portfolio */}
                <div className='lg:mt-40 mt-20 flex flex-col justify-center items-center portfolioContainer'>
                    <Title title="Portfolio" selector={"portfolio"} />

                    <div className='lg:mt-20 mt-10 lg:grid hidden grid-cols-2 justify-center items-center gap-2'>
                        <img className='odd' src={camera} alt="" />
                        <img className='even' src={headphones} alt="" />
                        <img className='odd' src={trimmer} alt="" />
                        <img className='even' src={lens} alt="" />
                        <img className='odd' src={speaker} alt="" />
                        <img className='even' src={polaroid} alt="" />
                    </div>

                    <div className='lg:hidden block'>
                        <Marquee>
                            <img className='w-[290px] h-[290px] object-cover ml-5 mt-5' src={camera} alt="" />
                            <img className='w-[290px] h-[290px] object-cover ml-5 mt-5' src={headphones} alt="" />
                            <img className='w-[290px] h-[290px] object-cover ml-5 mt-5' src={trimmer} alt="" />
                            <img className='w-[290px] h-[290px] object-cover ml-5 mt-5' src={lens} alt="" />
                            <img className='w-[290px] h-[290px] object-cover ml-5 mt-5' src={speaker} alt="" />
                            <img className='w-[290px] h-[290px] object-cover ml-5 mt-5' src={polaroid} alt="" />
                        </Marquee>
                    </div>
                </div>

                {/* About */}
                <div className='lg:mt-40 mt-20 flex flex-col justify-center items-center aboutContainer'>
                    <Title title="About" />

                    <div className='flex justify-center items-center mt-10'>
                        <p className='text-center lg:w-[900px] lg:text-2xl text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lectus a. Et gravida tincidunt morbi habitasse. Ultrices magna laoreet ornareLorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lectus a. Et gravida tincidunt morbi habitasse</p>
                    </div>

                    <div className='lg:mt-20 mt-10 lg:grid hidden lg:grid-cols-4 grid-cols-2   gap-2 justify-center items-center'>
                        <img className='people' src={guy1} alt="" />
                        <img className='people' src={guy2} alt="" />
                        <img className='people' src={girl1} alt="" />
                        <img className='people' src={guy3} alt="" />
                    </div>

                    <div className='lg:hidden block'>
                        <Marquee direction='right'>
                            <img className='ml-5 mt-5' src={guy1} alt="" />
                            <img className='ml-5 mt-5' src={guy2} alt="" />
                            <img className='ml-5 mt-5' src={girl1} alt="" />
                            <img className='ml-5 mt-5' src={guy3} alt="" />
                        </Marquee>
                    </div>
                </div>

                {/* Services*/}
                <div className='lg:mt-40 mt-20 flex flex-col justify-center items-center'>
                    <Title title="Services" />

                    <div className='lg:mt-20 mt-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:gap-2 gap-5'>
                        {/* {
                            ["Web Development", "Product Design", "Graphic Design", "Mobile App"].map((item) => (
                                <ServiceCard item={item} selector="webdev" />
                            ))
                        } */}
                        <ServiceCard item={"Web Development"} selector="webdev" />
                        <ServiceCard item={"Product Design"} selector="prod" />
                        <ServiceCard item={"Graphic Design"} selector="graphic" />
                        <ServiceCard item={"Mobile App"} selector="mobapp" />

                    </div>



                </div>

                {/* Contact */}
                <div className='lg:mt-40 mt-20 flex flex-col justify-center items-center'>
                    <Title title="Contact" />

                    <div className='lg:mt-20 mt-10 flex flex-col justify-center items-center'>
                        <p className='lg:text-4xl text-2xl font-interRegular'>contact@gmail.com</p>
                        <p className='lg:text-4xl text-2xl font-interRegular'>+91 9731816547</p>

                    </div>

                </div>

            </div>
            <Footer />
        </React.Fragment>
    )
}

export default Home