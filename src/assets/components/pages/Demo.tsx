import { gsap } from 'gsap'
import { useEffect } from 'react'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'

const Demo = () => {

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

        gsap.to('.b', {
            x: 900,
            rotate: 360,
            scrollTrigger: {
                trigger: '.b',
                toggleActions: "restart pause resume none",

            }
        })

        ScrollTrigger.create({
            trigger: '.content',
            pin: '.content',
            pinSpacing: false,
            start: 'center 30%',
            end: 'bottom top',
            markers: true,
            scrub: 1
        })

    }, [])


    return (
        <div>

            <div className='w-full bg-[#e2e2e2] p-20 flex justify-center items-start gap-10 section3'>

                <div className='content w-[500px] '>
                    <p className='text-3xl text-black'>Non velit adipisicing nisi dolore velit est nostrud amet.Culpa veniam ex nostrud nisi enim exercitation anim dolore quis incididunt Lorem ea sint.Velit mollit do ut duis velit irure culpa nostrud ut.</p>
                </div>

                <div className='flex flex-col items-center justify-center gap-10'>
                    {
                        [1, 1].map(item => (
                            <div className='w-[300px] h-[600px] bg-[#808080] shadow-md' />
                        ))
                    }
                </div>

            </div>

            <div className='bg-[#808080] w-full h-screen'></div>

        </div>
    )
}

export default Demo