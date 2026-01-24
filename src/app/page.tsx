'use client'

import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, useGLTF, Center } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger)

// function Model() {
//   const { scene } = useGLTF('/surferturtle-v2.glb')
//   return <primitive object={scene} scale={3} />
// }

export default function Home() {
  const [showButton, setShowButton] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const lenis = new Lenis()
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    const path = document.getElementById('stroke-path') as unknown as SVGPathElement
    if (!path) return

    const pathLength = path.getTotalLength()
    path.style.strokeDasharray = `${pathLength}`
    path.style.strokeDashoffset = `${pathLength}`

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.spotlight',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    tl.to(path, {
      strokeDashoffset: pathLength * 0.35,
      duration: 4.5,
      ease: 'none',
    })

    .to(path, {
      strokeDashoffset: pathLength * 0.3,
      duration: 0.5,
      ease: 'none',
    })
    .to(path, {
      strokeDashoffset: 0,
      duration: 4.5,
      ease: 'none',
    })
  }, [])

  return (
    <main>
      <div className='model-3d'>
        <DotLottieReact key={windowWidth} src="/amination-1.lottie" loop autoplay />
      </div>
       {/* <div className='model-3d'>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <Suspense fallback={null}>
            <Center>
              <Model />
            </Center>
          </Suspense>
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>  */}
      <div className="spotlight">
        <div className="svg-path">
          <svg width="4163" height="16862" viewBox="0 0 4163 16862" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="stroke-path" d="M2730.24 500.078C-242.756 997.578 126.744 3827.58 2227.73 4810.08C4663.24 6117.08 3711.13 9860.11 1522.63 9605.58C164.129 9447.58 154.128 7434.9 1522.63 7308.08C2094.13 7255.12 2891.13 7566.08 3536.63 9267.58C4495.98 11964.3 -892.871 12120.6 1712.63 16361.6" stroke="#03A9D1" strokeWidth="1000" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="go-to-top"
        >
          ↑
        </button>
      )}
    </main>
  )
}