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


const Title = ({ title }: any) => {
    return (
        <div className='flex justify-center items-center'>
            <p className='lg:text-7xl text-5xl font-interRegular'>{title}</p>
        </div>
    )
}

const SubHeading = ({ text }: any) => {
    return (
        <div className='flex justify-center items-center'>
            <p className='text-center lg:w-[720px] lg:text-4xl text-xl'>{text}</p>
        </div>
    )
}


const Home = () => {
    return (
        <React.Fragment>
            <Header />
            <div className='lg:px-10 p-5 flex flex-col justify-center items-center'>

                <div className='mt-20 mb-10'>
                    <SubHeading text="Creative Brand & Identity Design Agency. We Are Imagine Stunning Visual Designs." />
                </div>

                <div className='lg:mt-40 mt-20 flex flex-col justify-center items-center'>
                    <Title title="Portfolio" />

                    <div className='lg:mt-20 mt-10 grid grid-cols-2 justify-center items-center gap-2'>
                        <img src={camera} alt="" />
                        <img src={headphones} alt="" />
                        <img src={trimmer} alt="" />
                        <img src={lens} alt="" />
                        <img src={speaker} alt="" />
                        <img src={polaroid} alt="" />
                    </div>
                </div>

                <div className='lg:mt-40 mt-20 flex flex-col justify-center items-center'>
                    <Title title="About" />

                    <div className='flex justify-center items-center mt-10'>
                        <p className='text-center lg:w-[900px] lg:text-2xl text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lectus a. Et gravida tincidunt morbi habitasse. Ultrices magna laoreet ornareLorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lectus a. Et gravida tincidunt morbi habitasse</p>
                    </div>

                    <div className='lg:mt-20 mt-10 grid lg:grid-cols-4 grid-cols-2   gap-2 justify-center items-center'>
                        <img src={guy1} alt="" />
                        <img src={guy2} alt="" />
                        <img src={girl1} alt="" />
                        <img src={guy3} alt="" />
                    </div>
                </div>

                <div className='lg:mt-40 mt-20 flex flex-col justify-center items-center'>
                    <Title title="Services" />

                    <div className='lg:mt-20 mt-10 grid lg:grid-cols-2 grid-cols-1 justify-center items-center lg:gap-2 gap-5'>
                        {
                            ["Web Development", "Product Design", "Graphic Design", "Mobile App"].map((item) => (
                                <div className='lg:w-[500px] lg:h-[500px] bg-[#f2f2f2] flex flex-col p-5 text-black relative gap-5'>
                                    <p className='lg:text-6xl text-3xl font-interBold lg:w-[300px]'>{item}</p>
                                    <p className='lg:text-2xl text-base font-interRegular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lectus a. Et gravida tincidunt morbi habitasse. Ultrices magna laoreet ornare</p>
                                    <p className='lg:text-2xl text-base font-interMedium'>Get a quote</p>
                                </div>
                            ))
                        }


                    </div>

                </div>

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