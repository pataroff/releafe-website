import { apiVersion, basePath, dataset, projectId } from 'lib/sanity.api'
import { createClient } from 'next-sanity'

export function getClient(preview?: { token: string }) {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    perspective: 'published',
    stega: {
      enabled:
        process.env.NEXT_PUBLIC_VERCEL_ENV === 'preview' ||
        typeof preview?.token === 'string',
      studioUrl: basePath,
      logger: console,
      filter: (props) => {
        // Do not encode these fields in section objects
        if (
          props.sourcePath.at(-1) === 'sectionType' ||
          props.sourcePath.at(-1) === 'sectionVariant'
        ) {
          return false
        }

        // Everything else: keep default behavior
        return props.filterDefault(props)
      },
    },
  })
  if (preview) {
    if (!preview.token) {
      throw new Error('You must provide a token to preview drafts')
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    })
  }
  return client
}
