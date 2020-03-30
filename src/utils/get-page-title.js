import defaultSettings from '@/settings'

const title = defaultSettings.title || '儿童预防接种系统'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
