import { useRef, useEffect } from 'react'

import { urlForFile } from 'lib/sanity.file'

interface VideoDefaultProps {
  video: any
}

export const VideoDefault: React.FC<VideoDefaultProps> = ({ video }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const videoElement = videoRef.current // Capture the current ref value
    if (!videoElement) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play()
        } else {
          videoElement.pause()
        }
      },
      { threshold: 0.5 },
    )

    observer.observe(videoElement)

    return () => {
      observer.unobserve(videoElement)
    }
  }, [])

  return (
    <section className="mt-[4rem] lg:mt-[6rem] px-8 lg:px-16 xl:px-32 flex flex-col justify-center items-center max-w-[1440px] place-self-center">
      <div className="mt-[2rem] lg:mt-[4rem] w-full">
        {/* Video Container */}
        <div className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[500px] xl:h-[700px] 2xl:h-[700px] w-full shadow-md">
          <video
            ref={videoRef}
            src={urlForFile(video)}
            className="object-contain xl:object-cover w-full h-full"
            controls
            muted
          />
        </div>
      </div>
    </section>
  )
}
