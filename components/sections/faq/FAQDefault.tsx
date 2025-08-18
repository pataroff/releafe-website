import { FAQItem } from 'components/shared/FAQItem'

interface FAQDefaultProps {
  _id: string
  title: string
  customElements: any[]
}

export const FAQDefault: React.FC<FAQDefaultProps> = ({
  _id,
  title,
  customElements,
}) => {
  return (
    <section
      key={_id}
      className="my-[4rem] lg:my-[6rem] px-5 lg:px-32 flex flex-col justify-center items-center"
    >
      <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
        {title}
      </h1>

      <div className="mt-[2rem] lg:mt-[4rem] w-full">
        <div className="border-b-2">
          <h1 className="font-sofia font-normal uppercase text-2xl my-4">
            {/* @TODO: Maybe we need a field for this as well, right? */}
            Algemeen
          </h1>
        </div>
        {customElements.map((faq, index) => {
          const { question, answer } = faq
          return <FAQItem key={index} question={question} answer={answer} />
        })}
      </div>
    </section>
  )
}
