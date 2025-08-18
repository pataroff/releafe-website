import { urlForFile } from 'lib/sanity.file'

// @TODO Do we need to extract this into a utils file?
const formatDate = (date: Date) => {
  return date.toLocaleDateString('nl-NL', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

interface InformationalMediaProps {
  _id: string
  customElements: any[]
}

export const InformationalMedia: React.FC<InformationalMediaProps> = ({
  _id,
  customElements,
}) => {
  return (
    <section
      key={_id}
      className="xl:min-h-[calc(100vh-120px)] bg-[#F7F7F7] pt-[5rem] px-8 xl:flex xl:pt-0 "
    >
      <div className="bg-white rounded-3xl shadow-xl my-[2rem] xl:my-[4rem] max-w-[1440px] mx-auto px-8 py-12 xl:px-16 flex flex-col gap-y-12 h-full place-self-center">
        {customElements.map((media, index) => {
          const { title, date, src, videoFile, isEmbedded } = media

          return (
            <div key={index} className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-4">
                <h3 className="font-sofia font-bold text-xl">{title}</h3>
                <p className="font-sofia font-normal text-md">
                  {formatDate(new Date(date))}
                </p>
              </div>

              {isEmbedded ? (
                <iframe
                  className="w-full"
                  src={src}
                  height="399"
                  width="504"
                  title="Embedded post"
                ></iframe>
              ) : (
                <video
                  src={urlForFile(videoFile)}
                  className="object-cover w-full h-[400px]"
                  controls
                  playsInline
                />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
