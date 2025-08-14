import { buildFileUrl, getFileAsset } from '@sanity/asset-utils'
import { projectId, dataset } from './sanity.api'

export const urlForFile = (src: any) => {
  if (!src) return null

  const options = {
    projectId,
    dataset,
  }

  const url = buildFileUrl(getFileAsset(src, options), options)
  return url
}
