import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

interface InfographicDefaultProps {
  title: string
  customElements: any[]
}

export const InfographicDefault: React.FC<InfographicDefaultProps> = ({
  title,
  customElements,
}) => {
  const [factsActiveIndex, setFactsActiveIndex] = useState<number>(0)

  const handleFactsNext = () => {
    setFactsActiveIndex((prev) => (prev + 1) % customElements.length)
  }

  const handleFactsPrev = () => {
    setFactsActiveIndex((prev) =>
      prev === 0 ? customElements.length - 1 : prev - 1,
    )
  }

  return (
    <section className="mt-[4rem] lg:mt-[6rem] w-full px-8 lg:px-16 xl:px-64">
      <h1 className="text-2xl font-sofia font-bold xl:text-4xl 2xl:text-5xl text-center">
        {title}
      </h1>

      <div className="mt-[2rem] lg:mt-[4rem] max-w-[1440px] mx-auto">
        {/* Testimonials Container */}
        <ul className="relative h-[450px]">
          {/* Testimonial Box */}
          {customElements.map((fact, index) => {
            const { factTitle, factDescription } = fact

            // Calculate the relative position of the element
            const relativeIndex = index - factsActiveIndex

            // Dynamically compute the translateX value
            const translateXValue = `calc(${relativeIndex * 100}% + ${
              relativeIndex * 36
            }px)`
            return (
              <li
                key={index}
                style={{
                  transform: `translateX(${translateXValue})`,
                  transition: 'transform 0.2s ease-in-out',
                }}
                className={`rounded-[2.5rem] absolute w-full lg:w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-center items-center space-y-2 shadow-md`}
              >
                {/* Number Text */}
                <h1 className="mt-4 font-sofia font-normal text-5xl leading-tight text-white text-center">
                  {factTitle}
                </h1>

                <h2 className="font-sofia font-normal text-white text-xl text-center">
                  {factDescription}
                </h2>
              </li>
            )
          })}
        </ul>
        {/* Testimonial Control Buttons */}
        <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${factsActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={factsActiveIndex === 0 ? true : false}
              onClick={() => handleFactsPrev()}
            >
              <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
            </button>
          </li>
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${factsActiveIndex === customElements.length - 1 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={
                factsActiveIndex === customElements.length - 1 ? true : false
              }
              onClick={() => handleFactsNext()}
            >
              <FontAwesomeIcon icon={faChevronRight} color="white" size="lg" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}
