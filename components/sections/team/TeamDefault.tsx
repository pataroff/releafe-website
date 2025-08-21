import Image from 'next/image'
import Link from 'next/link'

import { CustomPortableText } from 'components/shared/CustomPortableText'
import { urlForImage } from 'lib/sanity.image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faFacebookF,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons'

const socialIcons: Record<string, JSX.Element> = {
  linkedin: <FontAwesomeIcon icon={faLinkedin} color="#96a78d" size="2xl" />,
  facebook: <FontAwesomeIcon icon={faFacebookF} color="#96a78d" size="2xl" />,
  twitter: <FontAwesomeIcon icon={faXTwitter} color="#96a78d" size="2xl" />,
  instagram: <FontAwesomeIcon icon={faInstagram} color="#96a78d" size="2xl" />,
}

interface TeamDefaultProps {
  title: string
  body: any[]
  customElements: any[]
}

export const TeamDefault: React.FC<TeamDefaultProps> = ({
  title,
  body,
  customElements,
}) => {
  return (
    <section className="mt-[4rem] xl:mt-[6rem]">
      <h2 className="font-sofia font-bold text-3xl xl:text-4xl text-center">
        {title}
      </h2>
      <div className="mt-[4rem] max-w-[1440px] mx-auto px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col xl:flex-row gap-8">
          {customElements.map((teamMember, index) => {
            const {
              teamMemberName,
              teamMemberRole,
              teamMemberDescription,
              teamMemberImage,
              teamMemberSocialMediaLinks,
            } = teamMember

            return (
              <div key={index} className="flex flex-col xl:flex-row w-full">
                {/* Image Container */}
                <div className="relative shadow-md rounded-3xl rounded-b-none xl:rounded-bl-3xl xl:rounded-r-none overflow-hidden xl:w-1/2 xl:h-full lg:h-[700px] md:h-[600px] h-[300px] w-full">
                  <Image
                    className={`object-cover ${index == 0 ? 'scale-110 object-[60%_100%]' : 'object-top'}`}
                    src={urlForImage(teamMemberImage).url()}
                    alt={`${teamMemberName}'s Photo`}
                    fill
                  />
                </div>

                {/* Text Container */}
                <div className="bg-white shadow-md rounded-3xl rounded-t-none xl:rounded-tr-3xl xl:rounded-l-none xl:w-1/2 w-full p-8 space-y-4">
                  <h2 className="font-sofia font-bold xl:text-lg 2xl:text-xl text-lg ">
                    {teamMemberName}
                  </h2>
                  <h3 className="font-sofia font-light text-gray-500 xl:text-md 2xl:text-lg text-md">
                    {teamMemberRole}
                  </h3>
                  <CustomPortableText
                    value={teamMemberDescription}
                    headingClasses={{
                      h3: 'font-sofia font-light xl:text-md 2xl:text-md text-md xl:min-h-[300px]',
                    }}
                  />

                  {/* Divider Line */}
                  <div className="w-full border-[0.5px] border-[#c5d6bc]"></div>
                  {/* Social Media Links */}
                  <div className="flex flex-row space-x-4">
                    {teamMemberSocialMediaLinks.map((social, index) => {
                      return (
                        <Link key={index} href={social.url} target="_blank">
                          {socialIcons[social.platform]}
                        </Link>
                      )
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <CustomPortableText
          value={body}
          paragraphClasses="py-[4rem] font-sofia font-light text-md xl:text-lg 2xl:text-xl text-center"
        />
      </div>
    </section>
  )
}
