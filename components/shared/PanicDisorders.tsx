import { CustomPortableText } from './CustomPortableText'

interface PanicDisordersProps {
  customElements: any[]
  selectedIndex: number
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>
}

export const PanicDisorders: React.FC<PanicDisordersProps> = ({
  customElements,
  selectedIndex,
  setSelectedIndex,
}) => {
  const selectedDisorder = customElements[selectedIndex]

  return (
    <div className="relative rounded-[2.5rem] w-full h-full bg-white shadow-sm p-8">
      {/* Panic Subdisorders Selection Row */}
      <div className="flex flex-col w-full gap-y-4 lg:gap-y-8">
        <div className="flex flex-col lg:flex-row w-full justify-center gap-x-2 gap-y-4">
          {customElements.map((subdisorder, index) => {
            return (
              <button
                key={index}
                className={`rounded-xl w-full ${selectedIndex == index ? 'bg-gradient-to-b from-[#d4e3c4] to-[#849b6f] text-white' : 'bg-gray-200 hover:bg-gray-300 text-black'} font-sofia font-semibold text-sm xl:text-lg py-2 transition duration-300 ease-in-out`}
                onClick={() => setSelectedIndex(index)}
              >
                {subdisorder.disorderName}
              </button>
            )
          })}
        </div>

        <CustomPortableText
          value={selectedDisorder.disorderDescription}
          paragraphClasses="text-md font-sofia font-light"
        />
      </div>
    </div>
  )
}
