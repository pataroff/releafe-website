import { useState } from 'react'

import axios from 'axios'

const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export const EmailSubscription = ({ value }) => {
  const [hasSubscribed, setHasSubscribed] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!emailRegex.test(email)) {
      console.log('Invalid email address provided')
      return
    }

    try {
      const response = await axios.post('/api/subscribe', { email })
      console.log('Success:', response.data)
      setHasSubscribed(true)
    } catch (error) {
      console.error('Error:', error.response?.data || 'Unknown error')
      setHasSubscribed(false)
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="font-sofia font-bold text-xl xl:text-2xl 2xl:text-3xl">
        {value.heading}
      </h2>
      {hasSubscribed ? (
        <h3 className="font-sofia font-light text-lg xl:text-xl 2xl:text-2xl">
          {value.successMessage}
        </h3>
      ) : (
        <form
          className="flex flex-col items-center lg:flex-row gap-x-2 gap-y-3 w-full"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded-full bg-gray-100 w-full xl:w-2/3 font-sofia text-md xl:text-lg h-[50px] xl:h-[60px] p-6 outline-none z-10"
            type="email"
            placeholder={value.placeholder}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={`relative flex justify-center items-center rounded-full h-[50px] lg:h-[60px]
        w-full lg:w-[24rem]
   bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] transform duration-300 ease-in-out font-sofia font-bold text-white text-md xl:text-lg leading-none`}
          >
            {/* Hover overlay */}
            <span className="absolute inset-0 bg-black opacity-0 rounded-full transition-opacity duration-300 ease-out z-0 hover:opacity-15"></span>

            {/* CTA Text */}
            <p className="relative z-10 pointer-events-none">
              {value.buttonText}
            </p>
          </button>
        </form>
      )}
    </div>
  )
}
