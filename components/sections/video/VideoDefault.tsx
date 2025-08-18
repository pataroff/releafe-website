import { useRef, useEffect } from 'react'

import { urlForFile } from 'lib/sanity.file'

interface VideoDefaultProps {
  _id: string
  video: any
}

export const VideoDefault: React.FC<VideoDefaultProps> = ({ _id, video }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play()
        } else {
          videoRef.current.pause()
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the video is visible
      },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  return (
    <section
      key={_id}
      className="mt-[4rem] lg:mt-[6rem] px-8 lg:px-16 xl:px-32 flex flex-col justify-center items-center max-w-[1440px] place-self-center"
    >
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
