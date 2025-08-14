import ScrollUp from 'components/shared/ScrollUp'

import { Section } from 'types'
import { sectionRenderers } from 'components/sections'

const OverOnsPage = ({ page }) => {
  const { sections } = page

  if (!sections || sections.length === 0) return

  // Find the index of the hero section
  const heroIndex = sections.findIndex(
    (section: Section) => section.sectionType === 'hero',
  )

  // Split sections into two groups
  const beforeHero =
    heroIndex === -1 ? sections : sections.slice(0, heroIndex + 1)

  const afterHero = heroIndex === -1 ? [] : sections.slice(heroIndex + 1)

  const informationalSections = afterHero.filter(
    (s) => s.sectionVariant === 'informational',
  )

  return (
    <>
      {/* Sections before (and including) hero */}
      {beforeHero.map((section, index) => {
        const renderSectionFn = sectionRenderers[section.sectionType]
        return renderSectionFn ? renderSectionFn(section, index) : null
      })}

      {afterHero.length > 0 &&
        (() => {
          let renderedInformational = false

          return (
            <div className="bg-gradient-to-b from-white via-[#c5d5bc50] to-white h-full">
              {afterHero.map((section: Section, index: number) => {
                if (section.sectionVariant === 'informational') {
                  if (renderedInformational) return null
                  renderedInformational = true

                  return (
                    <div
                      key={index}
                      className="bg-[#8fa58b] py-[4rem] xl:py-[6rem]"
                    >
                      <div className="max-w-[1440px] space-y-12 mx-auto px-8 lg:px-16 xl:px-32">
                        {informationalSections.map((s, i) => {
                          const renderSectionFn =
                            sectionRenderers[s.sectionType]
                          return renderSectionFn
                            ? renderSectionFn(s, beforeHero.length + index + i)
                            : null
                        })}
                      </div>
                    </div>
                  )
                }

                // Render normal sections
                const renderSectionFn = sectionRenderers[section.sectionType]
                return renderSectionFn
                  ? renderSectionFn(section, index + beforeHero.length)
                  : null
              })}
            </div>
          )
        })()}

      <ScrollUp />
    </>
  )

  // return (
  // <>
  //   {/* Main Section */}
  //   <section className="xl:min-h-[calc(100vh-120px)] bg-[#F7F7F7] xl:flex xl:flex-col xl:justify-center">
  //     {/* Main Wrapper */}
  //     <div className="flex flex-col min-h-full w-full px-8 lg:px-16 xl:px-32 pb-4 xl:pb-8 pt-28 xl:pt-12 2xl:pt-16 max-w-[1440px] place-self-center">
  //       {/* Main Container */}
  //       <div className="flex flex-col-reverse xl:flex-row justify-between items-center bg-white rounded-3xl xl:px-12 px-8 py-8 gap-y-8 shadow-lg">
  //         {/* Text Container */}
  //         <div className="space-y-8 xl:w-1/2 w-full">
  //           <h1 className="text-3xl/[2.5rem] font-sofia font-bold xl:text-4xl/[3rem] 2xl:text-5xl/[4rem]">
  //             Hoe is Releafe ontstaan?
  //           </h1>
  //           <p className="text-md xl:text-lg font-sofia font-light">
  //             Releafe is ontstaan uit persoonlijke ervaring met mentale
  //             uitdagingen en de zoektocht naar toegankelijke ondersteuning.
  //             Deze reis leidde tot het creëren van een app die inzichten,
  //             oefeningen en begeleiding biedt om anderen te helpen grip te
  //             krijgen op hun mentale welzijn.
  //           </p>
  //         </div>
  //         {/* Image Container */}
  //         <div className="relative rounded-3xl overflow-hidden w-full xl:w-[400px] xl:h-[400px] lg:h-[881px] md:h-[600px] h-[300px] shadow-md">
  //           <Image
  //             src="/images/releafe_logo_white_background.png"
  //             alt={'Releafe Logo'}
  //             fill
  //           />
  //         </div>
  //       </div>
  //       {/* Scroll Button */}
  //       <button
  //         onClick={() => {
  //           document
  //             .getElementById('letter-section')
  //             ?.scrollIntoView({ behavior: 'smooth' })
  //         }}
  //         className="mt-[2rem] xl:mt-[4rem] w-16 h-16 rounded-[1.75rem] hover:bg-gray-200 flex justify-center self-center items-center transform duration-300 ease-in-out"
  //       >
  //         <Image
  //           src="/images/chevron_down.png"
  //           alt="Chevron Down"
  //           width={40}
  //           height={40}
  //         />
  //       </button>
  //     </div>
  //   </section>

  //   {/* Letter Section */}
  //   <section
  //     id="letter-section"
  //     className="bg-[#F7F7F7] scroll-mt-[4rem] xl:-scroll-mt-[1rem] flex justify-center py-14 px-8 lg:px-32 xl:px-64"
  //   >
  //     {/* Letter Box */}
  //     <div className="rounded-3xl -sm w-full lg:w-[600px] h-full bg-white space-y-8 p-10">
  //       <p className="font-sofia font-light italic text-md xl:text-lg 2xl:text-xl">
  //         “Uit eigen ervaring weet ik hoe ingrijpend mentale uitdagingen je
  //         leven kunnen beïnvloeden. Jarenlang worstelde ik met hevige angst-
  //         en paniekklachten. Intensieve behandeltrajecten hebben uiteindelijk
  //         hun effect gehad. Mijn klachten zijn verminderd en ik kan mijn leven
  //         nu leiden op mijn eigen manier, zonder dat angst de controle heeft.
  //       </p>

  //       <p className="font-sofia font-light italic text-md xl:text-lg 2xl:text-xl">
  //         Als ik terugkijk op deze periode miste ik een toegankelijke manier
  //         om mezelf te ondersteunen bij het omgaan met mijn klachten. Ik had
  //         behoefte aan een plek met inzichten, oefeningen en begeleiding
  //         zonder overweldigd te raken. Ik probeerde van alles—therapie,
  //         ontspanningstechnieken, zelfhulpboeken—maar nergens vond ik een
  //         centrale plek waar alles samenkwam. De tools en inzichten die mij
  //         hielpen, waren versnipperd over verschillende methoden en bronnen.
  //       </p>

  //       <p className="font-sofia font-light italic text-md xl:text-lg 2xl:text-xl">
  //         Dat zette me aan het denken: wat als er een app bestond die niet
  //         alleen inzichten biedt, maar ook helpt om dagelijkse gewoonten op te
  //         bouwen? Zo is Releafe ontstaan. Een app die je ondersteunt in het
  //         omgaan met mentale klachten, zonder dat je alles zelf hoeft uit te
  //         zoeken. Een app die ik zelf had willen hebben toen ik het nodig
  //         had.”
  //       </p>

  //       <p className="font-sofia font-light italic text-md xl:text-lg 2xl:text-xl">
  //         - Jan Grobbe
  //       </p>
  //     </div>
  //   </section>

  //   {/* Our Mission & Our Vision Section */}
  //   <section>
  //     {/* Gradient Background */}
  //     <div className="bg-[#8fa58b] py-[4rem] xl:py-[6rem]">
  //       <div className="max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-32">
  //         <h2 className="font-sofia font-bold text-3xl xl:text-4xl 2xl:text-5xl text-center text-white">
  //           Onze Missie
  //         </h2>
  //         <div className="mt-[2rem] space-y-4 text-center text-white">
  //           <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
  //             Releafe helpt mensen grip te krijgen op hun mentale welzijn met
  //             praktische en bewezen tools. Onze missie? Mentale zorg
  //             toegankelijker, begrijpelijker en effectief maken, zodat niemand
  //             er alleen voor staat.
  //           </p>

  //           <p className="font-sofia font-light xl:text-lg 2xl:text-xl">
  //             Bij Releafe vind je een plek waar je op je eigen tempo en zonder
  //             oordeel aan je mentale gezondheid kunt werken. We geloven dat
  //             kleine stappen grote impact hebben, en we geven iedereen de kans
  //             om die eerste stap te zetten.
  //           </p>
  //         </div>

  //         <h2 className="font-sofia font-bold text-3xl xl:text-4xl text-center mt-[4rem] xl:mt-[6rem] text-white">
  //           Onze visie: samen werken aan welzijn
  //         </h2>

  //         <p className="font-sofia font-light xl:text-lg 2xl:text-xl mt-[2rem] text-center text-white">
  //           Wij geloven in een wereld waarin je net zo makkelijk over je
  //           mentale gezondheid praat als over een gebroken been. Samen maken
  //           we het verschil door ervoor te zorgen dat iedereen, ongeacht hun
  //           situatie, toegang heeft tot de juiste ondersteuning en tools.
  //         </p>
  //       </div>
  //     </div>
  //   </section>

  //   {/* Core Values Section */}
  //   <section className="mt-[4rem] lg:mt-[6rem] w-full">
  //     <h2 className="font-sofia font-bold text-3xl xl:text-4xl text-center">
  //       Onze kernwaarden:
  //     </h2>
  //     {/* Core Values Wrapper */}
  //     <div className="mt-[2rem] lg:mt-[4rem] mx-auto max-w-[1440px] px-8 lg:px-16 xl:px-32">
  //       {/* Core Values Container */}
  //       <ul className="relative h-[450px]">
  //         {/* Core Values Box */}
  //         {coreValuesData.map((value, index) => {
  //           const { valueEmoji, valueTitle, valueDescription } = value

  //           // Calculate the relative position of the element
  //           const relativeIndex = index - valuesActiveIndex

  //           // Dynamically compute the translateX value
  //           const translateXValue = `calc(${relativeIndex * 100}% + ${
  //             relativeIndex * 36
  //           }px)`
  //           return (
  //             <li
  //               key={index}
  //               style={{
  //                 transform: `translateX(${translateXValue})`,
  //                 transition: 'transform 0.2s ease-in-out',
  //               }}
  //               className={`rounded-[2.5rem] absolute w-[350px] h-[450px] bg-gradient-to-b from-[#c5d5bc] to-[#8fa58b] px-8 py-10 flex flex-col justify-center items-center space-y-2 shadow-md`}
  //             >
  //               <h2 className="mt-4 font-sofia font-normal text-5xl leading-tight text-white text-center">
  //                 {valueEmoji}
  //               </h2>

  //               <h3 className="font-sofia font-semibold text-white text-2xl text-center">
  //                 {valueTitle}
  //               </h3>
  //               <h3 className="font-sofia font-light text-white text-lg text-center">
  //                 {valueDescription}
  //               </h3>
  //             </li>
  //           )
  //         })}
  //       </ul>
  //       {/* Core Values Control Buttons */}
  //       <ul className="mt-[2rem] lg:mt-[4rem] w-full h-14 flex flex-row gap-x-4 justify-center lg:justify-end">
  //         <li
  //           className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#c5d6bc] hover:bg-[#b7c6ae] transform duration-300 ease-in-out ${valuesActiveIndex === 0 ? 'opacity-50' : 'opacity-100'}`}
  //         >
  //           <button
  //             className="h-[2.5rem] w-[2.5rem] rounded-full"
  //             disabled={valuesActiveIndex === 0 ? true : false}
  //             onClick={() => handleValuesPrev()}
  //           >
  //             <FontAwesomeIcon icon={faChevronLeft} color="white" size="lg" />
  //           </button>
  //         </li>
  //         <li
  //           className={`flex justify-center items-center rounded-full w-10 h-10 bg-[#96a78d] hover:bg-[#8d9b81] transform duration-300 ease-in-out ${valuesActiveIndex === coreValuesData.length - 1 ? 'opacity-50' : 'opacity-100'}`}
  //         >
  //           <button
  //             className="h-[2.5rem] w-[2.5rem] rounded-full"
  //             disabled={
  //               valuesActiveIndex === coreValuesData.length - 1 ? true : false
  //             }
  //             onClick={() => handleValuesNext()}
  //           >
  //             <FontAwesomeIcon
  //               icon={faChevronRight}
  //               color="white"
  //               size="lg"
  //             />
  //           </button>
  //         </li>
  //       </ul>
  //     </div>
  //   </section>

  //   <section className="mt-[4rem] xl:mt-[6rem]">
  //     <h2 className="font-sofia font-bold text-3xl xl:text-4xl text-center">
  //       Het Team
  //     </h2>
  //     <div className="mt-[4rem] max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-32">
  //       <div className="flex flex-col xl:flex-row gap-8">
  //         {teamData.map((teamMember, index) => {
  //           const { name, title, photo, description, socialMediaLinks } =
  //             teamMember

  //           return (
  //             <div
  //               key={index}
  //               className="flex flex-col xl:flex-row w-full shadow-md"
  //             >
  //               {/* Image Container */}
  //               <div className="relative rounded-3xl rounded-b-none xl:rounded-bl-3xl xl:rounded-r-none overflow-hidden xl:w-1/2 xl:h-full lg:h-[700px] md:h-[600px] h-[300px] w-full">
  //                 <Image
  //                   className={`object-cover ${index == 0 ? 'scale-110 object-[60%_100%]' : 'object-top'}`}
  //                   src={photo}
  //                   alt={`${name}'s Photo`}
  //                   fill
  //                 />
  //               </div>

  //               {/* Text Container */}
  //               <div className="bg-white rounded-3xl rounded-t-none xl:rounded-tr-3xl xl:rounded-l-none xl:w-1/2 w-full p-8 space-y-4">
  //                 <h2 className="font-sofia font-bold xl:text-lg 2xl:text-xl text-lg ">
  //                   {name}
  //                 </h2>
  //                 <h3 className="font-sofia font-light text-gray-500 xl:text-md 2xl:text-lg text-md">
  //                   {title}
  //                 </h3>
  //                 <h3 className="font-sofia font-light xl:text-md 2xl:text-md text-md xl:min-h-[300px]">
  //                   {description}
  //                 </h3>
  //                 {/* Divider Line */}
  //                 <div className="w-full border-[0.5px] border-[#c5d6bc]"></div>
  //                 {/* Social Media Links */}
  //                 <div className="flex flex-row space-x-4">
  //                   {socialMediaLinks.map((social, index) => {
  //                     return (
  //                       <Link key={index} href={social.href} target="_blank">
  //                         <FontAwesomeIcon
  //                           icon={social.icon}
  //                           color="#96a78d"
  //                           size="2xl"
  //                         />
  //                       </Link>
  //                     )
  //                   })}
  //                 </div>
  //               </div>
  //             </div>
  //           )
  //         })}
  //       </div>
  //       <p className="py-[4rem] font-sofia font-light text-md xl:text-lg 2xl:text-xl text-center">
  //         We werken nauw samen met een team van experts, ervaringsdeskundigen
  //         en professionals uit de regio. Door continu in gesprek te blijven
  //         met psychologen, therapeuten en technologie-experts, zorgen we
  //         ervoor dat Releafe aansluit bij de behoeften van onze gebruikers en
  //         gebaseerd is op de laatste wetenschappelijke inzichten. Zo maken we
  //         samen het verschil.
  //       </p>
  //     </div>
  //   </section>

  //   {/* Workaround: scroll to top on route change */}
  //   <ScrollUp />
  // </>
  // )
}

export default OverOnsPage
