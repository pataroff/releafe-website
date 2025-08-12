import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b-2 flex flex-col w-full">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="font-sofia font-normal text-lg my-4">{question}</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon
            icon={faChevronDown}
            size="xl"
            className={`transform transition-transform duration-300 ease-out ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <h2 className="font-sofia font-light text-lg mb-4">{answer}</h2>
      )}
    </div>
  )
}
