import Link from 'next/link'

const Custom404Page = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center px-8 gap-y-8 bg-white">
      <h1 className="font-bold text-2xl xl:text-5xl text-black">
        Oops! Page Not Found
      </h1>
      <p className="font-sofia font-light text-lg xl:text-xl text-black">
        Sorry, the page you are looking for does not exist yet.
      </p>
      <Link
        href="/"
        className="font-sofia font-light text-md xl:text-lg text-blue-500 underline"
      >
        Go back to the homepage
      </Link>
    </div>
  )
}

export default Custom404Page
