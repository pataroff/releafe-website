import { useState, useEffect } from 'react'
import { useFormValue } from 'sanity'

const DynamicVariantSelect = (props) => {
  const { schemaType, renderDefault } = props

  // Access the parent `sectionType` value from the root path
  const sectionType = useFormValue(['sectionType']) as string

  const [listItems, setListItems] = useState([])

  useEffect(() => {
    if (!sectionType) {
      setListItems([{ title: 'Select a section type first', value: '' }])
      return
    }

    const variantsByType = {
      default: [{ title: 'Default', value: 'default' }],
      informational: [
        { title: 'Default', value: 'default' },
        { title: 'Informational (Grouped)', value: 'informationalGrouped' },
        { title: 'Informational (Mockup)', value: 'informationalMockup' },
        {
          title: 'Informational (Organisaties)',
          value: 'informationalOrganisaties',
        },
        { title: 'Informational (Over ons)', value: 'informationalOverOns' },
        { title: 'Informational (Media)', value: 'informationalMedia' },
        { title: 'Informational (Articles)', value: 'informationalArticles' },
        { title: 'Informational (Research)', value: 'informationalResearch' },
      ],
      cta: [{ title: 'Default', value: 'default' }],
      hero: [
        { title: 'Default', value: 'default' },
        { title: 'Landing', value: 'landing' },
        { title: 'Informational', value: 'informational' },
        { title: 'Informational (Over ons)', value: 'informationalOverOns' },
        { title: 'Call To Action', value: 'cta' },
      ],
      header: [
        { title: 'Default', value: 'default' },
        { title: 'Informational (Over ons)', value: 'informationalOverOns' },
      ],
    }

    setListItems(variantsByType[sectionType] || variantsByType['default'])
  }, [sectionType])

  return renderDefault({
    ...props,
    schemaType: {
      ...schemaType,
      options: {
        ...schemaType.options,
        list: listItems,
        layout: 'dropdown',
      },
    },
  })
}

export default DynamicVariantSelect
