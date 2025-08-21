import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

interface CoreValuesDefaultProps {
  title: string
  customElements: any[]
}

export const CoreValuesDefault: React.FC<CoreValuesDefaultProps> = ({
  title,
  customElements,
}) => {
  const [valuesActiveIndex, setValuesActiveIndex] = useState<number>(0)

  const handleValuesNext = () => {
    setValuesActiveIndex((prev) => (prev + 1) % customElements.length)
  }

  const handleValuesPrev = () => {
    setValuesActiveIndex((prev) =>
      prev === 0 ? customElements.length - 1 : prev - 1,
    )
  }

  return (
    <section className="mt-[4rem] lg:mt-[6rem] w-full">
      <h2 className="font-sofia font-bold text-3xl xl:text-4xl text-center">
        {title}
      </h2>
      {/* Core Values Wrapper */}
      <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px] px-5 lg:px-16 xl:px-32">
        {/* Core Values Container */}
        <ul className="relative h-[450px]">
          {/* Core Values Box */}
          {customElements.map((value, index) => {
            const { coreValueEmoji, coreValueTitle, coreValueDescription } =
              value

            // Calculate the relative position of the element
            const relativeIndex = index - valuesActiveIndex

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
                className={`rounded-[2.5rem] absolute w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-center items-center space-y-2 shadow-md`}
              >
                <h2 className="mt-4 font-sofia font-normal text-5xl leading-tight text-white text-center">
                  {coreValueEmoji}
                </h2>

                <h3 className="font-sofia font-semibold text-white text-2xl text-center">
                  {coreValueTitle}
                </h3>
                <h3 className="font-sofia font-light text-white text-lg text-center">
                  {coreValueDescription}
                </h3>
              </li>
            )
          })}
        </ul>
        {/* Core Values Control Buttons */}
        <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${valuesActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={valuesActiveIndex === 0 ? true : false}
              onClick={() => handleValuesPrev()}
            >
              <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
            </button>
          </li>
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${valuesActiveIndex === customElements.length - 1 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={
                valuesActiveIndex === customElements.length - 1 ? true : false
              }
              onClick={() => handleValuesNext()}
            >
              <FontAwesomeIcon icon={faChevronRight} color="white" size="lg" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}
