import { useNavigate } from 'react-router-dom'
import camera from '../../images/camera-ls.png'
import trimmer from '../../images/trimmer-ls.png'
import speaker from '../../images/speaker-ls.png'
import girl1 from '../../images/girl-1.png'

// gsap
import { useEffect } from "react";
import { ScrollToPlugin, ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";


const BackIcon = () => (
  <div className='cursor-pointer w-[46px] h-[28px] lg:scale-[0.8] scale-[0.6] backButton'>
    <svg width="46" height="28" viewBox="0 0 46 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M45.1084 13.3008H1.77637M1.77637 13.3008L13.7148 1.36237M1.77637 13.3008L13.7148 26.8094" stroke="white" stroke-width="1.5" />
    </svg>
  </div>
)

const Projects = () => {

  useEffect(() => {

    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

    gsap.set('.backButton', {
      x: 200,
      rotate: 360,
      opacity: 0
    })

    gsap.to('.backButton', {
      x: 0,
      rotate: 0,
      opacity: 1,
      duration: 1
    })

    gsap.set('.projectTitle', {
      y: 200,
      opacity: 0
    })

    gsap.to('.projectTitle', {
      y: 0,
      opacity: 1,
    })

    gsap.set('.cameraLS', {
      x: 900,
      opacity: 0
    })

    gsap.to('.cameraLS', {
      x: 0,
      opacity: 1,
      duration: 1
    })


    gsap.set('.speakerLS', {
      x: -200,
      opacity: 0
    })

    gsap.to('.speakerLS', {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.cameraLS',
        start: 'center',
        scrub: 1
      }
    })

    gsap.set('.trimmerLS', {
      x: 200,
      opacity: 0
    })

    gsap.to('.trimmerLS', {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.cameraLS',
        start: 'center',
        scrub: 1
      }
    })

    gsap.set('.reviewTitle', {
      y: 200,
      opacity: 0
    })

    gsap.to('.reviewTitle', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.trimmerLS',
        start: 'bottom',
        end: '150%',
        scrub: 1
      }
    })

    gsap.set('.reviewG', {
      x: -200,
      opacity: 0
    })
    gsap.to('.reviewG', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.trimmerLS',
        start: 'bottom',
        end: '150%',
        scrub: 1
      }
    })

    gsap.set('.reviewTxt', {
      x: 200,
      opacity: 0
    })

    gsap.to('.reviewTxt', {
      x: 0,
      opacity: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.trimmerLS',
        start: 'bottom',
        end: '150%',
        scrub: 1
      }
    })

  }, [])

  const navigate = useNavigate()

  return (
    <div className='lg:p-10 p-5 overflow-hidden'>
      {/* navigation back button */}
      <div onClick={() => navigate('/')} className='flex items-center cursor-pointer'>
        <BackIcon />
        <p className='lg:text-xl text-base font-interRegular'>Back</p>
      </div>

      <div className='flex flex-col justify-center items-center lg:mt-20 mt-10'>

        <p className='lg:w-[850px] text-center lg:text-7xl text-3xl font-interRegular projectTitle'>Camera Product Innovative Design</p>

        <div className='mt-10'>
          <img className='object-cover w-full cameraLS' src={camera} alt="" />
        </div>

        <div className='mt-10 lg:w-[1290px] '>
          <p className='lg:text-2xl text-base lg:text-start text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lectus a. Et gravida tincidunt morbi habitasse. Ultrices magna laoreet ornareLorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lectus a. Et gravida tincidunt morbi habitasse</p>
        </div>

      </div>

      <div className='lg:mt-20 mt-10 flex flex-col justify-center items-center'>

        <div className='grid lg:grid-cols-2 grid-cols-1 justify-center items-start lg:gap-20'>

          <div className='flex lg:w-[500px] flex-col gap-5 justify-evenly'>
            <img className='lg:w-[500px] speakerLS' src={speaker} alt="" />
            <div className='speakerLS'>
              <p className='lg:text-2xl text-base font-interRegular'>Laborum Lorem aute aliquip anim duis aliqua velit nulla in quis.Dolore exercitation cupidatat fugiat velit veniam ullamco.Incididunt irure consectetur nulla amet cillum laboris tempor ex fugiat occaecat ut.</p>
            </div>
          </div>

          <div className='flex lg:w-[500px] lg:flex-col-reverse flex-col justify-evenly gap-5'>
            <img className='lg:w-[500px] trimmerLS' src={trimmer} alt="" />
            <div className='trimmerLS'>
              <p className='lg:text-2xl text-base font-interRegular'>Laborum Lorem aute aliquip anim duis aliqua velit nulla in quis.Dolore exercitation cupidatat fugiat velit veniam ullamco.Incididunt irure consectetur nulla amet cillum laboris tempor ex fugiat occaecat ut.</p>
            </div>
          </div>

        </div>
      </div>

      <div className='lg:mt-[200px] mt-10 flex flex-col justify-center items-center lg:h-screen'>
        <p className='lg:w-[850px] text-center lg:text-7xl text-3xl font-interRegular reviewTitle'>Customer Review</p>

        <div className='flex lg:flex-row flex-col justify-center lg:items-end items-center lg:w-[1290px] lg:mt-20 mt-10 gap-10'>
          <img className='lg:w-[281px] w-full reviewG' src={girl1} alt="" />

          <div className='lg:w-[720px] flex flex-col gap-5'>
            <p className='lg:text-5xl text-2xl font-interRegular reviewTxt'>“Amazing Service That I never Imagined ”</p>
            <p className='lg:text-xl text-base font-interRegular reviewTxt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lectus a. Et gravida tincidunt morbi habitasse. Ultrices magna laoreet ornareLorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci odio amet consectetur volutpat sodales a lecdolor sit amet, consectetur adipiscing elit. Orci odio amet</p>
            <p className='text-base font-interRegular reviewTxt'>- CEO of Some Company</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Projects