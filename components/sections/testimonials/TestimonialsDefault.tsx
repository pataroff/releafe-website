import { useState } from 'react'

import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

interface TestimonialsDefaultProps {
  title: string
  customElements: any[]
}

export const TestimonialsDefault: React.FC<TestimonialsDefaultProps> = ({
  title,
  customElements,
}) => {
  const [testimonialsActiveIndex, setTestimonialsActiveIndex] =
    useState<number>(0)

  const handleTestimonialsNext = () => {
    setTestimonialsActiveIndex((prev) => (prev + 1) % customElements.length)
  }

  const handleTestimonialsPrev = () => {
    setTestimonialsActiveIndex((prev) =>
      prev === 0 ? customElements.length - 1 : prev - 1,
    )
  }

  return (
    <section className="mt-[4rem] lg:mt-[6rem] w-full px-5 lg:px-32 xl:px-64">
      <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
        {title}
      </h1>

      {/* Testimonials Wrapper */}
      <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px]">
        {/* Testimonials Container */}
        <ul className="relative h-[450px]">
          {/* Testimonial Box */}
          {customElements.map((testimonial, index) => {
            const { quote, authorName, authorLocation, authorRole, topic } =
              testimonial
            // Calculate the relative position of the element
            const relativeIndex = index - testimonialsActiveIndex

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
                className={`rounded-[2.5rem] absolute w-full lg:w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-between shadow-md`}
              >
                {/* Quotation Mark Icon + Quote */}
                <div>
                  {/* Quotation Mark Icon Container */}
                  <div className="w-[25%]">
                    <Image
                      src="/images/quotation_mark_icon.png"
                      alt="Quotation Mark Icon"
                      className="w-full h-full"
                      width={512}
                      height={512}
                    />
                  </div>

                  {/* Quote */}
                  <h2 className="mt-4 font-sofia font-normal text-lg leading-tight text-white">
                    {quote}
                  </h2>
                </div>

                <div>
                  <h3 className="font-sofia font-medium text-md text-white">
                    {`${authorName}, ${authorLocation} ${authorRole}`}
                  </h3>

                  <h4 className="font-sofia font-light text-sm leading-tight text-white">
                    {topic}
                  </h4>
                </div>
              </li>
            )
          })}
        </ul>
        {/* Testimonial Control Buttons */}
        <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${testimonialsActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={testimonialsActiveIndex === 0 ? true : false}
              onClick={() => handleTestimonialsPrev()}
            >
              <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
            </button>
          </li>
          <li
            className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${testimonialsActiveIndex === customElements.length - 1 ? 'opacity-50' : 'opacity-100'}`}
          >
            <button
              className="h-[2.5rem] w-[2.5rem] rounded-full"
              disabled={
                testimonialsActiveIndex === customElements.length - 1
                  ? true
                  : false
              }
              onClick={() => handleTestimonialsNext()}
            >
              <FontAwesomeIcon icon={faChevronRight} color="white" size="lg" />
            </button>
          </li>
        </ul>
      </div>
    </section>
  )
}
