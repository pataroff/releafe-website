export default {
  name: 'emailSubscription',
  title: 'Email Subscription',
  type: 'object',
  fields: [
    {
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'Main heading text, e.g., "📩 Blijf op de hoogte:"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
      description: 'Message shown after successful subscription',
      initialValue: 'You have subscribed successfully! 🎉',
    },
    {
      name: 'placeholder',
      title: 'Input Placeholder',
      type: 'string',
      description: 'Placeholder for the email input',
      initialValue: 'email@example.com',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text on the submit button',
      initialValue: 'Meld je aan',
    },
  ],
}
