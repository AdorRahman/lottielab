'use client'

import { useRef, useState } from 'react'
import Lottie, { LottieRefCurrentProps } from 'lottie-react'
import animationData from '../../public/lottie-file.json'

export default function Home() {
  const lottieRef = useRef<LottieRefCurrentProps>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  const handleTogglePlay = () => {
    if (isPlaying) {
      lottieRef.current?.pause()
      setIsPlaying(false)
    } else {
      lottieRef.current?.play()
      setIsPlaying(true)
    }
  }

  const handleStop = () => {
    lottieRef.current?.stop()
    setIsPlaying(false)
  }

  return (
    <main className="h-screen max-h-screen bg-gradient-to-br bg-white flex justify-center p-8 pt-0 border-t-[10px] border-black">
      <div className="w-[90%] lg:w-[45%]  rounded-2xl  p-8 pt-0 h-fit">
        <div className="mb-8">
          <Lottie
            lottieRef={lottieRef}
            animationData={animationData}
            autoplay={true}
            loop={true}
            className="w-full"
          />
        </div>

        <div className="flex justify-end gap-4 w-full">
          <button
            onClick={handleTogglePlay}
            className={isPlaying 
              ? 'px-2 lg:px-6 py-1.5 lg:py-3  rounded-lg text-white font-medium transition-all bg-orange-500 hover:bg-orange-600 shadow-inner transform translate-y-0.5' 
              : 'px-2 lg:px-6 py-1.5 lg:py-3  rounded-lg text-white font-medium transition-all bg-green-500 hover:bg-green-600 shadow-lg'
            }
          >
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button
            onClick={handleStop}
            className="px-2 lg:px-6 py-1.5 lg:py-3  rounded-lg bg-red-500 hover:bg-red-600 text-white font-medium transition-all shadow-lg"
          >
            Stop
          </button>
        </div>
      </div>
    </main>
  )
}