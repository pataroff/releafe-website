import { FAQItem } from 'components/shared/FAQItem'

interface FAQDefaultProps {
  title: string
  faqCategoryText: string
  customElements: any[]
}

export const FAQDefault: React.FC<FAQDefaultProps> = ({
  title,
  faqCategoryText,
  customElements,
}) => {
  return (
    <section className="my-[4rem] lg:my-[6rem] px-5 lg:px-32 xl:px-64 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-sofia font-bold md:text-4xl text-center">
        {title}
      </h1>

      <div className="mt-[2rem] lg:mt-[4rem] w-full">
        <div className="border-b-2">
          <h1 className="font-sofia font-normal uppercase text-2xl my-4">
            {faqCategoryText}
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
