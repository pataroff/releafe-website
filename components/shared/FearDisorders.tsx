import { CustomPortableText } from './CustomPortableText'

interface FearDisordersProps {
  customElements: any[]
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

export const FearDisorders: React.FC<FearDisordersProps> = ({
  customElements,
  selectedIndex,
  setSelectedIndex,
}) => {
  const selectedDisorder = customElements[selectedIndex]

  return (
    <div className="relative mt-[4rem] rounded-[2.5rem] w-full h-full xl:h-[250px] bg-white shadow-sm p-8 xl:p-0 flex flex-col xl:flex-row items-center gap-y-8">
      {/* Selection Row */}
      <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2.5 justify-center xl:absolute xl:-top-5 xl:left-1/2 xl:transform xl:-translate-x-1/2 z-10">
        {customElements.map((subdisorder, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedIndex(idx)}
            className={`${
              selectedIndex === idx
                ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white'
                : 'bg-gray-200 hover:bg-gray-300 text-black'
            } rounded-lg text-md xl:text-lg font-sofia font-semibold text-nowrap py-2 px-10 transition duration-300 ease-in-out`}
          >
            {subdisorder.disorderName}
          </button>
        ))}
      </div>

      {/* Body */}
      <div className="flex flex-col xl:px-16 gap-y-4">
        <CustomPortableText
          value={selectedDisorder.disorderDescription}
          paragraphClasses="text-md font-sofia font-light"
        />
      </div>
    </div>
  )
}
